import { PROJECTS } from '@constants/projects.data';
import dayjs from 'dayjs';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://zide.fr',
      lastModified: '2025-11-21',
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://zide.fr/#about',
      lastModified: '2025-11-21',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://zide.fr/#team',
      lastModified: '2025-11-21',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://zide.fr/projects',
      lastModified: '2025-11-21',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://zide.fr/contact',
      lastModified: '2025-11-21',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...PROJECTS.map((project) => ({
      url: `https://zide.fr/project/${project.slug}`,
      lastModified: project.releaseDate.articleUpdated
        ? dayjs(project.releaseDate.articleUpdated).format('YYYY-MM-DD')
        : dayjs(project.releaseDate.articlePublished).format('YYYY-MM-DD'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
