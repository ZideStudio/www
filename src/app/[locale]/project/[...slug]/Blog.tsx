'use client';

import type { Locale } from '@/i18n/config';
import { createSlug } from '@/utils/slug';
import { CodeBlock } from '@components/CodeBlock';
import { PROJECTS } from '@constants/projects.data';
import type { PageContent, Project } from '@models/project.model';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { BlogDetails } from './BlogDetails';
import { ProjectNavigation } from './ProjectNavigation';

type Page = {
  id?: string;
  title?: string;
  content: Content[];
};

type Content = Pick<PageContent, 'type' | 'codeLanguage'> & {
  content: string;
  alt?: string;
};

type BlogProps = {
  project: Project;
  page?: string;
};

export const Blog = ({ project, page }: BlogProps) => {
  const t = useTranslations();
  const currentLocale = useLocale() as Locale;

  const copyTitleUrl = async (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}#${event.currentTarget.id}`);
      toast(t('toast.copy_url'));
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  const pages: Page[] = project.pages.map((page) => {
    let title: string | undefined;
    if (currentLocale === 'fr' && page.titleFr) {
      title = page.titleFr;
    } else {
      title = page.titleEn;
    }

    return {
      id: page.titleEn ? createSlug(page.titleEn) : undefined,
      title,
      content: page.content.map((pageContent) => {
        let content: string;
        if (currentLocale === 'fr' && pageContent.contentFr) {
          content = pageContent.contentFr;
        } else {
          content = pageContent.contentEn;
        }

        let alt: string | undefined;
        if (currentLocale === 'fr' && pageContent.altFr) {
          alt = pageContent.altFr;
        } else {
          alt = pageContent.altEn;
        }

        return {
          type: pageContent.type,
          content,
          alt,
          codeLanguage: pageContent.codeLanguage,
        };
      }),
    };
  });

  if (pages.length < 1) {
    return (
      <div className="article mt-5 flex justify-center px-3 md:px-10 xl:px-40">
        <h1 className="text-3xl text-red-400">No content found</h1>
      </div>
    );
  }

  const currentPage = page ? (pages.find(({ id }) => id === page) ?? pages[0]) : pages[0];

  return (
    <div className={`flex flex-col space-y-14 px-3 md:w-8/10 md:px-10 xl:px-32 ${project.pages.length < 2 ? 'mt-15' : ''}`}>
      <Link href="/projects" className={`text-text/50 hover:text-text/75 ${project.pages.length > 1 ? 'mb-7' : ''} flex w-max flex-row items-center space-x-3`}>
        <i className="pi pi-arrow-left" />
        <p>{t('projects.back')}</p>
      </Link>

      {project.pages.length > 1 && (
        <>
          <nav className="border-text/15 mx-auto mb-7 flex w-full flex-col justify-center space-x-4 rounded-3xl border p-2 text-xl font-semibold lg:w-max lg:flex-row lg:rounded-full lg:p-1.5">
            {pages.map((page) => (
              <a
                key={page.title}
                href={`/project/${project.slug}/${page.id}`}
                className={`text-text/75 hover:text-text w-full rounded-3xl px-5 py-1 text-center lg:w-auto lg:rounded-full ${currentPage.title === page.title ? 'bg-text/10' : ''}`}
              >
                {page.title}
              </a>
            ))}
          </nav>
          <hr className="border-text/10 w-full" />
        </>
      )}

      {currentPage.content.map((content, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="article">
          {content.type === 'title' && (
            <div
              id={createSlug(content.content)}
              className="group mt-5 flex scroll-mt-40 flex-row items-center space-x-3"
              onClick={copyTitleUrl}
              onKeyUp={copyTitleUrl}
            >
              <h2 className="text-3xl">{content.content}</h2>
              <i className="pi pi-link text-text/90 hover:text-text/75 group-hover:visiblext-2xl invisible text-2xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:visible group-hover:opacity-100" />
            </div>
          )}
          {/* eslint-disable-next-line react/no-danger */}
          {content.type === 'paragraph' && <div dangerouslySetInnerHTML={{ __html: content.content }} />}
          {content.type === 'image' && (
            <div className="flex flex-col items-center space-y-3">
              <img src={content.content} alt={content.alt} className="rounded-lg" />
              {content.alt && <p className="text-text/50 text-sm">{content.alt}</p>}
            </div>
          )}
          {content.type === 'code' && (
            <div className="flex flex-col items-center space-y-3">
              <CodeBlock content={content.content} />
              {content.alt && <p className="text-text/50 text-sm">{content.alt}</p>}
            </div>
          )}
        </div>
      ))}

      <div className="flex flex-col space-y-5">
        <hr className="border-text/10 w-full" />
        <ProjectNavigation currentProjectIndex={PROJECTS.findIndex((p) => p.slug === project.slug)} />
        <BlogDetails project={project} />
      </div>
    </div>
  );
};
