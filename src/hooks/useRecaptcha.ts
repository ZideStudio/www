import { useCallback, useEffect, useState } from 'react';

type RecaptchaEnterprise = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: { enterprise?: RecaptchaEnterprise };
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';
const SCRIPT_ID = 'recaptcha-enterprise';
const BADGE_VISIBLE_CLASS = 'recaptcha-badge-visible';

export const useRecaptcha = (action: string) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    document.body.classList.add(BADGE_VISIBLE_CLASS);
    return () => document.body.classList.remove(BADGE_VISIBLE_CLASS);
  }, []);

  useEffect(() => {
    if (!SITE_KEY) {
      console.error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set');
      return;
    }

    const markReady = () => window.grecaptcha?.enterprise?.ready(() => setIsReady(true));

    const existing = document.getElementById(SCRIPT_ID);
    if (existing) {
      markReady();
      existing.addEventListener('load', markReady);
      return () => existing.removeEventListener('load', markReady);
    }

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${SITE_KEY}`;
    script.async = true;
    script.addEventListener('load', markReady);
    document.head.appendChild(script);

    return () => script.removeEventListener('load', markReady);
  }, []);

  const execute = useCallback(async (): Promise<string | null> => {
    const enterprise = window.grecaptcha?.enterprise;
    if (!enterprise || !SITE_KEY) return null;

    try {
      return await new Promise<string>((resolve, reject) => {
        enterprise.ready(() => enterprise.execute(SITE_KEY, { action }).then(resolve, reject));
      });
    } catch (error) {
      console.error('reCAPTCHA execution failed', error);
      return null;
    }
  }, [action]);

  return { execute, isReady };
};
