import { PROJECTS } from '@constants/projects.data';
import type { Project } from '@models/project.model';
import { compareProjectsByNewest, compareProjectsByStatus } from '@utils/project';

class ProjectService {
  /** Projects the member takes part in, ordered like the projects page (newest first, then by status). */
  getByMemberId(memberId: number): Project[] {
    return PROJECTS.filter((project) => [...project.authors, ...project.contributors].some((member) => member.id === memberId))
      .sort(compareProjectsByNewest)
      .sort(compareProjectsByStatus);
  }
}

const projectService = new ProjectService();

export default projectService;
