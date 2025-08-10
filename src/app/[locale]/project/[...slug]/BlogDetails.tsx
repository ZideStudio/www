'use client';

import type { Locale } from '@/i18n/config';
import type { Project } from '@models/project.model';
import dayjs from 'dayjs';
import { useLocale, useTranslations } from 'next-intl';

type BlogDetailsProps = {
  project: Project;
};

export const BlogDetails = ({ project }: BlogDetailsProps) => {
  const t = useTranslations('projects');
  const currentLocale = useLocale() as Locale;

  let dateFormat = 'MMMM DD, YYYY';
  if (currentLocale === 'fr') {
    dateFormat = 'DD MMMM YYYY';
  }

  return (
    <div className="text-text/50 flex flex-col text-sm">
      <p>
        {t('details.article_published')} {dayjs(project.releaseDate.articlePublished).format(dateFormat)}
      </p>
      {project.releaseDate.articleUpdated && (
        <p>
          {t('details.article_updated')} {dayjs(project.releaseDate.articleUpdated).format(dateFormat)}
        </p>
      )}
    </div>
  );
};
