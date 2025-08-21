import { PROJECTS } from '@constants/projects.data';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

type ProjectNavigationProps = {
  currentProjectIndex: number;
};

export const ProjectNavigation = ({ currentProjectIndex }: ProjectNavigationProps) => {
  const t = useTranslations('projects.nav');

  if (currentProjectIndex < 0) {
    return null;
  }

  const previousProject =
    currentProjectIndex > 0 ? PROJECTS.find((_, index) => index === currentProjectIndex - 1) || PROJECTS[PROJECTS.length - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentProjectIndex < PROJECTS.length - 1 ? PROJECTS.find((_, index) => index === currentProjectIndex + 1) || PROJECTS[0] : PROJECTS[0];

  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row">
      <Link
        className="bg-secondary/50 group hover:bg-secondary border-text/10 flex items-center justify-center gap-3 rounded-md border p-2 text-sm font-semibold transition-all duration-300 hover:scale-105 sm:w-1/2"
        href={`/project/${previousProject.slug}`}
      >
        <div className="border-text/10 relative h-16 max-w-32 overflow-hidden rounded-md border">
          <img src={`/assets/projects/${previousProject.slug}.png`} alt={previousProject.slug} className="h-full w-full object-cover" />
        </div>
        <div className="min-w-0 flex-1 text-left">
          <div className="group-hover:text-activesecondary mb-1 text-xs transition-all">{t('previous')}</div>
          <div className="truncate text-sm font-medium text-ellipsis">{previousProject.title}</div>
        </div>
        <i className="pi pi-arrow-left text-text/25 h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
      </Link>
      <Link
        className="bg-secondary/50 group hover:bg-secondary border-text/10 flex items-center justify-center gap-3 rounded-md border p-2 text-sm font-semibold transition-all duration-300 hover:scale-105 sm:w-1/2"
        href={`/project/${nextProject.slug}`}
      >
        <i className="pi pi-arrow-right text-text/25 h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5" />

        <div className="min-w-0 flex-1 text-right">
          <div className="group-hover:text-activesecondary mb-1 text-xs transition-all">{t('next')}</div>
          <div className="truncate text-sm font-medium text-ellipsis">{nextProject.title}</div>
        </div>
        <div className="border-text/10 relative h-16 max-w-32 overflow-hidden rounded-md border">
          <img src={`/assets/projects/${nextProject.slug}.png`} alt={nextProject.slug} className="h-full w-full object-cover" />
        </div>
      </Link>
    </div>
  );
};
