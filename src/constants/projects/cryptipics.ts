import memberService from '@/services/member';
import type { Project } from '@models/project.model';
import { ProjectStatus, ProjectTarget, ProjectType } from '@models/project.model';

export const cryptiPicsProject: Project = {
  title: 'CryptiPics',
  slug: 'cryptipics',
  descriptionEn: 'A website for sharing information securely and anonymously. Features secure pastebin, cryptography tool and steganography.',
  descriptionFr:
    'Un site web pour partager des informations de manière sécurisée et anonyme. Propose un pastebin sécurisé, un outil de chiffrement sur les images et un outil de stéganographie sur les images.',
  releaseDate: {
    planned: new Date('2027-01-01'),
    articlePublished: new Date('2025-03-16'),
    articleUpdated: new Date('2025-11-21'),
  },
  labels: ['Website', 'Cryptography', 'Secure pastebin'],
  featuresEn: ['Secure pastebin', 'Cryptography tool on pictures', 'Steganography tool on pictures'],
  featuresFr: ['Pastebin sécurisé', 'Outil de chiffrement sur les images', 'Outil de stéganographie sur les images'],
  status: ProjectStatus.PAUSED,
  target: ProjectTarget.EVERYONE,
  type: ProjectType.WEBSITE,
  isOpenSource: false,
  link: {
    github: 'https://github.com/ZideStudio/CryptiPics',
  },
  pages: [
    {
      titleEn: 'Cryptography Tool',
      titleFr: 'Outil de chiffrement',
      content: [
        {
          type: 'paragraph',
          contentEn:
            'The cryptography tool will be one of the first services available on the site. It allows you to encrypt and decrypt images to secure your content, ensuring that it can only be accessed by people you trust!',
          contentFr:
            "L'outil de chiffrement sera l'une des premières services disponibles sur le site. Il vous permet de chiffrer et déchiffrer des images pour sécuriser votre contenu, en s'assurant que seuls les personnes que vous avez confiance peuvent y accéder !",
        },
        {
          type: 'paragraph',
          contentEn: 'Here are the steps to encrypt your image:',
          contentFr: 'Voici les étapes pour chiffrer votre image :',
        },
        {
          type: 'paragraph',
          contentEn: `
          <ul class="list-disc list-inside text-left space-y-1">
              <li>Download your .CPK key and share it with those you trust</li>
              <li>Upload an image you want to secure and associate it with your key. The site will then return a new encrypted image, where the pixels appear scrambled and meaningless.</li>
          </ul>
          `,
          contentFr: `
          <ul class="list-disc list-inside text-left space-y-1">
              <li>Téléchargez votre clé .CPK et partagez-la avec celles que vous avez confiance</li>
              <li>Chargez une image que vous souhaitez sécuriser et associez-la à votre clé. Le site vous renverra une nouvelle image chiffrée, où les pixels apparaissent mélangés et sans sens.</li>
          </ul>
          `,
        },
        {
          type: 'image',
          contentEn: 'https://i.imgur.com/QXllgrW.png',
        },
        {
          type: 'paragraph',
          contentEn: `
          <ul class="list-disc list-inside text-left space-y-1">
              <li>The recipient of your encrypted image can visit the site, upload the encrypted image along with the associated key, and retrieve the original image you had securely hidden. Be careful—if the wrong key is used, the process will not work!</li>
          </ul>
          `,
          contentFr: `
          <ul class="list-disc list-inside text-left space-y-1">
              <li>Le destinataire de votre image chiffrée peut visiter le site, télécharger l'image chiffrée ainsi que la clé associée, et récupérer l'image originale que vous aviez cachée de manière sécurisée. Soyez prudent-e si vous utilisez la mauvaise clé, le processus ne fonctionnera pas!</li>
          </ul>
          `,
        },
        {
          type: 'image',
          contentEn: 'https://i.imgur.com/DGU04z9.png',
        },
        {
          type: 'paragraph',
          contentEn:
            "Now you know everything about the first tool from CryptiPics! If you're interested, this service will eventually be paired with a steganography tool, which we also recommend checking out.",
          contentFr:
            'Maintenant, vous savez tout sur le premier outil de CryptiPics! Si vous êtes intéressé, ce service sera bientôt associé à un outil de stéganographie, que nous vous recommandons également de regarder.',
        },
        {
          type: 'paragraph',
          contentEn: 'This cryptography tool will be the very first online service from CryptiPics. Stay tuned on our social media channels for updates.',
          contentFr:
            "Cet outil cryptographique sera le premier service en ligne de CryptiPics à être. Restez à l'écoute sur nos réseaux sociaux pour les mises à jour.",
        },
      ],
    },
    {
      titleEn: 'Secure Pastebin',
      titleFr: 'Pastebin sécurisé',
      content: [
        {
          type: 'paragraph',
          contentEn: 'The pastebin tool will allow you to temporarily and securely store any textual content! Your text can be:',
          contentFr:
            'Le pastebin sécurisé vous permettra de stocker temporairement et de manière sécurisée tout type de contenu textuel! Votre texte peut être:',
        },
        {
          type: 'paragraph',
          contentEn: `
          <ul class="list-disc list-inside text-left space-y-1">
              <li>Encrypted using your .CPK key or a password</li>
              <li>Stored for a maximum duration of one month</li>
          </ul>
          `,
          contentFr: `
          <ul class="list-disc list-inside text-left space-y-1">
              <li>Chiffré à l'aide de votre clé .CPK ou d'un mot de passe</li>
              <li>Stocké pendant une durée maximale d'un mois</li>
          </ul>
          `,
        },
        {
          type: 'paragraph',
          contentEn: 'This way, you can securely share any content with your contacts.',
          contentFr: 'De cette manière, vous pouvez partager de manière sécurisée tout type de contenu avec vos contacts.',
        },
        {
          type: 'paragraph',
          contentEn: 'This pastebin tool will be released after the image encryption service.',
          contentFr: "Ce pastebin sécurisé sera disponible après le service de chiffrement d'images.",
        },
        {
          type: 'paragraph',
          contentEn: 'In a second phase, this tool can evolve to offer a public API, enabling integration into various platforms.',
          contentFr:
            "Dans une seconde phase, cet outil a pour but d'évoluer pour proposer une API publique, permettant l'intégration dans diverses plateformes.",
        },
      ],
    },
    {
      titleEn: 'Steganography',
      titleFr: 'Stéganographie',
      content: [
        {
          type: 'paragraph',
          contentEn:
            'The steganography tool is an ambitious project, but our prototype has already proven its effectiveness! It will allow you to hide any textual content within an image.',
          contentFr:
            "La stéganographie est un projet ambitieux, mais notre prototype a déjà démontré son efficacité ! Il vous permettra de cacher n'importe quel contenu textuel dans une image.",
        },
        {
          type: 'paragraph',
          contentEn: 'Did a friend send you an image without any context? Perhaps they’ve hidden something inside it?',
          contentFr: "Avez-vous reçu une image de votre ami sans aucune indication ? Peut-être qu'il a caché quelque chose à l'intérieur.",
        },
        {
          type: 'paragraph',
          contentEn:
            'Quickly upload the image to CryptiPics’s steganography tool, pairing it with your CPK key or a password, and finally uncover if there’s something concealed within.',
          contentFr:
            "Déposez rapidement l'image sur l'outil de stéganographie de CryptiPics, en l'associant à votre CPK ou à un mot de passe, puis découvrez si quelque chose est caché à l'intérieur.",
        },
        {
          type: 'image',
          contentEn: 'https://i.imgur.com/WJuTC10.png',
        },
        {
          type: 'paragraph',
          contentEn: 'This tool will reveal the hidden content intended for you!',
          contentFr: 'Cet outil va vous révéler le contenu caché destiné à vous !',
        },
        {
          type: 'paragraph',
          contentEn: 'This more ambitious tool will be released much later; stay tuned on our social media channels!',
          contentFr: "Cet outil plus ambitieux sera lancé bien plus tard, restez à l'écoute sur nos réseaux sociaux !",
        },
      ],
    },
  ],
  authors: [memberService.getById(1)],
  contributors: [memberService.getById(1), memberService.getById(2)],
};
