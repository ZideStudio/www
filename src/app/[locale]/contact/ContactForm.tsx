'use client';

import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Textarea } from '@components/Textarea';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(comment);
    const mailtoLink = `mailto:contact@zide.fr?subject=${subject}&body=${body}`;

    // Open default mail application
    window.location.href = mailtoLink;

    // Show success message
    setIsSubmitted(true);
  };

  const handleSendAnother = () => {
    setIsSubmitted(false);
    setTitle('');
    setComment('');
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-text mb-4 text-4xl font-bold">{t('success.title')}</h1>
          <p className="text-text/70 mb-8 text-lg">{t('success.message')}</p>

          <div className="flex justify-center gap-4">
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
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-text mb-4 text-4xl font-bold">{t('title')}</h1>
          <p className="text-text/70 text-lg">{t('description')}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="text-text mb-2 block text-sm font-medium">
              {t('form.title_label')}
            </label>
            <Input placeholder={t('form.title_placeholder')} icon="tag" onChange={setTitle} required className="w-full" />
          </div>

          <div>
            <label htmlFor="comment" className="text-text mb-2 block text-sm font-medium">
              {t('form.comment_label')}
            </label>
            <Textarea placeholder={t('form.comment_placeholder')} icon="comment" onChange={setComment} required rows={6} className="w-full" />
          </div>

          <div className="flex justify-center">
            <Button primary icon="send" type="submit" className="px-8 py-3">
              {t('form.send')}
            </Button>
          </div>
        </form>

        {/* Information message */}
        <div className="bg-primary/50 border-text/10 mt-8 flex flex-row justify-center space-x-5 rounded-lg border p-4">
          <i className="pi pi-info-circle text-text mb-2 block text-center text-xl" />
          <p className="text-text/70 text-center text-sm">{t('info')}</p>
        </div>
      </div>
    </div>
  );
}
