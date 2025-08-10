import { PageBanner } from '@components/PageBanner';
import { PROJECTS } from '@constants/projects.data';
import { Project } from '@models/project.model';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Blog } from './Blog';
import { Summary } from './Summary';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const projectSlug = slug[0];

  const project: Project | undefined = PROJECTS.find((project) => project.slug === projectSlug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: project.title,
    description: project.descriptionEn,
  };
}

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const t = await getTranslations();

  const projectSlug = slug[0];
  const projectPage = slug[1] ?? undefined;

  const project: Project | undefined = PROJECTS.find((project) => project.slug === projectSlug);
  if (!project) {
    notFound();
  }

  return (
    <div className="text-text">
      <PageBanner title={project.title} descriptionEn={project.descriptionEn} descriptionFr={project.descriptionFr} imageUrl={project.imageLink} />
      <div className="mt-3 flex flex-col space-y-10 px-3 md:flex-row md:justify-between md:space-y-0 md:px-10">
        <div className="flex w-7/8 flex-col">
          <Link href="/projects" className="text-text/50 hover:text-text/75 flex w-max flex-row items-center space-x-3">
            <i className="pi pi-arrow-left" />
            <p>{t('projects.back')}</p>
          </Link>
          <Blog project={project} page={projectPage} />
        </div>
        <Summary project={project} />
      </div>
    </div>
  );
}
