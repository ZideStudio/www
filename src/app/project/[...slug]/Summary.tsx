import { Locale } from '@/i18n/config';
import { Button } from '@components/Button';
import { Project } from '@models/project.model';
import dayjs from 'dayjs';
import { useLocale, useTranslations } from 'next-intl';

type SummaryProps = {
  project: Project;
};

export const Summary = ({ project }: SummaryProps) => {
  const currentLocale = useLocale() as Locale;
  const t = useTranslations('projects');

  const features: string[] = [];
  if (currentLocale === 'fr') {
    features.push(...project.featuresFr);
  } else {
    features.push(...project.featuresEn);
  }

  let dateFormat = 'MMM DD, YYYY';
  if (currentLocale === 'fr') {
    dateFormat = 'DD MMMM YYYY';
  }

  let releaseDate: string | undefined;
  if (project.releaseDate.date) {
    releaseDate = dayjs(project.releaseDate.date).format(dateFormat);
  }

  let plannedDate: string | undefined;
  if (project.releaseDate.planned) {
    plannedDate = dayjs(project.releaseDate.planned).format(dateFormat);
  }

  return (
    <div className="text-text h-full rounded-xl border border-text/10 p-6 space-y-6 border-border sticky top-24 shadow-sm bg-background">
      <table className="w-full text-left border border-text/10 rounded-xl overflow-hidden">
        <tbody className="divide-y divide-text/10">
          <tr>
            <td className="px-4 py-3 font-medium">{t('summary.title')}</td>
            <td className="px-4 py-3 text-muted-foreground">{project.title}</td>
          </tr>
          {releaseDate && (
            <tr>
              <td className="px-4 py-3 font-medium">{t('summary.released')}</td>
              <td className="px-4 py-3 text-muted-foreground">{releaseDate}</td>
            </tr>
          )}
          {plannedDate && (
            <tr>
              <td className="px-4 py-3 font-medium">{t('summary.planned')}</td>
              <td className="px-4 py-3 text-muted-foreground">
                {t('summary.planned_for')} {plannedDate}
              </td>
            </tr>
          )}
          <tr>
            <td className="px-4 py-3 font-medium">{t('summary.target')}</td>
            <td className="px-4 py-3 text-muted-foreground">{t(`target.${project.target.toLowerCase()}`)}</td>
          </tr>
        </tbody>
      </table>
      {project.link?.customInstallButton && (
        <div className="flex justify-center w-full" dangerouslySetInnerHTML={{ __html: project.link.customInstallButton }} />
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
        <Button href={project.link?.github} target="_blank" icon="github" className="w-full" primary>
          {t('open-github')}
        </Button>
      )}

      <div>
        <h3 className="text-lg font-semibold mb-4">{t('key-features')}</h3>
        <ul className="list-disc list-inside">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
