'use client';

import type { Locale } from '@/i18n/config';
import { Button } from '@components/Button';
import { Tag, TagPlainType } from '@components/Tag';
import type { Project } from '@models/project.model';
import { ProjectStatus } from '@models/project.model';
import { getProjectBackgroundPath } from '@utils/project';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const currentLocale = useLocale() as Locale;
  const t = useTranslations('projects');

  return (
    <div
      className="bg-secondary group border-primary flex min-h-[25rem] w-full max-w-full flex-col overflow-hidden rounded-xl border transition-colors duration-300 hover:border-(color:--project-color)"
      style={{ '--project-color': project.mainColor } as React.CSSProperties}
    >
      <Link href={`/project/${project.slug}`} className="relative block h-28 w-full overflow-hidden">
        <img
          src={getProjectBackgroundPath(project.slug)}
          alt={project.logo ? '' : project.title}
          className={`h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110 ${project.logo ? 'scale-105 blur-[2px]' : ''}`}
        />
        {project.logo && (
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <img
              src={project.logo}
              alt={project.title}
              className="h-14 w-auto max-w-full object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-125"
            />
          </div>
        )}
      </Link>
      <div className="relative flex w-full max-w-full flex-1 flex-col justify-between p-4">
        <div className="absolute -top-3 left-2 transition-all duration-300 group-hover:-top-2">
          <Tag plain={TagPlainType.LIGHT}>{t(`type.${project.type.toLowerCase()}`)}</Tag>
        </div>
        <div className="mt-5 flex w-full max-w-full flex-col space-y-5">
          <p className="text-text w-full max-w-full text-xl font-semibold break-words transition-colors duration-300 group-hover:text-(color:--project-color)">
            {project.title}
          </p>
          <p className="text-text line-clamp-2 w-full max-w-full break-words">{currentLocale === 'fr' ? project.descriptionFr : project.descriptionEn}</p>
          <div className="flex w-full max-w-full flex-row flex-wrap gap-x-3 gap-y-2">
            {project.labels.map((label, index) => {
              if (index === 0) {
                return project.status === ProjectStatus.RELEASED ? (
                  <Tag plain={TagPlainType.SUCCESS} key={label} className="text-xs font-bold">
                    {t(`status.${project.status.toLowerCase()}`)}
                  </Tag>
                ) : (
                  <Tag plain={TagPlainType.DARK} key={label} className="bg-text/10 text-xs font-semibold">
                    {t(`status.${project.status.toLowerCase()}`)}
                  </Tag>
                );
              }

              return (
                <Tag plain={TagPlainType.DARK} key={label} className="text-xs">
                  {label}
                </Tag>
              );
            })}
          </div>
        </div>
        <Button href={`/project/${project.slug}`} primary icon="arrow-up-right" className="mt-4 w-full">
          {t('view_project')}
        </Button>
      </div>
    </div>
  );
};
