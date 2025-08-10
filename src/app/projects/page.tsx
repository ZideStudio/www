import { PageBanner } from '@components/PageBanner';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Projects } from './client';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Digital simplicity, greater efficiency. We develop open-source applications to help you improve your efficiency',
};

export default function Page() {
  const t = useTranslations('projects');

  return (
    <div className="text-text">
      <PageBanner title={t('banner.title')} description={t('banner.description')} />
      <Projects />
    </div>
  );
}
