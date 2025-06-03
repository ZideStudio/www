import { motion } from 'framer-motion';
import type React from 'react';
import { Link } from 'react-router-dom';
import { projectStatusLabels } from '../../constants/projects.data';
import { type ProjectPartial, ProjectTarget, ProjectTitleColor } from '../../models/project.model';

type ProjectBlocProps = {
  project: ProjectPartial;
  open_card: (id: string) => void;
  index: number;
};

export const ProjectBloc: React.FC<ProjectBlocProps> = ({ project, open_card, index }) => {
  const card_color = project.title_color === ProjectTitleColor.WHITE ? 'text-white' : 'text-black';

  const isLargeCard = index % 4 === 0 || (index + 1) % 4 === 0;

  return (
    <li className={`relative p-[25px] h-[460px] w-[100%] ${isLargeCard ? 'md:w-[60%]' : 'md:w-[40%]'} flex-shrink-0`} onClick={() => open_card(project.id)}>
      <div className="w-full h-full relative block pointer-events-none">
        <motion.div style={{ boxShadow: 'inset 0px 0px 10px' }} className="relative rounded-[20px] bg-[#1c1c1e] w-full h-full overflow-hidden pointer-events-auto" layoutId={`card-container-${project.slug}`}>
          <div className="relative w-full h-full overflow-hidden">
            <img className="w-full h-full object-cover object-center" src={project.image_link} alt="" />
          </div>

          <motion.div className="absolute top-[15px] left-[15px] flex flex-col items-start">
            <div className="flex flex-row space-x-3 items-center">
              <h2 style={{ textShadow: '#aa0 1px 0 5px' }} className={`text-shadow-lg/30 font-extrabold text-lg m-2 ${card_color}`}>
                {project.title}
              </h2>

              <h2 style={{ textShadow: '#aa0 1px 0 10px' }} className={`italic text-sm font-bold text-shadow-lg/30 m-2 ${project.target === ProjectTarget.DEVELOPERS ? 'text-blue-500' : 'text-green-500'}`}>
                Made for {project.target === ProjectTarget.DEVELOPERS ? 'developers' : 'everyone'}
              </h2>
            </div>
            <ul className="flex space-x-3">
              {project.labels.map((label, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: no id
                <li key={index} className={`uppercase text-xs ${card_color} bg-black/75 rounded px-3 py-1 ${index > 1 ? 'hidden md:inline' : ''}`}>
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          {project.isOpenSource && (
            <motion.div className="absolute text-xs bottom-[15px] left-[15px] bg-black/50 text-gray-400 px-3 py-1 rounded" layoutId={`project-opensource-${project.id}`}>
              Open Source
            </motion.div>
          )}
          <motion.div className={`absolute font-bold uppercase text-xs bottom-[15px] right-[15px] text-white px-3 py-1 rounded ${projectStatusLabels[project.status].color}`} layoutId={`project-label-${project.id}`}>
            {projectStatusLabels[project.status].label}
          </motion.div>
        </motion.div>
      </div>
      <Link to={`/project/${project.slug}`} className="absolute inset-0" />
    </li>
  );
};
