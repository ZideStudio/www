'use client';

import { Button } from '@components/Button';
import { Tag, TagPlainType } from '@components/Tag';
import { Project, ProjectStatus } from '@models/project.model';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const t = useTranslations('projects');

  return (
    <div className="w-full h-[25rem] bg-secondary rounded-xl overflow-hidden flex flex-col group border border-primary hover:border-text">
      <Link href={`/project/${project.slug}`}>
        <img
          src={project.imageLink}
          alt="Zide Logo"
          className="w-full h-28 object-cover object-center group-hover:scale-110 transition-transform duration-300"
        />
      </Link>
      <div className="relative p-4 h-full flex flex-col justify-between">
        <div className="absolute -top-3 left-2 group-hover:-top-2 transition-all duration-300">
          <Tag plain={TagPlainType.LIGHT}>{t(`type.${project.type.toLowerCase()}`)}</Tag>
        </div>
        <div className="flex flex-col space-y-5 mt-5">
          <p className="text-text text-xl font-semibold">{project.title}</p>
          <p className="text-text line-clamp-2">{project.description}</p>
          <div className="flex flex-row flex-wrap space-x-3 space-y-2">
            {project.labels.map((label, index) => {
              if (index === 0) {
                if (project.status === ProjectStatus.RELEASED) {
                  return (
                    <Tag plain={TagPlainType.SUCCESS} key={label} className="text-xs font-bold">
                      {t(`status.${project.status.toLowerCase()}`)}
                    </Tag>
                  );
                } else {
                  return (
                    <Tag plain={TagPlainType.DARK} key={label} className="text-xs font-semibold bg-text/10">
                      {t(`status.${project.status.toLowerCase()}`)}
                    </Tag>
                  );
                }
              }

              return (
                <Tag plain={TagPlainType.DARK} key={label} className="text-xs">
                  {label}
                </Tag>
              );
            })}
          </div>
        </div>
        <Button primary icon="arrow-up-right" href={`/project/${project.slug}`}>
          {t('view_project')}
        </Button>
      </div>
    </div>
  );
};
