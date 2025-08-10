import { Project, ProjectStatus, ProjectTarget, ProjectType } from '@models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'Auto Version Manager',
    slug: 'avm',
    // ContentComponent: Avm,
    ContentComponent: () => <></>,
    metaDescription: 'A CLI to manage your versions managers automatically. Compatible with NVM, GVM, Rustup, and more!',
    image_link: 'https://i.imgur.com/ilstnBg.jpeg',
    release_date: {
      date: new Date('2025-03-16'),
    },
    labels: ['CLI tool', 'Version Manager', 'Productivity'],
    features: ['Automatic version manager management', 'Bash and Zsh compatibility', 'Easy setup'],
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
    // ContentComponent: Avm,
    ContentComponent: () => <></>,
    metaDescription: 'A dark and clear theme that allows you to customise your IDE, compatible with Zed.',
    image_link: 'https://i.imgur.com/hvgz8Jr.png',
    release_date: {
      date: new Date('2025-01-16'),
    },
    labels: ['Theme', 'Zed IDE'],
    features: ['Dark and clear theme', 'Compatible with Zed', 'Customisable'],
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
    // ContentComponent: Avm,
    ContentComponent: () => <></>,
    metaDescription:
      'This Raycast extension allows you to parse your issue urls (such as Jira, GitHub and GitLab) to provide you with a commit name and description that you can use with Git!',
    image_link: 'https://github.com/ZideStudio/CommitIssueParser/blob/main/metadata/commit-issue-parser-2.png?raw=true',
    release_date: {
      date: new Date('2025-08-05'),
    },
    labels: ['Issue Parser', 'Raycast Extension', 'Productivity'],
    features: ['Parse issue urls', 'GitHub, GitLab and Jira compatibility', 'Generate commit name and description'],
    status: ProjectStatus.RELEASED,
    target: ProjectTarget.DEVELOPERS,
    type: ProjectType.EXTENSION,
    isOpenSource: true,
    link: {
      github: 'https://github.com/ZideStudio/CommitIssueParser',
    },
  },
  {
    title: 'CryptForMe',
    slug: 'cryptforme',
    // ContentComponent: CryptForMe,
    ContentComponent: () => <></>,
    metaDescription: 'A website for sharing information securely and anonymously. Features secure pastebin, cryptography tool and steganography.',
    image_link: 'https://i.imgur.com/ouC8WB5.png',
    release_date: {
      planned: new Date('2025-12-01'),
    },
    labels: ['Website', 'Cryptography', 'Secure pastebin'],
    features: ['Secure pastebin', 'Cryptography tool on pictures', 'Steganography tool on pictures'],
    status: ProjectStatus.IN_PROGRESS,
    target: ProjectTarget.EVERYONE,
    type: ProjectType.WEBSITE,
    isOpenSource: false,
    link: {
      github: 'https://github.com/ZideStudio/CryptForMe',
    },
  },
  {
    title: 'Zequel',
    slug: 'zequel',
    // ContentComponent: Zequel,
    ContentComponent: () => <></>,
    metaDescription: 'SQL client software, with a lot of features and a simple intuitive interface.',
    image_link: 'https://i.imgur.com/ZMdgiRi.png',
    release_date: {
      planned: new Date('2027-01-01'),
    },
    labels: ['SQL Client', 'Database Management', 'Software'],
    features: ['Free software', 'Database management', 'Folder organization'],
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
