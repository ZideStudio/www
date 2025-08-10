import { Project, ProjectStatus, ProjectTarget, ProjectType } from '@models/project.model';

export const commitIssueParserProject: Project = {
  title: 'Commit Issue Parser',
  slug: 'commit-issue-parser',
  descriptionEn:
    'This Raycast extension allows you to parse your issue urls (such as Jira, GitHub and GitLab) to provide you with a commit name and description that you can use with Git!',
  descriptionFr:
    'Cette extension Raycast vous permet de parser vos URL de tickets (comme Jira, GitHub et GitLab) pour vous fournir un nom de commit et une description que vous pouvez utiliser avec Git!',
  imageLink: 'https://i.imgur.com/0DF5oAf.png',
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
  },
  customInstallButton:
    '<a title="Install commit-issue-parser Raycast Extension" href="https://www.raycast.com/julesjuul/commit-issue-parser" target="_blank"><img src="https://www.raycast.com/julesjuul/commit-issue-parser/install_button@2x.png?v=1.1" height="64" alt="" style="height: 64px;"></a>',
  pages: [
    {
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
            'And Commit Issue Parser is a Raycast extension that allows you to parse URLs from your tickets (like Jira, GitHub, and GitLab) to provide a commit name and description that you can use to format your Git commit names!',
          contentFr:
            "Et Commit Issue Parser est une extension Raycast vous permet d'analyser les urls de vos tickets (comme Jira, GitHub et GitLab) pour vous fournir un nom de commit et une description que vous pouvez utiliser pour formater vos noms de commit Git !",
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
              <li>Press Enter to paste the commit name and description into your active application</li>
            </ul>
          `,
          contentFr: `
          <ul class="list-disc list-inside text-left space-y-1">
              <li>Utiliser votre racourci, ou ouvrer Raycast et entrer la commande "Parse Issue Url"</li>
              <li>Entrer votre URL de ticket</li>
              <li>(Facultatif) Entrer le nom de votre commit et son body à l'aide d'une virgule comme séparateur</li>
              <li>Appuyer sur Entrée pour coller le nom de commit et la description dans votre application active</li>
          </ul>
          `,
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
          contentEn: 'If you do not have a ticket URL or a body, the extension adapts correctly to your input because all parameters are optional.',
          contentFr:
            "De plus, si vous ne possédez pas d'url de ticket, ou de body, l'extension s'adapte correctement à votre entrée car tout les paramètres sont optionnels.",
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
  ],
};
