import { PROJECTS } from '@constants/projects.data';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://zide.fr',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://zide.fr/#about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://zide.fr/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...PROJECTS.map((project) => ({
      url: `https://zide.fr/project/${project.slug}`,
      lastModified: project.releaseDate.articleUpdated ? new Date(project.releaseDate.articleUpdated) : new Date(project.releaseDate.articlePublished),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    })),
  ];
}
