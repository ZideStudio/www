'use client';

import { Locale } from '@/i18n/config';
import { Project } from '@models/project.model';
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
    <div className="flex flex-col text-text/50 text-sm">
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
