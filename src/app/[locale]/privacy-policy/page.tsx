'use client';

import { Title } from '@components/Title';
import { useTranslations } from 'next-intl';

export default function PrivacyPolicy() {
  const t = useTranslations('privacyPolicy');

  return (
    <main className="text-text container mx-auto px-4 py-8">
      <Title className="mb-8 text-center text-4xl">{t('title')}</Title>

      <div className="prose prose-invert mx-auto max-w-4xl">
        <section className="my-8">
          <Title>{t('introTitle')}</Title>
          <p>{t('introDesc')}</p>
          <p className="mt-2">{t('introRespect')}</p>
        </section>

        <section className="my-12">
          <Title>{t('dataCollectedTitle')}</Title>
          <p>{t('dataCollectedIntro')}</p>
          <p className="mt-4">{t('dataCollectedNone')}</p>
          <p className="mt-2">{t('dataCollectedAdsense')}</p>
        </section>

        <section className="my-12">
          <Title>{t('purposesTitle')}</Title>
          <p>{t('purposesIntro')}</p>
          <p className="mt-4">{t('adsenseTitle')}</p>
          <p className="mt-4">{t('securityPurpose')}</p>
        </section>

        <section className="my-12">
          <Title>{t('cookiesTitle')}</Title>
          <p>{t('cookiesIntro')}</p>
          <p className="mt-4">{t('cookiesManagement')}</p>
        </section>

        <section className="my-12">
          <Title>{t('sharingTitle')}</Title>
          <p>{t('sharingIntro')}</p>
        </section>

        <section className="my-12">
          <Title>{t('retentionTitle')}</Title>
          <p>{t('retentionIntro')}</p>
          <p className="mt-4">{t('retentionDetails')}</p>
        </section>

        <section className="my-12">
          <Title>{t('rightsTitle')}</Title>
          <p>{t('rightsDesc')}</p>
          <p className="mt-4">{t('rightsExercise')}</p>
          <p className="mt-2">{t('rightsComplaint')}</p>
        </section>

        <section className="my-12">
          <Title>{t('securityTitle')}</Title>
          <p>{t('securityDesc')}</p>
        </section>

        <section className="my-12">
          <Title>{t('changesTitle')}</Title>
          <p>{t('changesDesc')}</p>
        </section>

        <section className="my-12">
          <Title>{t('contactTitle')}</Title>
          <p>{t('contactDesc')}</p>
        </section>

        <p className="mt-8 text-sm text-gray-500 opacity-60">{t('lastUpdated')}: 20 novembre 2024</p>
      </div>
    </main>
  );
}
