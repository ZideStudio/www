'use client';

import { ProjectCard } from '@components/ProjectCard';
import { Project } from '@models/project.model';

type ProjectGridProps = {
  projects: Project[];
};

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
};
