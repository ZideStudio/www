'use client';

import type { Locale } from '@/i18n/config';
import { createSlug } from '@/utils/slug';
import { CodeBlock } from '@components/CodeBlock';
import type { PageContent, Project } from '@models/project.model';
import { useLocale, useTranslations } from 'next-intl';
import toast from 'react-hot-toast';
import { BlogDetails } from './BlogDetails';

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
  const t = useTranslations('toast');
  const currentLocale = useLocale() as Locale;

  const copyTitleUrl = async (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}#${event.currentTarget.id}`);
      toast(t('copy_url'));
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
    <div className={`flex flex-col space-y-14 px-3 md:px-10 xl:px-40 ${project.pages.length < 2 ? 'mt-15' : ''}`}>
      {project.pages.length > 1 && (
        <nav className="my-14 flex justify-center space-x-8 pb-5 text-xl font-semibold">
          {pages.map((page) => (
            <a
              key={page.title}
              href={`/project/${project.slug}/${page.id}`}
              className={`text-activeprimary hover:text-activesecondary ${currentPage.title === page.title ? 'underline' : ''}`}
            >
              {page.title}
            </a>
          ))}
        </nav>
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

      <BlogDetails project={project} />
    </div>
  );
};
