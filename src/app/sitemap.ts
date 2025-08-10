export const dynamic = 'force-static';

import { PROJECTS } from '@constants/projects.data';
import dayjs from 'dayjs';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://zide.fr',
      lastModified: '2025-08-10',
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://zide.fr/#about',
      lastModified: '2025-08-10',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://zide.fr/projects',
      lastModified: '2025-08-10',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...PROJECTS.map((project) => ({
      url: `https://zide.fr/project/${project.slug}`,
      lastModified: project.releaseDate.articleUpdated
        ? dayjs(project.releaseDate.articleUpdated).format('YYYY-MM-DD')
        : dayjs(project.releaseDate.articlePublished).format('YYYY-MM-DD'),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    })),
  ];
}
