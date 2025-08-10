import { Project, ProjectStatus, ProjectTarget, ProjectType } from '@models/project.model';

export const wakfuThemeProject: Project = {
  title: 'Wakfu Theme (Zed IDE)',
  slug: 'wakfu-theme',
  descriptionEn: 'A dark and clear theme that allows you to customise your IDE, compatible with Zed.',
  descriptionFr: 'Un thème sombre et clair qui vous permet de personnaliser votre IDE, compatible avec Zed.',
  imageLink: 'https://i.imgur.com/hvgz8Jr.png',
  releaseDate: {
    date: new Date('2025-01-16'),
    articlePublished: new Date('2025-08-09'),
  },
  labels: ['Theme', 'Zed IDE'],
  featuresEn: ['Dark and clear theme', 'Compatible with Zed', 'Customisable'],
  featuresFr: ['Thème sombre et clair', 'Compatible avec Zed', 'Personnalisable'],
  status: ProjectStatus.RELEASED,
  target: ProjectTarget.DEVELOPERS,
  type: ProjectType.EXTENSION,
  isOpenSource: true,
  link: {
    install: 'https://zed.dev/extensions/wakfu-theme',
    github: 'https://github.com/JulesJuul/zed-wakfu-theme',
  },
  pages: [
    {
      content: [
        {
          type: 'paragraph',
          contentEn: 'Welcome to the Wakfu Theme for Zed IDE!',
          contentFr: 'Voici le thème Wakfu pour Zed IDE!',
        },
        {
          type: 'paragraph',
          contentEn: 'It is compatible in dark and light mode. Here is the render:',
          contentFr: "Il est compatible en mode sombre et clair. Voici le rendu de l'interface :",
        },
        {
          type: 'image',
          contentEn: 'https://github.com/JulesJuul/zed-wakfu-theme/blob/main/screenshots/wakfu-dark.png?raw=true',
          altEn: 'Dark theme',
          altFr: 'Thème sombre',
        },
        {
          type: 'image',
          contentEn: 'https://github.com/JulesJuul/zed-wakfu-theme/blob/main/screenshots/wakfu-light.png?raw=true',
          altEn: 'Light theme',
          altFr: 'Thème clair',
        },
      ],
    },
  ],
};
