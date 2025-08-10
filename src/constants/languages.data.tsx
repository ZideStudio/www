import { Language } from '@models/language.model';
import {
  DockerOriginal,
  ElectronOriginal,
  GoOriginal,
  JavascriptOriginal,
  LinuxOriginal,
  NextjsOriginal,
  PortainerOriginal,
  PostgresqlOriginal,
  ReactOriginal,
  RedisOriginal,
  RustOriginal,
  TailwindcssOriginal,
  TauriOriginal,
  TypescriptOriginal,
} from 'devicons-react';

export const LANGUAGES: Language[] = [
  {
    name: 'React',
    logo: <ReactOriginal />,
    url: 'https://react.dev',
  },
  {
    name: 'Next.js',
    logo: <NextjsOriginal />,
    url: 'https://nextjs.org',
  },
  {
    name: 'TypeScript',
    logo: <TypescriptOriginal />,
    url: 'https://www.typescriptlang.org',
  },
  {
    name: 'JavaScript',
    logo: <JavascriptOriginal />,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'Go',
    logo: <GoOriginal />,
    url: 'https://go.dev',
  },
  {
    name: 'Rust',
    logo: <RustOriginal />,
    url: 'https://www.rust-lang.org',
  },
  {
    name: 'Tauri',
    logo: <TauriOriginal />,
    url: 'https://v2.tauri.app',
  },
  {
    name: 'Electron',
    logo: <ElectronOriginal />,
    url: 'https://www.electronjs.org',
  },
  {
    name: 'Tailwind CSS',
    logo: <TailwindcssOriginal />,
    url: 'https://tailwindcss.com',
  },
  {
    name: 'PostgreSQL',
    logo: <PostgresqlOriginal />,
    url: 'https://www.postgresql.org',
  },
  {
    name: 'Redis',
    logo: <RedisOriginal />,
    url: 'https://redis.io',
  },
  {
    name: 'Linux',
    logo: <LinuxOriginal />,
    url: 'https://www.linux.org',
  },
  {
    name: 'Docker',
    logo: <DockerOriginal />,
    url: 'https://www.docker.com',
  },
  {
    name: 'Portainer',
    logo: <PortainerOriginal />,
    url: 'https://www.portainer.io',
  },
];
