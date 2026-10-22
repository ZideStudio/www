import { Reveal } from '@components/Reveal';
import { Tag } from '@components/Tag';
import { Title } from '@components/Title';
import { HOME_ABOUT_POINTS } from '@constants/home';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const HomeAbout = () => {
  const t = useTranslations('home.about');

  return (
    <section className="relative overflow-x-clip px-5 md:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-20">
        <Reveal direction="right" className="relative mx-auto w-48 sm:w-64 lg:order-last lg:w-full lg:max-w-sm">
          <div aria-hidden="true" className="bg-activeprimary absolute inset-6 -z-10 rounded-full opacity-30 blur-3xl" />
          <div className="border-activeprimary shadow-primary/60 rotate-3 overflow-hidden rounded-2xl border-5 shadow-2xl transition-transform duration-500 motion-safe:hover:scale-105 motion-safe:hover:rotate-1">
            <Image
              src="/assets/logo/zide_square.png"
              alt={t('logo_alt')}
              width={539}
              height={539}
              sizes="(max-width: 1024px) 256px, 384px"
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <div className="flex flex-col space-y-6">
          <Reveal direction="left">
            <Tag>{t('tag')}</Tag>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <Title as="h2">{t('title')}</Title>
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <p className="text-text text-lg">{t('description')}</p>
          </Reveal>

          <Reveal direction="left" delay={0.3}>
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {HOME_ABOUT_POINTS.map(({ key, icon }) => (
                <li key={key} className="flex items-start gap-3">
                  <i className={`pi pi-${icon} text-activesecondary mt-1 shrink-0 text-lg`} />
                  <div className="flex flex-col space-y-1">
                    <span className="text-text font-semibold">{t(`points.${key}.title`)}</span>
                    <span className="text-text/75 text-sm break-words">{t(`points.${key}.description`)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
