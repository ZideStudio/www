'use client';

import type { Locale } from '@/i18n/config';
import { Link } from '@/i18n/routing';
import { Tag, TagPlainType } from '@components/Tag';
import { ROLES } from '@constants/roles.data';
import type { MemberFeedback } from '@models/member.model';
import type { Project } from '@models/project.model';
import { useLocale, useTranslations } from 'next-intl';
import { useId } from 'react';

const MAX_ROLES = 3;
const MAX_PROJECTS = 3;

export type TeamCardProject = Pick<Project, 'slug' | 'title' | 'mainColor'>;

type TeamCardProps = {
  feedback: MemberFeedback;
  projects: TeamCardProject[];
};

const ProjectTag = ({ project }: { project: TeamCardProject }) => (
  <Link
    href={`/project/${project.slug}`}
    className="text-text w-max max-w-full cursor-pointer rounded-xl bg-(color:--project-color) px-2 py-0.5 text-xs font-semibold transition-colors hover:bg-white hover:text-(color:--project-color)"
    style={{ '--project-color': project.mainColor } as React.CSSProperties}
  >
    {project.title}
  </Link>
);

export const TeamCard = ({ feedback, projects }: TeamCardProps) => {
  const currentLocale = useLocale() as Locale;
  const t = useTranslations('team');
  const tooltipId = useId();

  const { member } = feedback;
  const message = currentLocale === 'fr' ? feedback.messageFr : feedback.messageEn;
  const roles = member.roles.slice(0, MAX_ROLES).map((role) => (currentLocale === 'fr' ? ROLES[role].labelFr[member.gender] : ROLES[role].labelEn));
  const visibleProjects = projects.slice(0, MAX_PROJECTS);
  const hiddenProjects = projects.slice(MAX_PROJECTS);

  return (
    <div className="bg-secondary group border-primary hover:border-text flex min-h-[25rem] w-full max-w-full flex-col rounded-xl border">
      <a
        href={member.socialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative block min-h-56 w-full flex-1 overflow-hidden rounded-t-xl ${member.socialUrl ? 'cursor-pointer' : ''}`}
      >
        <img
          src={member.pictureUrl}
          alt={member.name}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 flex max-w-[calc(100%-1.5rem)] flex-col items-end gap-2">
          {roles.map((role) => (
            <Tag key={role} plain={TagPlainType.DARK} className="max-w-full font-semibold backdrop-blur-md">
              {role}
            </Tag>
          ))}
        </div>
      </a>
      <div className="relative w-full max-w-full space-y-4 px-4 pt-10 pb-4">
        <div className="absolute -top-3 left-2 max-w-[calc(100%-1rem)] transition-all duration-300 group-hover:-top-2">
          <Tag plain={TagPlainType.LIGHT} className="max-w-full !text-xl font-bold break-words">
            {member.name}
          </Tag>
        </div>
        <p className="text-text w-full max-w-full break-words">{message}</p>

        {projects.length > 0 && (
          <div className="flex w-full max-w-full flex-row flex-wrap items-center gap-x-2 gap-y-2">
            <span className="text-text/50 text-sm">{t('worked_on')}</span>
            {visibleProjects.map((project) => (
              <ProjectTag key={project.slug} project={project} />
            ))}
            {hiddenProjects.length > 0 && (
              <div className="group/more relative">
                <button type="button" aria-describedby={tooltipId} className="cursor-default">
                  <Tag plain={TagPlainType.LIGHT} className="text-xs font-bold">
                    {`+${hiddenProjects.length}`}
                  </Tag>
                </button>
                <div
                  id={tooltipId}
                  role="tooltip"
                  className="invisible absolute bottom-full left-0 z-20 pb-2 opacity-0 transition-opacity duration-200 group-focus-within/more:visible group-focus-within/more:opacity-100 group-hover/more:visible group-hover/more:opacity-100"
                >
                  <div className="bg-primary border-text/25 flex flex-col items-start gap-2 rounded-xl border p-3 shadow-lg">
                    {hiddenProjects.map((project) => (
                      <ProjectTag key={project.slug} project={project} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
