'use client';

import { Title } from '@components/Title';
import { useTranslations } from 'next-intl';

export default function TermsOfService() {
  const t = useTranslations('termsOfService');

  return (
    <main className="text-text container mx-auto px-4 py-8">
      <Title className="mb-8 text-center text-4xl">{t('title')}</Title>

      <div className="prose prose-invert mx-auto max-w-4xl">
        <section className="my-10">
          <p>{t('introduction')}</p>
          <p className="mt-2">{t('introductionScope')}</p>
          <p className="mt-2">{t('introductionAcceptance')}</p>
        </section>

        <section className="my-12">
          <Title>1. {t('objectTitle')}</Title>
          <p>{t('objectDesc')}</p>
          <p className="mt-4">{t('objectDetails')}</p>
        </section>

        <section className="my-12">
          <Title>2. {t('accessTitle')}</Title>
          <p>{t('accessDesc')}</p>
          <p className="mt-4">{t('accessDetails')}</p>
        </section>

        <section className="my-12">
          <Title>3. {t('accountsTitle')}</Title>
          <p>{t('accountsIntro')}</p>
          <p className="mt-4">{t('accountsDetails')}</p>
        </section>

        <section className="my-12">
          <Title>4. {t('intellectualPropertyTitle')}</Title>
          <p>{t('intellectualPropertyDesc')}</p>
          <p className="mt-4">{t('trademarksDesc')}</p>
        </section>

        <section className="my-12">
          <Title>5. {t('advertisingTitle')}</Title>
          <p>{t('advertisingDesc')}</p>
          <p className="mt-4">{t('advertisingDetails')}</p>
        </section>

        <section className="my-12">
          <Title>6. {t('externalLinksTitle')}</Title>
          <p>{t('externalLinksDesc')}</p>
          <p className="mt-4">{t('externalLinksDetails')}</p>
        </section>

        <section className="my-12">
          <Title>7. {t('conductRulesTitle')}</Title>
          <p>{t('conductRulesIntro')}</p>
          <p className="mt-4">{t('conductRulesDetails')}</p>
          <p className="mt-4 text-sm text-gray-400">{t('conductRulesConsequences')}</p>
        </section>

        <section className="my-12">
          <Title>8. {t('terminationTitle')}</Title>
          <p>{t('terminationDesc')}</p>
        </section>

        <section className="my-12">
          <Title>9. {t('contactTitle')}</Title>
          <p>{t('contactDesc')}</p>
        </section>

        <p className="mt-8 text-sm text-gray-500 opacity-60">{t('lastUpdated')}: 20 novembre 2024</p>
      </div>
    </main>
  );
}
