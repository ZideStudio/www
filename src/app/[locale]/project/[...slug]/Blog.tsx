import type { Locale } from '@/i18n/config';
import { CodeBlock } from '@components/CodeBlock';
import type { PageContent, Project } from '@models/project.model';
import { useLocale } from 'next-intl';
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
  const currentLocale = useLocale() as Locale;

  const pages: Page[] = project.pages.map((page) => {
    let title: string | undefined;
    if (currentLocale === 'fr' && page.titleFr) {
      title = page.titleFr;
    } else {
      title = page.titleEn;
    }

    return {
      id: page.titleEn?.split(' ').join('-').toLowerCase(),
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
        <div key={index} className="article">
          {content.type === 'title' && <h2 className="mt-5 text-3xl">{content.content}</h2>}
          {content.type === 'paragraph' && <div dangerouslySetInnerHTML={{ __html: content.content }} />}
          {content.type === 'image' && (
            <div className="flex flex-col items-center space-y-3">
              <img src={content.content} alt={content.alt} className="rounded-lg" />
              {content.alt && <p className="text-text/50 text-sm">{content.alt}</p>}
            </div>
          )}
          {content.type === 'code' && <CodeBlock content={content.content} />}
        </div>
      ))}

      <BlogDetails project={project} />
    </div>
  );
};
