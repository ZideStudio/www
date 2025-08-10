import { Project, ProjectStatus, ProjectTarget, ProjectType } from '@models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'Auto Version Manager',
    slug: 'avm',
    pages: [],
    descriptionEn: 'A CLI to manage your versions managers automatically. Compatible with NVM, GVM, Rustup, and more!',
    descriptionFr: 'Un CLI pour gérer automatiquement vos gestionnaires de versions. Compatible avec NVM, GVM, Rustup, et plus encore !',
    imageLink: 'https://i.imgur.com/ilstnBg.jpeg',
    releaseDate: {
      date: new Date('2025-03-16'),
      articlePublished: new Date('2025-03-16'),
    },
    labels: ['CLI tool', 'Version Manager', 'Productivity'],
    featuresEn: ['Automatic version manager management', 'Bash and Zsh compatibility', 'Easy setup'],
    featuresFr: ['Gestion automatique des gestionnaires de versions', 'Compatibilité avec Bash et Zsh', 'Facile à configurer'],
    status: ProjectStatus.RELEASED,
    target: ProjectTarget.DEVELOPERS,
    type: ProjectType.CLI,
    isOpenSource: true,
    link: {
      github: 'https://github.com/ZideStudio/avm',
    },
  },
  {
    title: 'Wakfu Theme (Zed IDE)',
    slug: 'wakfu-theme',
    pages: [],
    descriptionEn: 'A dark and clear theme that allows you to customise your IDE, compatible with Zed.',
    descriptionFr: 'Un thème sombre et clair qui vous permet de personnaliser votre IDE, compatible avec Zed.',
    imageLink: 'https://i.imgur.com/hvgz8Jr.png',
    releaseDate: {
      date: new Date('2025-01-16'),
      articlePublished: new Date('2025-01-17'),
    },
    labels: ['Theme', 'Zed IDE'],
    featuresEn: ['Dark and clear theme', 'Compatible with Zed', 'Customisable'],
    featuresFr: ['Thème sombre et clair', 'Compatible avec Zed', 'Personnalisable'],
    status: ProjectStatus.RELEASED,
    target: ProjectTarget.DEVELOPERS,
    type: ProjectType.EXTENSION,
    isOpenSource: true,
    link: {
      github: 'https://github.com/JulesJuul/zed-wakfu-theme',
    },
  },
  {
    title: 'Commit Issue Parser',
    slug: 'commit-issue-parser',
    pages: [],
    descriptionEn:
      'This Raycast extension allows you to parse your issue urls (such as Jira, GitHub and GitLab) to provide you with a commit name and description that you can use with Git!',
    descriptionFr:
      'Cette extension Raycast vous permet de parser vos URL de tickets (comme Jira, GitHub et GitLab) pour vous fournir un nom de commit et une description que vous pouvez utiliser avec Git!',
    imageLink: 'https://github.com/ZideStudio/CommitIssueParser/blob/main/metadata/commit-issue-parser-2.png?raw=true',
    releaseDate: {
      date: new Date('2025-08-05'),
      articlePublished: new Date('2025-08-05'),
    },
    labels: ['Issue Parser', 'Raycast Extension', 'Productivity'],
    featuresEn: ['Parse issue urls', 'GitHub, GitLab and Jira compatibility', 'Generate commit name, a description and a body'],
    featuresFr: ['Parse les URL de tickets', 'Compatible avec GitHub, GitLab et Jira', 'Génère un nom de commit, une description et un body'],
    status: ProjectStatus.RELEASED,
    target: ProjectTarget.DEVELOPERS,
    type: ProjectType.EXTENSION,
    isOpenSource: true,
    link: {
      github: 'https://github.com/ZideStudio/CommitIssueParser',
    },
    customInstallButton:
      '<a title="Install commit-issue-parser Raycast Extension" href="https://www.raycast.com/julesjuul/commit-issue-parser"><img src="https://www.raycast.com/julesjuul/commit-issue-parser/install_button@2x.png?v=1.1" height="64" alt="" style="height: 64px;"></a>',
  },
  {
    title: 'CryptiPics',
    slug: 'cryptipics',
    pages: [],
    descriptionEn: 'A website for sharing information securely and anonymously. Features secure pastebin, cryptography tool and steganography.',
    descriptionFr:
      'Un site web pour partager des informations de manière sécurisée et anonyme. Propose un pastebin sécurisé, un outil de chiffrement sur les images et un outil de stéganographie sur les images.',
    imageLink: 'https://i.imgur.com/ouC8WB5.png',
    releaseDate: {
      planned: new Date('2025-12-01'),
      articlePublished: new Date('2025-01-01'),
    },
    labels: ['Website', 'Cryptography', 'Secure pastebin'],
    featuresEn: ['Secure pastebin', 'Cryptography tool on pictures', 'Steganography tool on pictures'],
    featuresFr: ['Pastebin sécurisé', 'Outil de chiffrement sur les images', 'Outil de stéganographie sur les images'],
    status: ProjectStatus.IN_PROGRESS,
    target: ProjectTarget.EVERYONE,
    type: ProjectType.WEBSITE,
    isOpenSource: false,
    link: {
      github: 'https://github.com/ZideStudio/CryptiPics',
    },
  },
  {
    title: 'Zequel',
    slug: 'zequel',
    pages: [],
    descriptionEn: 'SQL client software, with a lot of features and a simple intuitive interface.',
    descriptionFr: 'Logiciel client SQL, avec de nombreuses fonctionnalités et une interface intuitive simple.',
    imageLink: 'https://i.imgur.com/ZMdgiRi.png',
    releaseDate: {
      planned: new Date('2027-01-01'),
      articlePublished: new Date('2027-02-01'),
    },
    labels: ['SQL Client', 'Database Management', 'Software'],
    featuresEn: ['Free software', 'Database management', 'Folder organization'],
    featuresFr: ['Logiciel gratuit', 'Gestion de base de données', 'Organisation en dossiers'],
    status: ProjectStatus.PAUSED,
    target: ProjectTarget.DEVELOPERS,
    type: ProjectType.SOFTWARE,
    isOpenSource: true,
  },
];

export const projectStatusLabels: Record<ProjectStatus, { label: string; color: string }> = {
  PLANNED: {
    label: 'Planned',
    color: 'bg-black/50',
  },
  IN_PROGRESS: {
    label: 'In progress',
    color: 'bg-blue-300/50',
  },
  PAUSED: {
    label: 'Paused',
    color: 'bg-black/50',
  },
  RELEASED: {
    label: '🎉 Released',
    color: 'bg-green-500',
  },
};
