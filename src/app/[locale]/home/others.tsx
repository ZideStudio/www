'use client';

import { Button } from '@components/Button';
import { ProjectCard } from '@components/ProjectCard';
import { Reveal } from '@components/Reveal';
import { Tag } from '@components/Tag';
import { Title } from '@components/Title';
import { FEATURED_PROJECT_SLUG } from '@constants/featuredProject';
import { PROJECTS } from '@constants/projects.data';
import type { Project } from '@models/project.model';
import { ProjectStatus } from '@models/project.model';
import { shuffle } from '@utils/array';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

const OTHER_PROJECTS_COUNT = 3;

export const HomeOtherProjects = () => {
  const t = useTranslations('home');
  // Picked after mount: a random selection during render would differ between server and client
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const candidates = PROJECTS.filter(({ slug, status }) => slug !== FEATURED_PROJECT_SLUG && status !== ProjectStatus.DEPRECATED);
    setProjects(shuffle(candidates).slice(0, OTHER_PROJECTS_COUNT));
  }, []);

  return (
    <section className="flex flex-col items-center px-5 md:px-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center">
        <Reveal>
          <Tag>{t('others.tag')}</Tag>
        </Reveal>
        <Reveal delay={0.1}>
          <Title as="h2">{t('others.title')}</Title>
        </Reveal>
        <Reveal delay={0.2} className="flex flex-col space-y-2">
          <p className="text-text text-lg">{t('others.description')}</p>
          <p className="text-text/75">{t('others.filter_hint')}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.length > 0
          ? projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.15} className="flex">
                <ProjectCard project={project} />
              </Reveal>
            ))
          : Array.from({ length: OTHER_PROJECTS_COUNT }, (_, index) => (
              <div key={index} aria-hidden="true" className="bg-secondary min-h-[25rem] w-full animate-pulse rounded-xl" />
            ))}
      </div>

      <Reveal delay={0.2} className="mt-12">
        <Button primary icon="arrow-right" href="/projects">
          {t('projects.view_all_projects')}
        </Button>
      </Reveal>
    </section>
  );
};
