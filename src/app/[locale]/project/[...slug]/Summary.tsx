'use client';

import type { Locale } from '@/i18n/config';
import { AvatarGroup } from '@components/AvatarGroup';
import { Button } from '@components/Button';
import type { Project } from '@models/project.model';
import { getFormattedDate } from '@utils/date';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

type SummaryProps = {
  project: Project;
};

export const Summary = ({ project }: SummaryProps) => {
  const locale = useLocale() as Locale;
  const t = useTranslations('projects');

  const features: string[] = [];
  if (locale === 'fr') {
    features.push(...project.featuresFr);
  } else {
    features.push(...project.featuresEn);
  }

  let releaseDate: string | undefined;
  if (project.releaseDate.date) {
    releaseDate = getFormattedDate(project.releaseDate.date, 'LL', locale);
  }

  let plannedDate: string | undefined;
  if (project.releaseDate.planned) {
    plannedDate = getFormattedDate(project.releaseDate.planned, 'LL', locale);
  }

  return (
    <div className="text-text border-text/10 border-border bg-background sticky top-24 h-full space-y-6 rounded-xl border p-6 shadow-sm">
      <table className="border-text/10 w-full overflow-hidden rounded-xl border text-left">
        <tbody className="divide-text/10 divide-y">
          <tr>
            <td className="px-4 py-3 font-medium">{t('summary.title')}</td>
            <td className="text-muted-foreground px-4 py-3">{project.title}</td>
          </tr>
          {releaseDate && (
            <tr>
              <td className="px-4 py-3 font-medium">{t('summary.released')}</td>
              <td className="text-muted-foreground px-4 py-3">{releaseDate}</td>
            </tr>
          )}
          {project.releaseDate.planned && (
            <tr>
              <td className="px-4 py-3 font-medium">{t('summary.planned')}</td>
              <td className="text-muted-foreground px-4 py-3">
                {t('summary.planned_for')} {plannedDate}
              </td>
            </tr>
          )}
          <tr>
            <td className="px-4 py-3 font-medium">{t('summary.target')}</td>
            <td className="text-muted-foreground px-4 py-3">{t(`target.${project.target.toLowerCase()}`)}</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium">{t('contributors')}</td>
            <td className="text-muted-foreground px-4 py-3">
              <AvatarGroup members={project.contributors} tooltipPosition="top" size="small" />
            </td>
          </tr>
        </tbody>
      </table>
      {project.link?.customInstallButton && (
        // eslint-disable-next-line react/no-danger
        <div className="flex w-full justify-center" dangerouslySetInnerHTML={{ __html: project.link.customInstallButton }} />
      )}
      {project.link?.install && (
        <Button href={project.link?.install} target="_blank" icon="download" className="w-full" primary>
          {t('install')}
        </Button>
      )}
      {project.link?.website && (
        <Button href={project.link?.website} target="_blank" icon="arrow-up-right" className="w-full" primary>
          {t('open-website')}
        </Button>
      )}
      {project.link?.github && (
        <Link href={project.link?.github} target="_blank" className="flex flex-row items-center justify-center space-x-3">
          <i className="pi pi-github text-lg" />
          <div className="flex flex-row items-center justify-center space-x-2">
            <p>{t('view-source')}</p>
            <i className="pi pi-arrow-up-right text-xs" />
          </div>
        </Link>
      )}

      <div>
        <h3 className="mb-4 text-lg font-semibold">{t('key-features')}</h3>
        <ul className="list-inside list-disc">
          {features.map((feature, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
