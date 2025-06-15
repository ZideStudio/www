import { PROJECTS } from '../constants/projects/projects.data';
import type { Project, ProjectPartial } from '../models/project.model';

class ProjectsService {
  getProjects(): ProjectPartial[] {
    return PROJECTS as ProjectPartial[];
  }

  getProjectByLabel(label: string): Project | undefined {
    return PROJECTS.find((project) => project.slug === label);
  }
}

const projectsService = new ProjectsService();
export default projectsService;
