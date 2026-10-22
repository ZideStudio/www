import { PageHeader } from '@components/PageHeader';
import { SITE_URL } from '@utils/seo';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Projects } from './client';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'List of projects developed by our team',
  openGraph: {
    title: 'Projects',
    description: 'List of projects developed by our team',
    url: `https://zide.fr/projects`,
    siteName: 'Zide',
    images: [{ url: `${SITE_URL}/assets/og/projects.png`, alt: 'Projects' }],
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    type: 'website',
  },
};

export default function Page() {
  const t = useTranslations('projects');

  return (
    <div className="text-text">
      <PageHeader
        title={t('banner.title')}
        descriptionEn={t('banner.description')}
        descriptionFr={t('banner.description')}
        imagePath="/assets/background/projects.jpg"
      />
      <Projects />
    </div>
  );
}
