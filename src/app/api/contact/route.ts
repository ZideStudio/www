import { defaultLocale, locales, type Locale } from '@/i18n/config';
import { getTranslations } from 'next-intl/server';
import { NextResponse, type NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const RECAPTCHA_ACTION = 'contact';
const RECAPTCHA_MIN_SCORE = 0.5;
const ALLOWED_HOSTNAMES = ['zide.fr', 'stg.zide.fr', 'localhost'];

const MAX_EMAIL_LENGTH = 254;
const MAX_NAME_LENGTH = 100;
const MAX_TITLE_LENGTH = 150;
const MAX_COMMENT_LENGTH = 5000;

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const submissionsByIp = new Map<string, number[]>();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LINE_BREAK_REGEX = /[\r\n]/;

type ContactBody = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  title?: unknown;
  comment?: unknown;
  locale?: unknown;
  token?: unknown;
  website?: unknown;
};

type RecaptchaAssessment = {
  tokenProperties?: { valid?: boolean; invalidReason?: string; action?: string; hostname?: string };
  riskAnalysis?: { score?: number; reasons?: string[] };
};

const log = (message: string, details?: unknown) => console.error(`[contact] ${message}`, details ?? '');

const missingEnv = (names: string[]) => names.filter((name) => !process.env[name]);

const describeError = (error: unknown) => {
  if (!(error instanceof Error)) return error;
  const { code, command, response, responseCode } = error as Error & { code?: string; command?: string; response?: string; responseCode?: number };
  return { name: error.name, message: error.message, code, command, responseCode, response };
};

const errorResponse = (error: string, status: number) => NextResponse.json({ error }, { status });

const getClientIp = (request: NextRequest) => request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '';

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) ?? []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    submissionsByIp.set(ip, recent);
    return true;
  }

  submissionsByIp.set(ip, [...recent, now]);
  return false;
};

const isLocale = (value: unknown): value is Locale => locales.some((locale) => locale === value);

