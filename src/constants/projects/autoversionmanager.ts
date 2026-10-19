import memberService from '@/services/member';
import type { Project } from '@models/project.model';
import { ProjectStatus, ProjectTarget, ProjectType } from '@models/project.model';

export const autoVersionManagerProject: Project = {
  title: 'Auto Version Manager',
  slug: 'avm',
  mainColor: '#555',
  descriptionEn: 'A CLI to manage your versions managers automatically. Compatible with NVM, GVM, Rustup, and more!',
  descriptionFr: 'Un CLI pour gérer automatiquement vos gestionnaires de versions. Compatible avec NVM, GVM, Rustup, et plus encore !',
  releaseDate: {
    date: new Date('2025-03-16'),
    articlePublished: new Date('2025-03-16'),
    articleUpdated: new Date('2025-08-20'),
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
    install: '/project/avm/install#installation',
  },
  pages: [
    {
      titleEn: 'About',
      titleFr: 'À propos',
      content: [
        {
          type: 'title',
          contentEn: 'What is AVM?',
          contentFr: "Qu'est-ce que AVM?",
        },
        {
          type: 'paragraph',
          contentEn:
            'The project analyzes the files in your directory as soon as you open your terminal, and automatically changes the version of your language via your version manager, according to the configuration file in the current directory.',
          contentFr:
            'Le projet analyse les fichiers de votre répertoire dès que vous ouvrez votre terminal, et change automatiquement la version de votre langage via votre gestionnaire de version, en fonction du fichier de configuration dans le répertoire courant.',
        },
        {
          type: 'image',
          altEn: 'AVM in action when opening the terminal',
          altFr: "AVM en action lors de l'ouverture du terminal",
          contentEn: 'https://i.imgur.com/xS2XYlA.png',
        },
        {
          type: 'paragraph',
          contentEn: "<b>Just install the CLI and you don't have to worry about your versions anymore! 😇</b>",
          contentFr: "<b>Installez simplement le CLI et vous n'aurez plus à vous soucier des versions de vos langages ! 😇</b>",
        },
        {
          type: 'paragraph',
          contentEn: `<div className="text-left">
            <p className="mb-1 font-medium">Language versions can be identified from the following files:</p>
            <ul class="list-disc list-inside text-left space-y-1">
                <li>Node: .nvmrc, .node-version, package.json</li>
                <li>Go: go.mod</li>
                <li>Rust: rust-toolchain</li>
                <li>Ruby: .rbenv, .rvmrc, .ruby-version, .ruby-gemset</li>
                <li>All: Dockerfile</li>
            </ul>
          </div>`,
          contentFr: `<div className="text-left">
            <p className="mb-1 font-medium">Les versions des langages peuvent être identifiées à partir des fichiers suivants:</p>
            <ul class="list-disc list-inside text-left space-y-1">
                <li>Node: .nvmrc, .node-version, package.json</li>
                <li>Go: go.mod</li>
                <li>Rust: rust-toolchain</li>
                <li>Ruby: .rbenv, .rvmrc, .ruby-version, .ruby-gemset</li>
                <li>Tous: Dockerfile</li>
            </ul>
          </div>`,
        },
        {
          type: 'paragraph',
          contentEn:
            '<div><b>🎉 AVM has been successfully published in early 2025!</b><br/><em>Regular updates will introduce new features and resolve issues.</em></div>',
          contentFr:
            "<div><b>🎉 AVM a été publié avec succès en début d'année 2025!</b><br/><em>A savoir que des mises à jour régulières introduiront de nouvelles fonctionnalités et résoudront des bugs sont prévues.</em></div>",
        },
        {
          type: 'image',
          altEn: 'Example of the help command',
          altFr: "Exemple de la commande d'aide",
          contentEn: 'https://i.imgur.com/DxL4ViJ.png',
        },
      ],
    },
    {
      titleEn: 'Install',
      titleFr: 'Installation',
      content: [
        {
          type: 'title',
          contentEn: 'Installation',
          contentFr: 'Installation',
        },
        {
          type: 'paragraph',
          contentEn:
            'To <u>install</u> or <u>update</u> avm, you should run the install script.<br/>To do that, you may either download and run the script manually, or use the following cURL or Wget command:',
          contentFr:
            "Pour <u>installer</u> ou <u>mettre à jour</u> avm, vous devez exécuter le script d'installation.<br/>Vous pouvez soit télécharger et exécuter le script manuellement, ou utiliser la commande cURL ou Wget suivante :",
        },
        {
          type: 'code',
          contentEn: 'curl -sSL https://github.com/ZideStudio/avm/releases/latest/download/install.sh | bash',
        },
        {
          type: 'paragraph',
          contentEn: 'OR',
          contentFr: 'OU',
        },
        {
          type: 'code',
          contentEn: 'curl -sSL https://github.com/ZideStudio/avm/releases/latest/download/install.sh | bash',
        },
        {
          type: 'paragraph',
          contentEn:
            'When you run the install script, it will prompt you with several questions to set up AVM according to your preferences. You will have the option to configure AVM to run automatically each time you open a terminal, and to enable automatic updates.',
          contentFr:
            "Quand vous exécutez le script d'installation, il vous posera plusieurs questions pour configurer AVM selon vos préférences. Vous aurez l'option de configurer AVM pour qu'il s'exécute automatiquement chaque fois que vous ouvrez un terminal, et d'activer les mises à jour automatiques.",
        },
        {
          type: 'title',
          contentEn: 'Uninstall',
          contentFr: 'Désinstallation',
        },
        {
          type: 'paragraph',
          contentEn: 'To uninstall AVM, simply remove the installation script from your system :',
          contentFr: "Pour désinstaller AVM, supprimez simplement le script d'installation de votre système :",
        },
        {
          type: 'code',
          contentEn: 'rm -rf ~/.avm',
        },
        {
          type: 'paragraph',
          contentEn: "Don't forget to delete the AVM alias from your rc file, such as ~/.bashrc or ~/.zshrc.<br/>The section to remove looks like this:",
          contentFr: "N'oubliez pas de supprimer l'alias AVM de votre fichier rc, tel que ~/.bashrc ou ~/.zshrc.<br/>La section à supprimer ressemble à ceci :",
        },
        {
          type: 'code',
          contentEn: `
# AVM - Auto Version Manager
avm() { source ~/.avm/bin/avm "$@"; }
avm run --managers all # Automatically call avm cli each time terminal opens
avm update --auto # Auto-update AVM daily
          `,
        },
      ],
    },
  ],
  authors: [memberService.getById(1)],
  contributors: [memberService.getById(1)],
};
