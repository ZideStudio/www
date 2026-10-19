'use client';

import { PROJECTS } from '@constants/projects.data';
import { compareProjectsByNewest, compareProjectsByStatus } from '@utils/project';

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
  const { name, target, status, type } = filters;
  if (name) {
    projects = projects.filter((project) => project.title.toLowerCase().includes(name.toLowerCase()));
  }
  if (target) {
    projects = projects.filter((project) => project.target.toLowerCase().includes(target.toLowerCase()));
  }
  if (status) {
    projects = projects.filter((project) => project.status.toLowerCase().includes(status.toLowerCase()));
  }
  if (type) {
    projects = projects.filter((project) => project.type.toLowerCase().includes(type.toLowerCase()));
  }

  // sorting
  if (filters.sort === 'oldest') {
    projects = projects.sort((a, b) => compareProjectsByNewest(b, a));
  } else if (filters.sort === 'alphabetical') {
    projects = projects.sort((a, b) => a.title.localeCompare(b.title));
  } else if (filters.sort === 'reverseAlphabetical') {
    projects = projects.sort((a, b) => b.title.localeCompare(a.title));
  } else {
    projects = projects.sort(compareProjectsByNewest);
  }

  if (!filters.status) {
    projects = projects.sort(compareProjectsByStatus);
  }

  return {
    projects,
  };
};