const verifyRecaptcha = async (token: string, ip: string, userAgent: string): Promise<boolean | null> => {
  const { RECAPTCHA_PROJECT_ID, RECAPTCHA_API_KEY, NEXT_PUBLIC_RECAPTCHA_SITE_KEY } = process.env;
  if (!RECAPTCHA_PROJECT_ID || !RECAPTCHA_API_KEY || !NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
    log('reCAPTCHA env vars missing', missingEnv(['RECAPTCHA_PROJECT_ID', 'RECAPTCHA_API_KEY', 'NEXT_PUBLIC_RECAPTCHA_SITE_KEY']));
    return null;
  }

  try {
    const response = await fetch(`https://recaptchaenterprise.googleapis.com/v1/projects/${RECAPTCHA_PROJECT_ID}/assessments?key=${RECAPTCHA_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        event: {
          token,
          siteKey: NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          expectedAction: RECAPTCHA_ACTION,
          userAgent,
          userIpAddress: ip || undefined,
        },
      }),
    });

    if (!response.ok) {
      const errorBody: { error?: { code?: number; status?: string; message?: string } } = await response.json().catch(() => ({}));
      log('reCAPTCHA assessment request rejected by Google', { httpStatus: response.status, ...errorBody.error });
      return null;
    }

    const assessment: RecaptchaAssessment = await response.json();
    const { tokenProperties, riskAnalysis } = assessment;
    const score = riskAnalysis?.score ?? 0;

    const checks = {
      valid: tokenProperties?.valid === true,
      actionMatches: tokenProperties?.action === RECAPTCHA_ACTION,
      hostnameAllowed: ALLOWED_HOSTNAMES.includes(tokenProperties?.hostname ?? ''),
      scoreOk: score >= RECAPTCHA_MIN_SCORE,
    };

    if (!Object.values(checks).every(Boolean)) {
      log('reCAPTCHA token rejected', {
        checks,
        invalidReason: tokenProperties?.invalidReason,
        action: tokenProperties?.action,
        hostname: tokenProperties?.hostname,
        score,
        reasons: riskAnalysis?.reasons,
      });
      return false;
    }

    return true;
  } catch (error) {
    log('reCAPTCHA assessment request failed', describeError(error));
    return null;
  }
};

export async function POST(request: NextRequest) {
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return errorResponse('invalid_request', 400);
  }

  // Honeypot: bots fill every field, humans never see this one.
  if (typeof body.website === 'string' && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const { email, comment, token } = body;
  if (typeof email !== 'string' || typeof comment !== 'string' || typeof token !== 'string') {
    return errorResponse('invalid_request', 400);
  }

  // Optional fields: anything that is not a string is treated as empty.
  const optionalText = (value: unknown) => (typeof value === 'string' ? value.trim() : '');
  const cleanFirstName = optionalText(body.firstName);
  const cleanLastName = optionalText(body.lastName);
  const cleanTitle = optionalText(body.title);
  const cleanEmail = email.trim();
  const cleanComment = comment.trim();

  const isInvalidOptional = (value: string, maxLength: number) => value.length > maxLength || LINE_BREAK_REGEX.test(value);

  if (
    !EMAIL_REGEX.test(cleanEmail) ||
    cleanEmail.length > MAX_EMAIL_LENGTH ||
    LINE_BREAK_REGEX.test(cleanEmail) ||
    !cleanComment ||
    cleanComment.length > MAX_COMMENT_LENGTH ||
    isInvalidOptional(cleanFirstName, MAX_NAME_LENGTH) ||
    isInvalidOptional(cleanLastName, MAX_NAME_LENGTH) ||
    isInvalidOptional(cleanTitle, MAX_TITLE_LENGTH)
  ) {
    return errorResponse('invalid_request', 400);
  }

  const fullName = [cleanFirstName, cleanLastName].filter(Boolean).join(' ');

  const locale = isLocale(body.locale) ? body.locale : defaultLocale;
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return errorResponse('rate_limit', 429);
  }

  const captchaResult = await verifyRecaptcha(token, ip, request.headers.get('user-agent') ?? '');
  if (captchaResult === null) {
    return errorResponse('server', 502);
  }
  if (!captchaResult) {
    return errorResponse('captcha', 403);
  }

  const { EMAIL_HOST, EMAIL_PORT, EMAIL_ADDRESS, EMAIL_PASSWORD, CONTACT_RECIPIENT } = process.env;
  if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_ADDRESS || !EMAIL_PASSWORD || !CONTACT_RECIPIENT) {
    log('SMTP env vars missing', missingEnv(['EMAIL_HOST', 'EMAIL_PORT', 'EMAIL_ADDRESS', 'EMAIL_PASSWORD', 'CONTACT_RECIPIENT']));
    return errorResponse('server', 502);
  }

  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT),
    secure: false,
    requireTLS: true,
    auth: { user: EMAIL_ADDRESS, pass: EMAIL_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: `"Zide" <${EMAIL_ADDRESS}>`,
      to: CONTACT_RECIPIENT,
      replyTo: cleanEmail,
      subject: `[Contact] ${cleanTitle || fullName || cleanEmail}`,
      text: [
        `From: ${fullName ? `${fullName} <${cleanEmail}>` : cleanEmail}`,
        `Language: ${locale}`,
        ...(cleanTitle ? [`Subject: ${cleanTitle}`] : []),
        '',
        cleanComment,
      ].join('\n'),
    });
  } catch (error) {
    log('failed to send contact email', describeError(error));
    return errorResponse('server', 502);
  }

  // The message is already delivered: a failed acknowledgement must not fail the request.
  try {
    const t = await getTranslations({ locale, namespace: 'contact.email' });
    await transporter.sendMail({
      from: `"Zide" <${EMAIL_ADDRESS}>`,
      to: cleanEmail,
      subject: t('subject'),
      text: [
        fullName ? t('greeting_named', { name: fullName }) : t('greeting'),
        '',
        cleanTitle ? t('request_titled', { title: cleanTitle }) : t('request'),
        '',
        t('footer'),
      ].join('\n'),
    });
  } catch (error) {
    log('failed to send acknowledgement email', describeError(error));
  }

  return NextResponse.json({ ok: true });
}
