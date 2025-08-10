import type React from 'react';

export type Project = {
  title: string;
  slug: string;
  ContentComponent: React.FC;
  metaDescription: string;
  image_link: string;
  labels: string[];
  features: string[];
  release_date?: {
    date?: Date;
    planned?: Date;
  };
  status: ProjectStatus;
  target: ProjectTarget;
  type: ProjectType;
  isOpenSource: boolean;
  link?: {
    github?: string;
    website?: string;
  };
};

export type ProjectPartial = Omit<Project, 'content' | 'releaseDate' | 'link'>;

export enum ProjectType {
  WEBSITE = 'WEBSITE',
  SOFTWARE = 'SOFTWARE',
  CLI = 'CLI_TOOL',
  EXTENSION = 'EXTENSION',
}

export enum ProjectStatus {
  RELEASED = 'RELEASED',
  IN_PROGRESS = 'IN_PROGRESS',
  PAUSED = 'PAUSED',
  PLANNED = 'PLANNED',
}

export enum ProjectTarget {
  EVERYONE = 'EVERYONE',
  DEVELOPERS = 'DEVELOPERS',
}
