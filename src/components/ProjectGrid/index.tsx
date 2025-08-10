'use client';

import { ProjectCard } from '@components/ProjectCard';
import type { Project } from '@models/project.model';

type ProjectGridProps = {
  projects: Project[];
};

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <article className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </article>
  );
};
