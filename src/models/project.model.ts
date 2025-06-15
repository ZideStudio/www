import type React from 'react';

export type Project = {
  id: string;
  title: string;
  slug: string;
  title_color: ProjectTitleColor;
  ContentComponent: React.FC;
  metaDescription: string;
  image_link: string;
  labels: string[];
  release_date?: string;
  release_date_planned?: string;
  status: ProjectStatus;
  target: ProjectTarget;
  type: ProjectType;
  isOpenSource: boolean;
  link?: {
    github?: string;
    website?: string;
  };
};

export enum ProjectTitleColor {
  WHITE = 'WHITE',
  BLACK = 'BLACK',
}

export type ProjectPartial = Omit<Project, 'content' | 'releaseDate' | 'link'>;

export enum ProjectType {
  WEBSITE = 'WEBSITE',
  APPLICATION = 'APPLICATION',
  CLI = 'CLI',
}

export enum ProjectStatus {
  PLANNED = 'PLANNED',
  IN_PROGRESS = 'IN_PROGRESS',
  PAUSED = 'PAUSED',
  RELEASED = 'RELEASED',
}

export enum ProjectTarget {
  DEVELOPERS = 'DEVELOPERS',
  EVERYONE = 'EVERYONE',
}
