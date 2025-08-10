import { PageBanner } from '@components/PageBanner';
import { PROJECTS } from '@constants/projects.data';
import { Project } from '@models/project.model';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Blog } from './Blog';
import { Summary } from './Summary';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Digital simplicity, greater efficiency. We develop open-source applications to help you improve your efficiency',
};

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
      <div className="flex flex-col mt-3 px-3 space-y-10 md:justify-between md:flex-row md:px-10 md:space-y-0">
        <div className="flex flex-col w-7/8">
          <Link href="/projects" className="flex flex-row space-x-3 items-center text-text/50 hover:text-text/75 w-max">
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
