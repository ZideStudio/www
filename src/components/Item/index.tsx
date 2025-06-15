import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectStatusLabels } from '../../constants/projects.data';
import { type ProjectPartial, ProjectTarget, ProjectTitleColor } from '../../models/project.model';
import projectsService from '../../services/projects.service';

type ItemProps = {
  partial_project: ProjectPartial;
};

export const Item = ({ partial_project }: ItemProps) => {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);

  const project = projectsService.getProjectByLabel(partial_project.slug);
  const card_color = project && project.title_color === ProjectTitleColor.WHITE ? 'text-white' : 'text-black';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        navigate('/projects');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!project) return <></>;

  return (
    <div className="fixed inset-0 z-20 mt-12 md:mt-16">
      <motion.div
        ref={cardRef}
        className="relative mx-auto h-full md:h-auto w-full max-w-[700px] overflow-hidden md:rounded-2xl bg-[#1c1c1e] pointer-events-auto"
        layoutId={`card-container-${partial_project.slug}`}
      >
        <motion.div className="absolute h-[420px] w-full z-[1]" layoutId={`card-image-container-${project.id}`}>
          <img src={project.image_link} alt="" className="w-full h-full object-cover object-center" />
          <div className="flex flex-col justify-center absolute bottom-[15px] left-[15px] space-y-2">
            {project.isOpenSource && (
              <motion.div className="text-xs bg-black/50 text-gray-400 px-3 py-1 rounded" layoutId={`project-opensource-${project.id}`}>
                Open Source
              </motion.div>
            )}
            <motion.div
              className={`uppercase font-bold text-xs text-white px-3 py-1 rounded ${projectStatusLabels[project.status].color}`}
              layoutId={`project-label-${project.id}`}
            >
              {projectStatusLabels[project.status].label}
            </motion.div>
          </div>
          {project.link?.github && (
            <div className="flex flex-row absolute bottom-[15px] right-[15px] space-x-3 items-center">
              <button
                type="button"
                onClick={() => window.open(project.link?.github, '_blank')}
                className="flex animate-pulse items-center space-x-2 bg-blue-500 hover:bg-blue-400 text-white px-3 py-1 rounded"
              >
                <span className="uppercase font-bold">Open on github</span>
                <i className="pi pi-external-link" style={{ fontSize: '1rem' }} />
              </button>
            </div>
          )}
        </motion.div>

        <motion.div className="absolute top-4 right-4 z-[1]" onClick={() => navigate('/projects')}>
          <i className="pi pi-arrow-down-left-and-arrow-up-right-to-center text-3xl md:text-2xl text-white" />
        </motion.div>
        <motion.div className="absolute top-[0.5rem] left-[0.5rem] md:top-[30px] md:left-[30px] z-[1]" layoutId={`title-container-${project.id}`}>
          <div className="flex flex-col md:flex-row md:space-x-3 items-start md:items-center">
            <h4 style={{ textShadow: '#aa0 1px 0 5px' }} className={`font-extrabold text-lg md:m-2 ${card_color}`}>
              {project.title}
            </h4>

            <p
              style={{ textShadow: '#aa0 1px 0 10px' }}
              className={`italic text-sm font-bold text-shadow-lg/30 md:m-2 ${project.target === ProjectTarget.DEVELOPERS ? 'text-blue-500' : 'text-green-500'}`}
            >
              Made for {project.target === ProjectTarget.DEVELOPERS ? 'developers' : 'everyone'}
            </p>
          </div>
          <ul className="flex mt-2 md:mt-0 space-x-3">
            {project.labels.map((label, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: no id
              <li key={index} className={`uppercase text-xs ${card_color} bg-black/75 rounded px-3 py-1 ${index > 1 ? 'hidden md:inline' : ''}`}>
                {label}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="pt-[460px] px-[35px] pb-[35px] max-w-[700px] md:w-[90vw] max-h-[calc(100vh-3rem)] md:max-h-[calc(100vh-5rem)] overflow-y-auto text-white space-y-3"
          animate
        >
          <div className="" dangerouslySetInnerHTML={{ __html: project.content }} />
          {project.link?.github && (
            <div className="flex items-center justify-center pt-5">
              <button
                type="button"
                onClick={() => window.open(project.link?.github, '_blank')}
                className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-400 text-white px-3 py-1 rounded"
              >
                <span className="uppercase font-bold">Open on github</span>
                <i className="pi pi-external-link" style={{ fontSize: '1rem' }} />
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
