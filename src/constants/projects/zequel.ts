import memberService from '@/services/member';
import type { Project } from '@models/project.model';
import { ProjectStatus, ProjectTarget, ProjectType } from '@models/project.model';

export const zequelProject: Project = {
  title: 'Zequel',
  slug: 'zequel',
  descriptionEn: 'SQL client software, with a lot of features and a simple intuitive interface.',
  descriptionFr: 'Logiciel client SQL, avec de nombreuses fonctionnalités et une interface intuitive simple.',
  releaseDate: {
    articlePublished: new Date('2025-03-16'),
    articleUpdated: new Date('2025-11-21'),
  },
  labels: ['SQL Client', 'Database Management', 'Software'],
  featuresEn: ['Free software', 'Database management', 'Folder organization'],
  featuresFr: ['Logiciel gratuit', 'Gestion de base de données', 'Organisation en dossiers'],
  status: ProjectStatus.PAUSED,
  target: ProjectTarget.DEVELOPERS,
  type: ProjectType.SOFTWARE,
  isOpenSource: true,
  link: {
    github: 'https://github.com/ZideStudio/Zequel',
  },
  pages: [
    {
      content: [
        {
          type: 'paragraph',
          contentEn: 'Zequel is a SQL client software, with a lot of features with a simple and intuitive interface.',
          contentFr: 'Zequel est un logiciel client SQL, avec de nombreuses fonctionnalités et une interface intuitive simple.',
        },
        {
          type: 'paragraph',
          contentEn: "We won't say more for the moment. This project is on a temporary development pause to prioritize other projects.",
          contentFr:
            "Nous ne pouvons pas vous en dire plus pour le moment. Ce projet est en pause de développement temporairement pour priviléger d'autres projets.",
        },
      ],
    },
  ],
  authors: [memberService.getById(1)],
  contributors: [memberService.getById(1)],
};
