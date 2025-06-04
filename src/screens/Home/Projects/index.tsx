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

export const Projects: React.FC<ProjectsProps> = ({ projects, setProjects, setProjectLoading }) => {
  const fetchProjects = async () => {
    const data = await projectsService.getProjects();
    setProjects(data);
    setProjectLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  });

  return (
    <div className="min-h-screen w-screen relative flex flex-col">
      <BackgroundGrid interactible={false} />

      <div className="pt-20 pb-10">
        <p className="text-gray-400 px-5 md:px-0">
          Zide is working on several projects, most of which are open source,
          <br />
          with the aim of offering innovative and useful tools to our users
        </p>

        <ul className="flex flex-wrap justify-center pt-5 px-3 md:px-6 gap-y-6">
          {projects?.map((project, index) => (
            <ProjectBloc key={project.id} project={project} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};
