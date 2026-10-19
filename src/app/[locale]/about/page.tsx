import { PageHeader } from '@components/PageHeader';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Languages } from './languages';
import { Presentation } from './presentation';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Zide is a collective of passionate developers building innovative tools, whether for fellow developers or for the general public',
  openGraph: {
    title: 'About Us',
    description: 'Zide is a collective of passionate developers building innovative tools, whether for fellow developers or for the general public',
    url: `https://zide.fr/about`,
    siteName: 'Zide',
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    type: 'website',
  },
};

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="text-text flex flex-col space-y-20 pb-16 md:pb-24">
      <PageHeader
        title={t('banner.title')}
        descriptionEn={t('banner.description')}
        descriptionFr={t('banner.description')}
        imagePath="/assets/background/about.avif"
      />
      <div className="flex flex-col space-y-40">
        <Presentation />
        <Languages />
      </div>
    </div>
  );
}
