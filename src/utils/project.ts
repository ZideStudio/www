import { PROJECT_STATUS } from '@constants/projectStatus';
import type { Project } from '@models/project.model';

const getProjectDate = (project: Project) => project.releaseDate?.date ?? project.releaseDate?.planned ?? 0;

export const compareProjectsByNewest = (a: Project, b: Project) => Number(getProjectDate(b)) - Number(getProjectDate(a));

export const compareProjectsByStatus = (a: Project, b: Project) => PROJECT_STATUS.indexOf(a.status) - PROJECT_STATUS.indexOf(b.status);
