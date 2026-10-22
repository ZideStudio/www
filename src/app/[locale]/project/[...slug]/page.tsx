import type { Locale } from '@/i18n/config';
import { PageHeader } from '@components/PageHeader';
import { PROJECTS } from '@constants/projects.data';
import { tailwindColors } from '@constants/tailwindColors';
import type { Project } from '@models/project.model';
import { ProjectStatus } from '@models/project.model';
import { getReadableColorOnDark } from '@utils/color';
import { getProjectBackgroundPath } from '@utils/project';
import { buildPageMetadata, SITE_URL } from '@utils/seo';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Blog } from './Blog';
import { DeprecatedModal } from './DeprecatedModal';
import { Summary } from './Summary';

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: [project.slug],
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const projectSlug = slug[0];

  const project: Project | undefined = PROJECTS.find((project) => project.slug === projectSlug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return buildPageMetadata({
    locale: locale as Locale,
    path: `/project/${project.slug}`,
    title: project.title,
    description: locale === 'fr' ? project.descriptionFr : project.descriptionEn,
    image: `${SITE_URL}${getProjectBackgroundPath(project.slug)}`,
  });
}

type PageProps = {
  params: Promise<{ locale: string; slug: string[] }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const projectSlug = slug[0];
  const projectPage = slug[1] ?? undefined;

  const project: Project | undefined = PROJECTS.find((project) => project.slug === projectSlug);
  if (!project) {
    notFound();
  }

  return (
    <div className="text-text">
      <PageHeader
        title={project.title}
        descriptionEn={project.descriptionEn}
        descriptionFr={project.descriptionFr}
        imagePath={getProjectBackgroundPath(project.slug)}
        logoPath={project.logo}
        color={getReadableColorOnDark(project.mainColor, tailwindColors.primary, tailwindColors.text)}
        dimBackground
      />
      <div className="mt-3 flex flex-col space-y-10 px-3 md:flex-row md:justify-between md:space-y-0 md:px-10">
        <Blog project={project} page={projectPage} />
        <div className="relative flex flex-col space-y-3 md:w-xl md:max-w-xl">
          <Summary project={project} />
        </div>
      </div>
      {project.status === ProjectStatus.DEPRECATED && <DeprecatedModal project={project} />}
    </div>
  );
}
