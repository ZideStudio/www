export type Project = {
  title: string;
  slug: string;
  pages: ProjectPage[];
  descriptionEn: string;
  descriptionFr: string;
  imageLink: string;
  labels: string[];
  featuresEn: string[];
  featuresFr: string[];
  releaseDate: {
    date?: Date;
    planned?: Date;
    articlePublished: Date;
    articleUpdated?: Date;
  };
  status: ProjectStatus;
  target: ProjectTarget;
  type: ProjectType;
  isOpenSource: boolean;
  link?: {
    github?: string;
    website?: string;
  };
  customInstallButton?: string;
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

export type ProjectPage = {
  titleEn?: string;
  titleFr?: string;
  content: PageContent[];
};

export type PageContent = {
  type: 'paragraph' | 'title' | 'image' | 'code';
  contentEn: string;
  contentFr?: string;
  altEn?: string;
  altFr?: string;
  codeLanguage?: string;
};
