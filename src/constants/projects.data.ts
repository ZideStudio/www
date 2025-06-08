import { type Project, ProjectStatus, ProjectTarget, ProjectTitleColor, ProjectType } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Auto Version Manager',
    slug: 'avm',
    title_color: ProjectTitleColor.WHITE,
    content: `<h1 class="text-2xl font-extrabold">Auto Version Manager CLI</h1>
        <p class="font-semibold">
        A CLI to manage your versions managers automatically
        Compatible with NVM, GVM, Rustup, and more!
        </p>
        <br /><br />
        The project analyzes the files in your directory as soon as you open your terminal, and automatically changes the version of your language via your version manager, according to the configuration file in the current directory.
        <br /><br />
        .RC and Dockerfile files are used to determine which version to use.
        <br /><br /><br />
        The project was, as planned, <strong>released in early 2025</strong><br/><i><em>It will continue to be updated regularly with new features and bug fixes.<em/>`,
    metaDescription: 'A CLI to manage your versions managers automatically. Compatible with NVM, GVM, Rustup, and more!',
    image_link: 'https://i.imgur.com/ilstnBg.jpeg',
    release_date: '2025-03-16',
    labels: ['Version Manager', 'CLI tool'],
    status: ProjectStatus.RELEASED,
    target: ProjectTarget.DEVELOPERS,
    type: ProjectType.CLI,
    isOpenSource: true,
    link: {
      github: 'https://github.com/ZideStudio/avm',
    },
  },
  {
    id: '2',
    title: 'CryptForMe',
    slug: 'cryptforme',
    title_color: ProjectTitleColor.WHITE,
    content: `
      <h1 class="text-2xl font-extrabold">Crypt For Me</h1>
      Online website for sharing information securely and anonymously.
      <br/><br/>
      The website will feature tools such as:
      <ul class="">
        <li>Secure pastebin (texts)</li>
        <li>Cryptography tool (pictures)</li>
        <li>Steganography (pictures)</li>
      </ul>
      <br/><br/>
	    The project is currently under development, and will be launched in public beta by the end of 2025!`,
    metaDescription: 'A website for sharing information securely and anonymously. Features secure pastebin, cryptography tool and steganography.',
    image_link: 'https://i.imgur.com/ouC8WB5.png',
    labels: ['Website', 'Secure pastebin', 'Cryptography'],
    status: ProjectStatus.IN_PROGRESS,
    target: ProjectTarget.EVERYONE,
    type: ProjectType.WEBSITE,
    isOpenSource: false,
  },
  {
    id: '3',
    title: 'Zequel',
    slug: 'zequel',
    title_color: ProjectTitleColor.WHITE,
    content: `<h1 class="text-2xl font-extrabold">Zequel</h1>
        <h2 class="text-lg font-bold">A new way to manage your SQL databases</h2>
        <br/><br/>
        Zequel is a SQL client software, with a lot of features with a simple and intuitive interface.
        <br/><br/>

        We won't say more for the moment. This project is still under development and will be launched in beta version by the end of 2026!`,
    metaDescription: 'SQL client software, with a lot of features and a simple intuitive interface.',
    image_link: 'https://i.imgur.com/ZMdgiRi.png',
    labels: ['SQL Client', 'Database Management', 'Software'],
    status: ProjectStatus.IN_PROGRESS,
    target: ProjectTarget.DEVELOPERS,
    type: ProjectType.APPLICATION,
    isOpenSource: true,
  },
  {
    id: '4',
    title: 'Project B',
    slug: 'project-b',
    title_color: ProjectTitleColor.WHITE,
    content: `<h2>That's.. a secret project?</h2>
	    That project will be revealed later, but I can't say more for now...
      <br/><br/>
	    This is one of the most ambitious project, and I can't give you more details for now.`,
    metaDescription: 'Secret project that will be revealed later...',
    image_link: 'https://cdn.pixabay.com/photo/2017/08/01/01/16/laptop-2562559_1280.jpg',
    labels: ['Software'],
    status: ProjectStatus.PLANNED,
    target: ProjectTarget.EVERYONE,
    type: ProjectType.APPLICATION,
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
  RELEASED: {
    label: 'Released',
    color: 'bg-green-500',
  },
};
