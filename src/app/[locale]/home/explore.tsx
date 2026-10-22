import { Link } from '@/i18n/routing';
import { Reveal } from '@components/Reveal';
import { Tag } from '@components/Tag';
import { Title } from '@components/Title';
import { HOME_EXPLORE_LINKS } from '@constants/home';
import { useTranslations } from 'next-intl';

export const HomeExplore = () => {
  const t = useTranslations('home.explore');

  return (
    <section className="flex flex-col items-center px-5 md:px-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center">
        <Reveal>
          <Tag>{t('tag')}</Tag>
        </Reveal>
        <Reveal delay={0.1}>
          <Title as="h2">{t('title')}</Title>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-text text-lg">{t('description')}</p>
        </Reveal>
      </div>

      <ul className="mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {HOME_EXPLORE_LINKS.map(({ key, icon, href }, index) => (
          <li key={key} className="flex">
            <Reveal delay={index * 0.1} className="flex w-full">
              <Link
                href={href}
                className="group border-text/10 bg-secondary hover:border-activeprimary focus-visible:border-activeprimary flex w-full flex-row items-start gap-4 rounded-2xl border p-5 transition-colors duration-300 sm:flex-col sm:p-6"
              >
                <span className="bg-activeprimary/15 text-activesecondary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                  <i className={`pi pi-${icon} text-xl`} />
                </span>
                <span className="flex min-w-0 flex-1 flex-col space-y-1 sm:space-y-2">
                  <span className="text-text flex items-center justify-between gap-3 text-lg font-semibold">
                    {t(`links.${key}.title`)}
                    <i className="pi pi-chevron-right text-text/50 group-hover:text-activesecondary text-sm transition-all duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="text-text/75 text-sm break-words">{t(`links.${key}.description`)}</span>
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
};
