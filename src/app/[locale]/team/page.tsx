import type { Locale } from '@/i18n/config';
import { PageHeader } from '@components/PageHeader';
import { buildPageMetadata } from '@utils/seo';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Members } from './members';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.team' });

  return buildPageMetadata({
    locale: locale as Locale,
    path: '/team',
    title: t('title'),
    description: t('description'),
    image: 'https://zide.fr/assets/background/team.jpg',
  });
}

export default function TeamPage() {
  const t = useTranslations('team');

  return (
    <div className="text-text space-y-20">
      <PageHeader
        title={t('banner.title')}
        descriptionEn={t('banner.description')}
        descriptionFr={t('banner.description')}
        imagePath="/assets/background/team.jpg"
      />
      <Members />
    </div>
  );
}
