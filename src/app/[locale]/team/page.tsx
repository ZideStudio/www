import { PageHeader } from '@components/PageHeader';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Members } from './members';

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the developers behind Zide',
  openGraph: {
    title: 'Team',
    description: 'Meet the developers behind Zide',
    url: `https://zide.fr/team`,
    siteName: 'Zide',
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    type: 'website',
  },
};

export default function TeamPage() {
  const t = useTranslations('team');

  return (
    <div className="text-text space-y-20">
      <PageHeader
        title={t('banner.title')}
        descriptionEn={t('banner.description')}
        descriptionFr={t('banner.description')}
        imagePath="/assets/background/team.jpg"
        variant="light"
      />
      <Members />
    </div>
  );
}
