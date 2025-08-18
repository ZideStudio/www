import memberService from '@/services/member';
import type { Project } from '@models/project.model';
import { ProjectStatus, ProjectTarget, ProjectType } from '@models/project.model';

export const zequelProject: Project = {
  title: 'Zequel',
  slug: 'zequel',
  descriptionEn: 'SQL client software, with a lot of features and a simple intuitive interface.',
  descriptionFr: 'Logiciel client SQL, avec de nombreuses fonctionnalités et une interface intuitive simple.',
  imageLink: 'https://i.imgur.com/ZMdgiRi.png',
  releaseDate: {
    planned: new Date('2027-01-01'),
    articlePublished: new Date('2025-03-16'),
  },
  labels: ['SQL Client', 'Database Management', 'Software'],
  featuresEn: ['Free software', 'Database management', 'Folder organization'],
  featuresFr: ['Logiciel gratuit', 'Gestion de base de données', 'Organisation en dossiers'],
  status: ProjectStatus.PAUSED,
  target: ProjectTarget.DEVELOPERS,
  type: ProjectType.SOFTWARE,
  isOpenSource: true,
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
          contentEn: "We won't say more for the moment. This project is still under development and will be <u>launched in beta version in 2027!</u>",
          contentFr:
            'Nous ne pouvons pas vous en dire plus pour le moment. Ce projet est toujours en développement et sera <u>lancé en version bêta en 2027 !</u>',
        },
      ],
    },
  ],
  authors: [memberService.getById(1)],
  contributors: [memberService.getById(1)],
};
