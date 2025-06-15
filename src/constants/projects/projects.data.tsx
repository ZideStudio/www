import { type Project, ProjectStatus, ProjectTarget, ProjectTitleColor, ProjectType } from '../../models/project.model';
import { Avm } from './content/Avm';
import { CryptForMe } from './content/CryptForMe';
import { ProjectB } from './content/ProjectB';
import { Zequel } from './content/Zequel';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Auto Version Manager',
    slug: 'avm',
    title_color: ProjectTitleColor.WHITE,
    ContentComponent: Avm,
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
    ContentComponent: CryptForMe,
    metaDescription: 'A website for sharing information securely and anonymously. Features secure pastebin, cryptography tool and steganography.',
    image_link: 'https://i.imgur.com/ouC8WB5.png',
    labels: ['Website', 'Secure pastebin', 'Cryptography'],
    status: ProjectStatus.IN_PROGRESS,
    target: ProjectTarget.EVERYONE,
    type: ProjectType.WEBSITE,
    isOpenSource: false,
    link: {
      github: 'https://github.com/ZideStudio/CryptForMe',
    },
  },
  {
    id: '3',
    title: 'Zequel',
    slug: 'zequel',
    title_color: ProjectTitleColor.WHITE,
    ContentComponent: Zequel,
    metaDescription: 'SQL client software, with a lot of features and a simple intuitive interface.',
    image_link: 'https://i.imgur.com/ZMdgiRi.png',
    labels: ['SQL Client', 'Database Management', 'Software'],
    status: ProjectStatus.PAUSED,
    target: ProjectTarget.DEVELOPERS,
    type: ProjectType.APPLICATION,
    isOpenSource: true,
  },
  {
    id: '4',
    title: 'Project B',
    slug: 'project-b',
    title_color: ProjectTitleColor.WHITE,
    ContentComponent: ProjectB,
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
  PAUSED: {
    label: 'Paused',
    color: 'bg-black/50',
  },
  RELEASED: {
    label: '🎉 Released',
    color: 'bg-green-500',
  },
};
