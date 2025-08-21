import { PageBanner } from '@components/PageBanner';
import { PROJECTS } from '@constants/projects.data';
import type { Project } from '@models/project.model';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Blog } from './Blog';
import { Summary } from './Summary';

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: [project.slug],
  }));
}

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
    openGraph: {
      title: project.title,
      description: project.descriptionEn,
      url: `https://zide.fr/projects/${projectSlug}`,
      siteName: 'Zide',
      images: [
        {
          url: `https://zide.fr/assets/projects/${project.slug}.png`,
          alt: project.title,
        },
      ],
      locale: 'en_US',
      alternateLocale: ['fr_FR'],
      type: 'website',
    },
  };
}

type PageProps = {
  params: Promise<{ slug: string[] }>;
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
      <PageBanner
        title={project.title}
        descriptionEn={project.descriptionEn}
        descriptionFr={project.descriptionFr}
        imagePath={`/assets/projects/${project.slug}.png`}
      />
      <div className="mt-3 flex flex-col space-y-10 px-3 md:flex-row md:justify-between md:space-y-0 md:px-10">
        <Blog project={project} page={projectPage} />
        <Summary project={project} />
      </div>
    </div>
  );
}
