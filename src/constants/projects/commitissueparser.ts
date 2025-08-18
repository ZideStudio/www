import memberService from '@/services/member';
import type { Project } from '@models/project.model';
import { ProjectStatus, ProjectTarget, ProjectType } from '@models/project.model';

export const commitIssueParserProject: Project = {
  title: 'Commit Issue Parser',
  slug: 'commit-issue-parser',
  descriptionEn:
    'This Raycast extension allows you to parse your issue urls (such as Jira, GitHub and GitLab) to provide you with a commit name and description that you can use with Git!',
  descriptionFr:
    'Cette extension Raycast vous permet de parser vos URL de tickets (comme Jira, GitHub et GitLab) pour vous fournir un nom de commit et une description que vous pouvez utiliser avec Git!',
  releaseDate: {
    date: new Date('2025-08-05'),
    articlePublished: new Date('2025-08-09'),
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
    customInstallButton:
      '<a title="Install commit-issue-parser Raycast Extension" href="https://www.raycast.com/julesjuul/commit-issue-parser" target="_blank"><img src="https://www.raycast.com/julesjuul/commit-issue-parser/install_button@2x.png?v=1.1" height="64" alt="" style="height: 64px;"></a>',
  },
  pages: [
    {
      titleEn: 'About',
      titleFr: 'À propos',
      content: [
        {
          type: 'title',
          contentEn: 'What is it?',
          contentFr: "Qu'est-ce que c'est ?",
        },
        {
          type: 'paragraph',
          contentEn:
            'First of all, Raycast is a productivity app that primarily serves as an application launcher for macOS, but goes well beyond a simple improved Spotlight.',
          contentFr:
            'Avant toute chose, Raycast est une application de productivité qui sert principalement de lanceur d’applications, mais qui va bien au-delà d’un simple Spotlight amélioré.',
        },
        {
          type: 'paragraph',
          contentEn:
            'Commit Issue Parser is a Raycast extension that allows you to parse URLs from your tickets (like Jira, GitHub, and GitLab) to provide a commit name and description that you can use to format your Git commit names!',
          contentFr:
            "Quant à Commit Issue Parser est une extension Raycast qui vous permet d'analyser les urls de vos tickets (comme Jira, GitHub et GitLab) pour vous fournir un nom de commit et une description que vous pouvez utiliser pour formater vos noms de commit Git !",
        },
        {
          type: 'title',
          contentEn: 'How to use it?',
          contentFr: "Comment l'utiliser ?",
        },
        {
          type: 'paragraph',
          contentEn:
            'Install <a style="color: #06AEF7;" href="https://www.raycast.com" target="_blank">Raycast</a> and the <a style="color: #06AEF7;" href="https://www.raycast.com/julesjuul/commit-issue-parser" target="_blank">Commit Issue Parser</a> extension. You can then define a keyboard shortcut to launch the extension quickly.',
          contentFr:
            'Installer <a style="color: #06AEF7;" href="https://www.raycast.com" target="_blank">Raycast</a> et l\'extension <a style="color: #06AEF7;" href="https://www.raycast.com/julesjuul/commit-issue-parser" target="_blank">Commit Issue Parser</a>. Vous pouvez ensuite définir un racourci clavier pour lancer l\'extension rapidement.',
        },
        {
          type: 'paragraph',
          contentEn: `
            <ul class="list-disc list-inside text-left space-y-1">
              <li>Use your shortcut, or open Raycast and enter the command "Parse Issue Url"</li>
              <li>Enter your ticket URL</li>
              <li>(Optional) Enter your commit name and body using a comma as a separator</li>
            </ul>
          `,
          contentFr: `
          <ul class="list-disc list-inside text-left space-y-1">
              <li>Utiliser votre racourci, ou ouvrer Raycast et entrer la commande "Parse Issue Url"</li>
              <li>Entrer votre URL de ticket</li>
              <li>(Facultatif) Entrer le nom de votre commit et son body à l'aide d'une virgule comme séparateur</li>
          </ul>
          `,
        },
        {
          type: 'paragraph',
          contentEn:
            'Finally, search for the most appropriate commit type and press Enter to paste the commit name and description into your active application!',
          contentFr:
            'Et finalement, rechercher le type de commit le plus approprié et appuyer sur Entrée pour coller le nom de commit et la description dans votre application active !',
        },
        {
          type: 'image',
          contentEn: 'https://github.com/ZideStudio/CommitIssueParser/blob/main/metadata/commit-issue-parser-1.png?raw=true',
          altEn: 'Example of commit name selection',
          altFr: 'Exemple de nom de commit à sélectionner',
        },
        {
          type: 'paragraph',
          contentEn: 'The extension has been made compatible with the Angular commit naming convention, but also with the Gitmoji convention!',
          contentFr: "L'extension à été rendu compatible avec la convention de nommage des commits d'Angular, mais aussi avec celle de Gitmoji !",
        },
        {
          type: 'image',
          contentEn: 'https://github.com/ZideStudio/CommitIssueParser/blob/main/metadata/commit-issue-parser-2.png?raw=true',
        },
        {
          type: 'paragraph',
          contentEn:
            'If you do not have a ticket URL or a body, or if you want to use your own scope, the extension adapts correctly to your input because all parameters are optional.',
          contentFr:
            "De plus, si vous ne possédez pas d'url de ticket, ou que vous souhaitez mettre votre propre scope, l'extension s'adapte correctement à votre entrée car tout les paramètres sont optionnels.",
        },
        {
          type: 'image',
          contentEn: 'https://github.com/ZideStudio/CommitIssueParser/blob/main/metadata/commit-issue-parser-3.png?raw=true',
        },
        {
          type: 'paragraph',
          contentEn: 'I hope this extension will please many people, and that you will be able to use it to improve your development workflow.',
          contentFr: "J'espère que cette extension saura en ravir plus d'un, et que vous pourrez en profiter pour améliorer votre workflow de développement.",
        },
        {
          type: 'paragraph',
          contentEn: 'Do not hesitate to create an issue on the GitHub repository to share your suggestions or problems encountered.',
          contentFr: "N'hésitez pas à créer une issue sur le dépôt GitHub pour nous faire part de vos suggestions ou de problèmes rencontrés.",
        },
      ],
    },
    {
      titleEn: 'Settings',
      titleFr: 'Paramétrage',
      content: [
        {
          type: 'paragraph',
          contentEn: 'The extension offers many settings to adapt to your use of the tool and improve your experience. Here they are !',
          contentFr: "L'extension propose de nombreux paramètres pour s'adapter à votre utilisation de l'outil et améliorer votre expérience. Les voici !",
        },
        {
          type: 'image',
          contentEn: 'https://i.imgur.com/VYLwBgx.png',
        },
        {
          type: 'title',
          contentEn: 'Content Format',
          contentFr: 'Format du contenu',
        },
        {
          type: 'paragraph',
          contentEn:
            'In the extension settings, you can configure the "Content Format" parameter to choose the format of the content you want to use.<br/>Three formats are available:',
          contentFr:
            'Dans les paramètres de l\'extension, vous pouvez configurer le paramètre "Content Format" pour choisir le format du contenu que vous souhaitez utiliser.<br/>Trois formats sont disponibles :',
        },
        {
          type: 'paragraph',
          contentEn: `
          <ul class="list-disc list-inside text-left space-y-1">
            <li>Text: paste the selected text content</li>
            <li>Lazygit: paste the selected text content in a format compatible with Lazygit, which allows you to automatically fill in the body</li>
            <li>Git Command: paste the selected text content in a format compatible with the CLI Git, which allows you to paste the Git Commit command notably with the body</li>
          </ul>
          `,
          contentFr: `
          <ul class="list-disc list-inside text-left space-y-1">
            <li>Text: coller le contenu texte sélectionné</li>
            <li>Lazygit: coller le contenu texte sélectionné dans un format compatible avec Lazygit, ce qui permet de remplir automatiquement le body</li>
            <li>Git Command: coller le contenu texte sélectionné dans un format compatible avec le CLI Git, ce qui permet de coller la commande Git Commit notamment avec le body</li>
          </ul>
          `,
        },
        {
          type: 'image',
          contentEn: 'https://i.imgur.com/xPY5FLF.png',
          altEn: 'Result of Lazygit mode',
          altFr: 'Résultat du mode Lazygit',
        },
        {
          type: 'image',
          contentEn: 'https://i.imgur.com/YXyTisz.png',
          altEn: 'Result of Git Command mode',
          altFr: 'Résultat du mode Git Command',
        },
        {
          type: 'title',
          contentEn: 'Type Mode',
          contentFr: 'Mode de type',
        },
        {
          type: 'paragraph',
          contentEn: 'The type mode (keyword present at the beginning of the commit) can be configured in two ways:',
          contentFr: 'Le mode de type (mot clé présent au début du commit) peut être configuré de deux manières :',
        },
        {
          type: 'paragraph',
          contentEn: `
          <ul class="list-disc list-inside text-left space-y-1">
            <li>Text: use Angular Conventional Commit for keywords feat, fix, chore etc...</li>
            <li>Gitmoji: use Gitmoji emojis for keywords</li>
          </ul>
          `,
          contentFr: `
          <ul class="list-disc list-inside text-left space-y-1">
            <li>Text : utilise la convention Angular Conventional Commit pour les mots clés feat, fix, chore etc...</li>
            <li>Gitmoji : utilise les emojis de Gitmoji pour les mots clés</li>
          </ul>
          `,
        },
        {
          type: 'image',
          contentEn: 'https://github.com/ZideStudio/CommitIssueParser/blob/main/metadata/commit-issue-parser-1.png?raw=true',
          altEn: 'Text Type Mode',
          altFr: 'Mode de type Text',
        },
        {
          type: 'image',
          contentEn: 'https://github.com/ZideStudio/CommitIssueParser/blob/main/metadata/commit-issue-parser-2.png?raw=true',
          altEn: 'Gitmoji Type Mode',
          altFr: 'Mode de type Gitmoji',
        },
        {
          type: 'title',
          contentEn: 'Primary Action',
          contentFr: 'Action Principale',
        },
        {
          type: 'paragraph',
          contentEn:
            'The primary action is the action that is performed when you select a commit name in the list. You can therefore change the default parameter with one of those proposed in the menu below:',
          contentFr:
            "L'action principale est l'action qui est effectué lorsque vous sélectionnez un nom de commit dans la liste. Vous pouvez donc changer le paramètre par défaut par un de ceux que propose le menu ci-dessous :",
        },
        {
          type: 'image',
          contentEn: 'https://github.com/ZideStudio/CommitIssueParser/blob/main/metadata/commit-issue-parser-3.png?raw=true',
        },
      ],
    },
  ],
  authors: [memberService.getById(1)],
  contributors: [memberService.getById(1)],
};
