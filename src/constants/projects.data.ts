import type { Project, ProjectStatus } from '@models/project.model';
import { autoVersionManagerProject } from './projects/autoversionmanager';
import { commitIssueParserProject } from './projects/commitissueparser';
import { cryptiPicsProject } from './projects/cryptipics';
import { slotFinderProject } from './projects/slotfinder';
import { wakfuThemeProject } from './projects/wakfutheme';
import { zequelProject } from './projects/zequel';
import { zideFrProject } from './projects/zidefr';

export const PROJECTS: Project[] = [
  autoVersionManagerProject,
  wakfuThemeProject,
  commitIssueParserProject,
  cryptiPicsProject,
  zequelProject,
  slotFinderProject,
  zideFrProject,
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
  DEPRECATED: {
    label: 'Deprecated',
    color: 'bg-black/50',
  },
  RELEASED: {
    label: '🎉 Released',
    color: 'bg-green-500',
  },
};
