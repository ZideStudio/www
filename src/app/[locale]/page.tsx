import type { Locale } from '@/i18n/config';
import { HOME_CONTENT_ID } from '@constants/home';
import { buildPageMetadata } from '@utils/seo';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { HomeAbout } from './home/about';
import { Banner } from './home/banner';
import { HomeExplore } from './home/explore';
import { HomeFeaturedProject } from './home/featured';
import { Landing } from './home/landing';
import { HomeOtherProjects } from './home/others';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.home' });

  return buildPageMetadata({ locale: locale as Locale, path: '', title: t('title'), description: t('description') });
}

export default function Page() {
  return (
    <div className="home-snap">
      <Landing />

      <div id={HOME_CONTENT_ID} className="bg-primary relative snap-start -scroll-mt-9 scroll-mb-[500vh] sm:-scroll-mt-12 md:-scroll-mt-16">
        <Banner />

        <div className="flex flex-col space-y-24 pt-10 md:mt-16 md:space-y-40 md:pt-0">
          <HomeAbout />
          <HomeFeaturedProject />
          <HomeOtherProjects />
          <HomeExplore />
        </div>
      </div>
    </div>
  );
}
