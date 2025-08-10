import { PageBanner } from '@components/PageBanner';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Projects } from './client';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'List of projects developed by our team',
};

export default function Page() {
  const t = useTranslations('projects');

  return (
    <div className="text-text">
      <PageBanner
        title={t('banner.title')}
        descriptionEn={t('banner.description')}
        descriptionFr={t('banner.description')}
        imageUrl="/assets/background/projects.jpg"
      />
      <Projects />
    </div>
  );
}
