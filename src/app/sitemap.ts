import { locales } from '@/i18n/config';
import { PROJECTS } from '@constants/projects.data';
import { getLanguageAlternates, getLocalizedUrl } from '@utils/seo';
import dayjs from 'dayjs';
import type { MetadataRoute } from 'next';

type SitemapPage = {
  path: string;
  lastModified: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  priority: number;
};

const PAGES: SitemapPage[] = [
  { path: '', lastModified: '2026-10-19', changeFrequency: 'monthly', priority: 1 },
  { path: '/about', lastModified: '2026-10-19', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/team', lastModified: '2026-10-19', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/projects', lastModified: '2026-10-19', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/contact', lastModified: '2025-11-21', changeFrequency: 'monthly', priority: 0.9 },
  ...PROJECTS.map((project) => ({
    path: `/project/${project.slug}`,
    lastModified: dayjs(project.releaseDate.articleUpdated ?? project.releaseDate.articlePublished).format('YYYY-MM-DD'),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  })),
];

// Every URL is listed once per locale, each one pointing to its translations (hreflang)
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap(({ path, ...page }) =>
    locales.map((locale) => ({
      url: getLocalizedUrl(locale, path),
      ...page,
      alternates: { languages: getLanguageAlternates(path) },
    })),
  );
}
