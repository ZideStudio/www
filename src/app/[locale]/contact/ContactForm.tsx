'use client';

import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Textarea } from '@components/Textarea';
import { useRecaptcha } from '@hooks/useRecaptcha';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import toast from 'react-hot-toast';

const ERROR_KEYS = ['invalid_request', 'captcha', 'rate_limit', 'server'] as const;
type ErrorKey = (typeof ERROR_KEYS)[number];

const isErrorKey = (value: unknown): value is ErrorKey => ERROR_KEYS.some((key) => key === value);

export default function ContactForm() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const { execute } = useRecaptcha('contact');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [website, setWebsite] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    try {
      const token = await execute();
      if (!token) {
        toast.error(t('errors.captcha'));
        return;
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, title, comment, locale, token, website }),
      });

      if (!response.ok) {
        const data: { error?: unknown } = await response.json().catch(() => ({}));
        toast.error(t(`errors.${isErrorKey(data.error) ? data.error : 'server'}`));
        return;
      }

      setIsSubmitted(true);
    } catch {
      toast.error(t('errors.server'));
    } finally {
      setIsSending(false);
    }
  };

  const requiredMark = (
    <span aria-hidden="true" className="text-danger">
      *
    </span>
  );

  const handleSendAnother = () => {
    setIsSubmitted(false);
    setFirstName('');
    setLastName('');
    setEmail('');
    setTitle('');
    setComment('');
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 pt-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-text mb-4 text-4xl font-bold">{t('success.title')}</h2>
          <p className="text-text/70 mb-8 text-lg break-words">{t('success.message', { email })}</p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button primary href={'/'} icon="arrow-left">
              {t('success.back_home')}
            </Button>
            <Button onClick={handleSendAnother} icon="replay">
              {t('success.send_another')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-16">
      <div className="mx-auto max-w-2xl">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="text-text mb-2 block text-sm font-medium">
                {t('form.first_name_label')}
              </label>
              <Input
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                placeholder={t('form.first_name_placeholder')}
                icon="user"
                value={firstName}
                onChange={setFirstName}
                maxLength={100}
                disabled={isSending}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="text-text mb-2 block text-sm font-medium">
                {t('form.last_name_label')}
              </label>
              <Input
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                placeholder={t('form.last_name_placeholder')}
                icon="user"
                value={lastName}
                onChange={setLastName}
                maxLength={100}
                disabled={isSending}
                className="w-full"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-text mb-2 block text-sm font-medium">
              {t('form.email_label')} {requiredMark}
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={t('form.email_placeholder')}
              icon="envelope"
              value={email}
              onChange={setEmail}
              maxLength={254}
              disabled={isSending}
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="title" className="text-text mb-2 block text-sm font-medium">
              {t('form.title_label')}
            </label>
            <Input
              id="title"
              name="title"
              placeholder={t('form.title_placeholder')}
              icon="tag"
              value={title}
              onChange={setTitle}
              maxLength={150}
              disabled={isSending}
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="comment" className="text-text mb-2 block text-sm font-medium">
              {t('form.comment_label')} {requiredMark}
            </label>
            <Textarea
              id="comment"
              name="comment"
              placeholder={t('form.comment_placeholder')}
              icon="comment"
              value={comment}
              onChange={setComment}
              maxLength={5000}
              disabled={isSending}
              required
              rows={6}
              className="w-full"
            />
          </div>

          {/* Honeypot: invisible to humans, filled by bots */}
          <div aria-hidden="true" className="sr-only">
            <label htmlFor="website">{t('form.honeypot_label')}</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
          </div>

          <div className="flex justify-center">
            <Button primary icon={isSending ? 'spinner pi-spin' : 'send'} type="submit" disabled={isSending} className="px-8 py-3">
              {isSending ? t('form.sending') : t('form.send')}
            </Button>
          </div>
        </form>

        {/* Information message */}
        <div className="bg-primary/50 border-text/10 mt-8 flex flex-row justify-center space-x-5 rounded-lg border p-4">
          <i className="pi pi-info-circle text-text mb-2 block text-center text-xl" />
          <p className="text-text/70 text-center text-sm">{t('info')}</p>
        </div>

        {/* reCAPTCHA notice (badge-free integration) */}
        <p className="text-text/50 mt-4 text-center text-xs">
          {t.rich('recaptcha_notice', {
            privacy: (chunks) => (
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
                {chunks}
              </a>
            ),
            terms: (chunks) => (
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>
    </div>
  );
}
