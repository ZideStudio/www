'use client';

import { Button } from '@components/Button';
import { Carousel } from '@components/Carousel';
import { ProjectCard } from '@components/ProjectCard';
import { Tag } from '@components/Tag';
import { Title } from '@components/Title';
import { PROJECTS } from '@constants/projects.data';
import { useTranslations } from 'next-intl';

export const HomeProjects = () => {
  const t = useTranslations('home.projects');

  return (
    <div className="flex flex-col items-center justify-around px-10 lg:px-20">
      <div className="flex flex-col items-center justify-center space-y-3">
        <Tag>{t('tag')}</Tag>
        <Title id="about">{t('title')}</Title>
        <p className="text-text">{t('description')}</p>
      </div>

      <div className="flex w-full items-center py-5">
        <Carousel items={PROJECTS} renderItem={(project) => <ProjectCard project={project} />} speed={3000} />
      </div>
      <Button primary icon="arrow-right" href="/projects">
        {t('view_all_projects')}
      </Button>
    </div>
  );
};
