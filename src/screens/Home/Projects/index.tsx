import type React from 'react';
import { useEffect } from 'react';
import BackgroundGrid from '../../../components/BackgroundGrid';
import { ProjectBloc } from '../../../components/ProjectBloc';
import type { ProjectPartial } from '../../../models/project.model';
import projectsService from '../../../services/projects.service';

type ProjectsProps = {
  projects: ProjectPartial[] | undefined;
  setProjects: React.Dispatch<React.SetStateAction<ProjectPartial[] | undefined>>;
  setProjectLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Projects = ({ projects, setProjects, setProjectLoading }: ProjectsProps) => {
  const fetchProjects = async () => {
    const data = projectsService.getProjects();
    setProjects(data);
    setProjectLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  });

  return (
    <div className="min-h-screen w-screen relative flex flex-col">
      <h1 className="sr-only">Our projects</h1>
      <BackgroundGrid interactible={false} />

      <div className="pt-20 pb-10">
        <h2 className="text-gray-400 px-5 md:px-0">
          At Zide, we build digital tools that are efficient, intuitive and highly customizable,
          <br />
          offering simplicity of use with gains in productivity.
        </h2>

        <ul className="flex flex-wrap justify-center pt-5 px-3 md:px-6 gap-y-6">
          {projects?.map((project, index) => (
            <ProjectBloc key={project.id} project={project} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};
