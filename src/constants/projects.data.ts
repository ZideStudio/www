import { Project, ProjectStatus } from '@models/project.model';
import { autoVersionManagerProject } from './projects/autoversionmanager';
import { commitIssueParserProject } from './projects/commitissueparser';
import { cryptiPicsProject } from './projects/cryptipics';
import { wakfuThemeProject } from './projects/wakfutheme';
import { zequelProject } from './projects/zequel';

export const PROJECTS: Project[] = [autoVersionManagerProject, wakfuThemeProject, commitIssueParserProject, cryptiPicsProject, zequelProject];

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
