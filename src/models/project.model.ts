export type Project = {
  id: string;
  title: string;
  slug: string;
  title_color: ProjectTitleColor;
  content: string;
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
  RELEASED = 'RELEASED',
}

export enum ProjectTarget {
  DEVELOPERS = 'DEVELOPERS',
  EVERYONE = 'EVERYONE',
}
