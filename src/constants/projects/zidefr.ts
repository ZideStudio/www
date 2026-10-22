import memberService from '@/services/member';
import type { Project } from '@models/project.model';
import { ProjectStatus, ProjectTarget, ProjectType } from '@models/project.model';

export const zideFrProject: Project = {
  title: 'Zide.fr',
  slug: 'zide-fr',
  mainColor: '#01AEF7',
  descriptionEn: 'The website you are on right now: the home of the Zide collective, its team and all of its projects.',
  descriptionFr: "Le site web sur lequel vous vous situez : la maison du collectif Zide, de son équipe et de l'ensemble de ses projets.",
  releaseDate: {
    date: new Date('2025-03-16'),
    articlePublished: new Date('2025-03-16'),
    articleUpdated: new Date('2026-08-29'),
  },
  labels: ['Website', 'Collective', 'Showcase'],
  featuresEn: ['Showcase of our projects', 'Presentation of the team', 'Available in English and French', 'Open source'],
  featuresFr: ['Vitrine de nos projets', "Présentation de l'équipe", 'Disponible en français et en anglais', 'Open source'],
  status: ProjectStatus.RELEASED,
  target: ProjectTarget.EVERYONE,
  type: ProjectType.WEBSITE,
  isOpenSource: true,
  logo: '/assets/projects/zide-fr/logo.png',
  link: {
    website: 'https://zide.fr',
    github: 'https://github.com/ZideStudio/www',
  },
  pages: [
    {
      content: [
        {
          type: 'paragraph',
          contentEn:
            'This is the website you are currently on! It was developed like our other projects, and without it you would probably not know us. It is a project that will constantly evolve with the image of the collective, and will welcome our next projects.',
          contentFr:
            "C'est le site web sur lequel vous vous situez ! Il a été développé comme nos autres projets, et sans lui vous ne nous connaîtriez sûrement pas. C'est un projet qui évoluera constamment à l'image du collectif, et qui accueillera nos prochains projets.",
        },
        {
          type: 'title',
          contentEn: 'What you will find here',
          contentFr: 'Ce que vous y trouverez',
        },
        {
          type: 'paragraph',
          contentEn: 'Zide.fr is our showcase. It gathers everything about the collective in one place:',
          contentFr: 'Zide.fr est notre vitrine. Il rassemble tout ce qui concerne le collectif en un seul endroit :',
        },
        {
          type: 'paragraph',
          contentEn: `
          <ul class="text-left space-y-1">
              <li>• The list of our projects, with their status, their features and their detailed pages</li>
              <li>• The team members and the projects they take part in</li>
              <li>• A contact form, and a link to our Discord to join the community</li>
          </ul>
          `,
          contentFr: `
          <ul class="text-left space-y-1">
              <li>• La liste de nos projets, avec leur statut, leurs fonctionnalités et leurs pages détaillées</li>
              <li>• Les membres de l'équipe et les projets auxquels ils participent</li>
              <li>• Un formulaire de contact, et un lien vers notre Discord pour rejoindre la communauté</li>
          </ul>
          `,
        },
        {
          type: 'title',
          contentEn: 'Built like our other projects',
          contentFr: 'Conçu comme nos autres projets',
        },
        {
          type: 'paragraph',
          contentEn:
            'The site is open source and built with Next.js, React, TypeScript and Tailwind CSS, with full French and English support. Its code is available on GitHub, feel free to take a look, or to contribute!',
          contentFr:
            "Le site est open source et construit avec Next.js, React, TypeScript et Tailwind CSS, avec une prise en charge complète du français et de l'anglais. Son code est disponible sur GitHub, n'hésitez pas à y jeter un œil, ou à contribuer !",
        },
        {
          type: 'title',
          contentEn: 'A website that keeps evolving',
          contentFr: 'Un site en constante évolution',
        },
        {
          type: 'paragraph',
          contentEn: 'New projects, new team members, new features: the website will grow along with the collective. Join our Discord to follow its progress!',
          contentFr:
            'Nouveaux projets, nouveaux membres, nouvelles fonctionnalités : le site grandira en même temps que le collectif. Rejoignez notre Discord pour suivre son évolution !',
        },
      ],
    },
  ],
  authors: [memberService.getById(1)],
  contributors: [memberService.getById(1), memberService.getById(2)],
};
