import memberService from '@/services/member';
import type { Project } from '@models/project.model';
import { ProjectStatus, ProjectTarget, ProjectType } from '@models/project.model';

export const slotFinderProject: Project = {
  title: 'Slot Finder',
  slug: 'slotfinder',
  descriptionEn: 'No more endless discussions to find a date: let us suggest the best times that suit everyone.',
  descriptionFr: 'Fini les discussions interminables pour trouver une date: laissez-nous vous proposer les meilleurs créneaux communs.',
  releaseDate: {
    planned: new Date('2026-12-01'),
    articlePublished: new Date('2025-11-18'),
  },
  labels: ['Website', 'Event Planner', 'Time Management'],
  featuresEn: ['Optimal time slot suggestions', 'Event organization', 'Availability polls', 'Calendar integrations'],
  featuresFr: ['Suggestions de créneaux optimaux', "Organisation d'évènements", 'Sondages de disponibilité', 'Intégration de calendriers'],
  status: ProjectStatus.IN_PROGRESS,
  target: ProjectTarget.EVERYONE,
  type: ProjectType.WEBSITE,
  isOpenSource: true,
  link: {
    github: 'https://github.com/ZideStudio/SlotFinder',
  },
  pages: [
    {
      titleEn: 'About',
      titleFr: 'À propos',
      content: [
        {
          type: 'paragraph',
          contentEn:
            'Slot Finder is a web application designed to simplify the event scheduling process by suggesting optimal time slots that work for all participants.',
          contentFr:
            'Slot Finder est une application web conçue pour simplifier le processus de planification des événements en proposant des créneaux horaires optimaux qui conviennent à tous les participants.',
        },
        {
          type: 'paragraph',
          contentEn: "In a few simple steps, you can organise events taking into account everyone's availability:",
          contentFr: 'En quelques étapes simples, vous pouvez organiser des événements en tenant compte des disponibilités de chacun :',
        },
        {
          type: 'paragraph',
          contentEn: `
          <ul class="text-left space-y-1">
              <li>1. Create your event</li>
              <li>2. Invite participants</li>
              <li>3. Participants indicate their availability by selecting their time slots</li>
              <li>4. Slot Finder suggests the best time slots for the event</li>
              <li>5. Finalize scheduling by choosing the optimal time slot</li>
          </ul>
          `,
          contentFr: `
          <ul class="text-left space-y-1">
              <li>1. Créer votre événement</li>
              <li>2. Invitez les participants</li>
              <li>3. Les participants indiquent leurs disponibilités en sélectionnant leurs horaires</li>
              <li>4. Slot Finder suggère les meilleurs créneaux horaires pour l'événement</li>
              <li>5. Finalisez la planification en choisissant le créneau horaire optimal</li>
          </ul>
          `,
        },
        {
          type: 'image',
          contentEn: 'https://i.imgur.com/Pub584s.png',
          altEn: 'Slot Finder overview',
          altFr: 'Aperçu de Slot Finder',
        },
        {
          type: 'paragraph',
          contentEn:
            'For more information on the features and usage of Slot Finder, please visit the <a href="/project/slotfinder/features" class="text-blue-500 underline">Features tab</a>.',
          contentFr:
            'Pour en savoir plus sur les fonctionnalités et l\'utilisation de Slot Finder, <a href="/project/slotfinder/features" class="text-blue-500 underline">rendez-vous dans l\'onglet Fonctionnalités</a>.',
        },
      ],
    },
    {
      titleEn: 'Features',
      titleFr: 'Fonctionnalités',
      content: [
        {
          type: 'paragraph',
          contentEn: "Let's take a concrete example to illustrate the features of Slot Finder, starting with the creation of your first event!",
          contentFr: 'Prenons un exemple concret pour illustrer les fonctionnalités de Slot Finder, en commençant par la création de votre premier événement !',
        },
        {
          type: 'image',
          contentEn: 'https://i.imgur.com/RUUhuCf.png',
          altEn: 'Event creation form',
          altFr: "Formulaire de création d'événement",
        },
        {
          type: 'paragraph',
          contentEn: 'After that, you can invite participants by sharing a unique link to the event.',
          contentFr: "Une fois crée, vous pouvez inviter des participants en partageant un lien unique vers l'événement.",
        },
        {
          type: 'paragraph',
          contentEn:
            'Next, participants can indicate their availability by selecting time slots directly on the interactive calendar, or by clicking the button.',
          contentFr:
            'Ensuite, les participants peuvent indiquer leurs disponibilités en sélectionnant les créneaux horaires directement sur le calendrier interactif, ou bien en cliquant sur le bouton.',
        },
        {
          type: 'image',
          contentEn: 'https://i.imgur.com/Ha1caTz.png',
          altEn: 'Adding availability',
          altFr: 'Ajout de disponibilités',
        },
        {
          type: 'paragraph',
          contentEn:
            "Once participants have submitted their availability, Slot Finder analyses the data and suggests the best time slots for the event based on everyone's availability.",
          contentFr:
            "Une fois que les participants ont soumis leurs disponibilités, Slot Finder analyse les données et suggère les meilleurs créneaux horaires pour l'événement en fonction des disponibilités de chacun.",
        },
        {
          type: 'image',
          contentEn: 'https://i.imgur.com/Pub584s.png',
          altEn: 'Highlighting optimal slots',
          altFr: 'Mise en évidence des créneaux optimaux',
        },
        {
          type: 'paragraph',
          contentEn: 'Finally, you can finalize the scheduling by selecting the optimal time slot suggested by Slot Finder and notifying all participants.',
          contentFr: 'Vous pouvez aussi afficher la vue des participants pour voir qui est disponible à quels moments, ce qui facilite la prise de décision !',
        },
        {
          type: 'image',
          contentEn: 'https://i.imgur.com/jZZdCJ3.png',
          altEn: 'Participants view',
          altFr: 'Vue des participants',
        },
        {
          type: 'paragraph',
          contentEn:
            'Thank you for taking the time to explore Slot Finder. We hope this application will help you streamline your event planning and save valuable time!',
          contentFr:
            "Merci d'avoir pris le temps de découvrir Slot Finder. Nous espérons que cette application vous aidera à simplifier la planification de vos événements et à gagner du temps précieux !",
        },
        {
          type: 'paragraph',
          contentEn: 'Development is ongoing, so join the Discord community to stay updated on the latest progress.',
          contentFr: 'Le développement suit son cours, rejoignez la communauté Discord pour rester informé des dernières avancées.',
        },
      ],
    },
    {
      titleEn: 'Wiki',
      titleFr: 'Wiki',
      content: [
        {
          type: 'paragraph',
          contentEn:
            'For more information on development priorities and upcoming features, please refer to <a href="https://github.com/ZideStudio/SlotFinder/wiki" class="text-blue-500 underline">the project wiki on GitHub</a>.',
          contentFr:
            'Pour en savoir plus sur les priorités de développement et les fonctionnalités à venir, consultez <a href="https://github.com/ZideStudio/SlotFinder/wiki" class="text-blue-500 underline">le wiki du projet sur GitHub</a>.',
        },
      ],
    },
  ],
  authors: [memberService.getById(1)],
  contributors: [memberService.getById(1), memberService.getById(3)],
};
