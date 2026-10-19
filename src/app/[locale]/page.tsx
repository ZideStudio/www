import type { Locale } from '@/i18n/config';
import { buildPageMetadata } from '@utils/seo';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Marquee from 'react-fast-marquee';
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

export default async function Page() {
  const t = await getTranslations('home');

  return (
    <div>
      <Landing />

      <div className="bg-primary relative">
        <Marquee
          speed={25}
          pauseOnClick
          className="absolute -top-10 z-20 overflow-y-hidden text-7xl font-bold uppercase select-none sm:-top-14 sm:text-8xl md:-top-20 md:text-9xl"
        >
          {[t('banner.webapps'), t('banner.softwares'), t('banner.cli'), t('banner.extensions')].map((item, index) => {
            let textGradient: string;
            let dotGradient: string;
            if (index % 2 === 0) {
              textGradient = 'from-text to-text/75';
              dotGradient = 'text-text/75';
            } else {
              textGradient = 'from-text/75 to-text';
              dotGradient = 'text-text';
            }

            return (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} className="flex flex-row justify-center align-middle">
                <p className={`bebas-neue-regular ${textGradient} ml-3 bg-gradient-to-r bg-clip-text text-transparent sm:ml-5`}>{item}</p>
                <i className={`pi pi-circle-fill ${dotGradient} my-auto ml-3 text-xl sm:ml-5 sm:text-2xl md:text-3xl`} />
              </div>
            );
          })}
        </Marquee>

        <div className="flex flex-col space-y-24 pt-10 md:my-16 md:space-y-40 md:pt-0">
          <HomeFeaturedProject />
          <HomeOtherProjects />
        </div>
      </div>
    </div>
  );
}
