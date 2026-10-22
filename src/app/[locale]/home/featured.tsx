'use client';

import type { Locale } from '@/i18n/config';
import { Button } from '@components/Button';
import { Reveal } from '@components/Reveal';
import { Tag, TagPlainType } from '@components/Tag';
import { Title } from '@components/Title';
import { FEATURED_PROJECT_SLUG } from '@constants/featuredProject';
import { PROJECTS } from '@constants/projects.data';
import { usePrefersReducedMotion } from '@hooks/usePrefersReducedMotion';
import { getFormattedDate } from '@utils/date';
import { getProjectBackgroundPath } from '@utils/project';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef } from 'react';

export const HomeFeaturedProject = () => {
  const t = useTranslations('home.featured');
  const tProjects = useTranslations('projects');
  const locale = useLocale() as Locale;
  const reduceMotion = usePrefersReducedMotion();

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const tilt = useTransform(scrollYProgress, [0, 0.5, 1], [-7, -3, 0]);
  const logoShift = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const project = PROJECTS.find(({ slug }) => slug === FEATURED_PROJECT_SLUG);
  if (!project) return null;

  const features = locale === 'fr' ? project.featuresFr : project.featuresEn;
  const plannedDate = project.releaseDate.planned ? getFormattedDate(project.releaseDate.planned, 'MMMM YYYY', locale) : undefined;

  return (
    <section ref={sectionRef} className="relative overflow-x-clip px-5 md:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="left" className="relative mx-auto w-full max-w-xl pb-10 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-4 -z-10 rounded-full bg-(color:--project-color) opacity-30 blur-3xl"
            style={{ '--project-color': project.mainColor } as React.CSSProperties}
          />

          <motion.div
            className="border-text/10 bg-secondary overflow-hidden rounded-2xl border shadow-2xl shadow-black/60"
            style={{ rotate: reduceMotion ? -3 : tilt }}
            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <Image
              src={getProjectBackgroundPath(project.slug)}
              alt={t('image_alt')}
              width={1900}
              height={1428}
              sizes="(max-width: 1024px) 90vw, 560px"
              className="h-auto w-full"
            />
          </motion.div>

          {project.logo && (
            <motion.div
              className="border-text/10 bg-primary/90 absolute right-0 -bottom-2 w-44 rounded-2xl border p-3 shadow-xl shadow-black/60 backdrop-blur-md sm:-right-4 sm:w-56 sm:p-4 lg:-right-8"
              style={{ y: reduceMotion ? 0 : logoShift, rotate: 4 }}
            >
              <Image src={project.logo} alt={project.title} width={1200} height={240} sizes="224px" className="h-auto w-full" />
            </motion.div>
          )}
        </Reveal>

        <div className="flex flex-col space-y-6">
          <Reveal direction="right">
            <div className="flex flex-row flex-wrap items-center gap-3">
              <Tag>{t('tag')}</Tag>
              <Tag plain={TagPlainType.DARK} className="bg-text/10 font-semibold">
                {tProjects(`status.${project.status.toLowerCase()}`)}
              </Tag>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <Title as="h2">{project.title}</Title>
          </Reveal>

          <Reveal direction="right" delay={0.2} className="flex flex-col space-y-4">
            <p className="text-text text-lg">{t('description')}</p>
            <p className="text-text/75">{t('love')}</p>
          </Reveal>

          <Reveal direction="right" delay={0.3}>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="text-text flex items-start gap-2">
                  <i className="pi pi-check-circle text-activesecondary mt-1 shrink-0" />
                  <span className="break-words">{feature}</span>
                </li>
              ))}
            </ul>
            {plannedDate && (
              <p className="text-text/60 mt-4 text-sm font-semibold">
                <i className="pi pi-calendar mr-2" />
                {tProjects('summary.planned_for_month')} {plannedDate}
              </p>
            )}
          </Reveal>

          <Reveal direction="up" delay={0.4} className="flex flex-row flex-wrap gap-4 pt-2">
            <Button primary icon="arrow-right" href={`/project/${project.slug}`}>
              {t('discover')}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
