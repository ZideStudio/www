'use client';

import type { Locale } from '@/i18n/config';
import { Button } from '@components/Button';
import { Tag, TagPlainType } from '@components/Tag';
import type { Project } from '@models/project.model';
import { ProjectStatus } from '@models/project.model';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const currentLocale = useLocale() as Locale;
  const t = useTranslations('projects');

  return (
    <div className="bg-secondary group border-primary hover:border-text flex h-[25rem] w-full flex-col overflow-hidden rounded-xl border">
      <Link href={`/project/${project.slug}`}>
        <img
          src={project.imageLink}
          alt="Zide Logo"
          className="h-28 w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
      </Link>
      <div className="relative flex h-full flex-col justify-between p-4">
        <div className="absolute -top-3 left-2 transition-all duration-300 group-hover:-top-2">
          <Tag plain={TagPlainType.LIGHT}>{t(`type.${project.type.toLowerCase()}`)}</Tag>
        </div>
        <div className="mt-5 flex flex-col space-y-5">
          <p className="text-text text-xl font-semibold">{project.title}</p>
          <p className="text-text line-clamp-2">{currentLocale === 'fr' ? project.descriptionFr : project.descriptionEn}</p>
          <div className="flex flex-row flex-wrap gap-x-3 gap-y-2">
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
        <Button href={`/project/${project.slug}`} primary icon="arrow-up-right">
          {t('view_project')}
        </Button>
      </div>
    </div>
  );
};
