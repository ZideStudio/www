import type { Locale } from '@/i18n/config';
import { PageHeader } from '@components/PageHeader';
import { buildPageMetadata } from '@utils/seo';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Languages } from './languages';
import { Presentation } from './presentation';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.about' });

  return buildPageMetadata({ locale: locale as Locale, path: '/about', title: t('title'), description: t('description') });
}

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="text-text flex flex-col space-y-20">
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
