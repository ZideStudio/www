'use client';

import { PROJECTS } from '@constants/projects.data';
import { PROJECT_STATUS } from '@constants/projectStatus';

export type ProjectFilter = {
  name?: string;
  target?: string;
  status?: string;
  type?: string;
  sort?: string;
};

type UseProjectsProps = {
  filters: ProjectFilter;
};

export const useProjects = ({ filters }: UseProjectsProps) => {
  let projects = PROJECTS;

  // filtering
  if (filters.name) {
    projects = projects.filter((project) => project.title.toLowerCase().includes(filters.name!.toLowerCase()));
  }
  if (filters.target) {
    projects = projects.filter((project) => project.target.toLowerCase().includes(filters.target!.toLowerCase()));
  }
  if (filters.status) {
    projects = projects.filter((project) => project.status.toLowerCase().includes(filters.status!.toLowerCase()));
  }
  if (filters.type) {
    projects = projects.filter((project) => project.type.toLowerCase().includes(filters.type!.toLowerCase()));
  }

  // sorting
  if (filters.sort === 'oldest') {
    projects = projects.sort((a, b) => {
      const aDate = a.releaseDate?.date ?? a.releaseDate?.planned ?? 0;
      const bDate = b.releaseDate?.date ?? b.releaseDate?.planned ?? 0;
      return Number(aDate) - Number(bDate);
    });
  } else if (filters.sort === 'alphabetical') {
    projects = projects.sort((a, b) => a.title.localeCompare(b.title));
  } else if (filters.sort === 'reverseAlphabetical') {
    projects = projects.sort((a, b) => b.title.localeCompare(a.title));
  } else {
    projects = projects.sort((a, b) => {
      const aDate = a.releaseDate?.date ?? a.releaseDate?.planned ?? 0;
      const bDate = b.releaseDate?.date ?? b.releaseDate?.planned ?? 0;
      return Number(bDate) - Number(aDate);
    });
  }

  if (!filters.status) {
    projects = projects.sort((a, b) => {
      const aStatusIndex = PROJECT_STATUS.indexOf(a.status);
      const bStatusIndex = PROJECT_STATUS.indexOf(b.status);

      return aStatusIndex - bStatusIndex;
    });
  }

  return {
    projects,
  };
};
