'use client';

import type { Locale } from '@/i18n/config';
import { AvatarGroup } from '@components/AvatarGroup';
import type { Project } from '@models/project.model';
import { getFormattedDate } from '@utils/date';
import { useLocale, useTranslations } from 'next-intl';

type BlogDetailsProps = {
  project: Project;
};

export const BlogDetails = ({ project }: BlogDetailsProps) => {
  const t = useTranslations('projects');
  const locale = useLocale() as Locale;

  return (
    <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
      <div className="flex flex-col space-y-2">
        <p className="text-text/50 text-sm">{project.authors.length > 1 ? t('editors') : t('editor')}</p>
        <AvatarGroup members={project.authors} displayLimit={3} />
      </div>
      <div className="flex flex-col items-end justify-center text-sm">
        <p className="text-text/50">
          {t('details.article_published')} {getFormattedDate(project.releaseDate.articlePublished, 'LL', locale)}
        </p>
        {project.releaseDate.articleUpdated && (
          <p className="text-text/25">
            <i className="pi pi-pencil mr-2 text-xs" />
            {t('details.article_updated')} {getFormattedDate(project.releaseDate.articleUpdated, 'LL', locale)}
          </p>
        )}
      </div>
    </div>
  );
};
