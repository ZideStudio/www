import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projectStatusLabels } from '../../constants/projects.data';
import { type ProjectPartial, ProjectStatus, ProjectTarget, ProjectTitleColor } from '../../models/project.model';

type ProjectBlocProps = {
  project: ProjectPartial;
  index: number;
};

export const ProjectBloc = ({ project, index }: ProjectBlocProps) => {
  const navigate = useNavigate();

  const openProject = () => {
    sessionStorage.setItem('disableScroll', 'true');
    navigate(`/project/${project.slug}`);
  };

  const cardColor = project.title_color === ProjectTitleColor.WHITE ? 'text-white' : 'text-black';
  const isLargeCard = index % 4 === 0 || (index + 1) % 4 === 0;
  const isReleased = project.status === ProjectStatus.RELEASED;

  return (
    <li className={`relative p-6 h-[460px] w-[100%] ${isLargeCard ? 'md:w-[60%]' : 'md:w-[40%]'} flex-shrink-0`}>
      <div onClick={openProject} onKeyUp={openProject} className="w-full h-full relative cursor-pointer block pointer-events-none">
        <motion.div
          style={{ boxShadow: 'inset 0px 0px 10px' }}
          className="relative rounded-xl bg-[#1c1c1e] w-full h-full overflow-hidden pointer-events-auto"
          layoutId={`card-container-${project.slug}`}
        >
          <div className="relative w-full h-full overflow-hidden">
            <img className="w-full h-full object-cover object-center" src={project.image_link} alt="" />
          </div>

          <motion.div className="absolute w-full top-4 left-4 flex flex-col items-start">
            <div className="flex flex-row w-full pr-8 justify-between items-center">
              <div className="flex flex-row space-x-3 items-center">
                <h3 style={{ textShadow: '#aa0 1px 0 5px' }} className={`text-shadow-lg/30 font-extrabold text-lg m-2 ${cardColor}`}>
                  {project.title}
                </h3>

                <p
                  style={{ textShadow: '#aa0 1px 0 10px' }}
                  className={`italic text-sm font-bold text-shadow-lg/30 m-2 ${project.target === ProjectTarget.DEVELOPERS ? 'text-blue-500' : 'text-green-500'}`}
                >
                  Made for {project.target === ProjectTarget.DEVELOPERS ? 'developers' : 'everyone'}
                </p>
              </div>
              <i className="pi pi-arrow-up-right-and-arrow-down-left-from-center text-xl mr-2 text-white" />
            </div>
            <ul className="flex space-x-3">
              {project.labels.map((label, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: no id
                <li key={index} className={`uppercase text-xs ${cardColor} bg-black/75 rounded px-3 py-1 ${index > 1 ? 'hidden md:inline' : ''}`}>
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          {project.isOpenSource && (
            <motion.div
              className={`absolute text-xs ${isReleased ? 'bottom-[2rem]' : 'bottom-[1rem]'} left-[1rem] bg-black/50 text-gray-400 px-3 py-1 rounded`}
              layoutId={`project-opensource-${project.id}`}
            >
              Open Source
            </motion.div>
          )}
          {!isReleased && (
            <motion.div
              className={`absolute font-bold uppercase text-xs bottom-[1rem] right-[1rem] text-white px-3 py-1 rounded ${projectStatusLabels[project.status].color}`}
              layoutId={`project-label-${project.id}`}
            >
              {projectStatusLabels[project.status].label}
            </motion.div>
          )}
          {isReleased && (
            <div className="absolute bottom-0 z-10 px-14 py-1 w-full bg-green-500 text-white text-xs font-bold uppercase shadow-lg">
              {projectStatusLabels[project.status].label}
            </div>
          )}
        </motion.div>
      </div>
    </li>
  );
};
