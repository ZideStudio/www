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

  const openLink = () => (project?.link?.github ? window.open(project.link.github, '_blank') : null);
  const goBack = () => navigate('/projects');

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
    <div className="fixed inset-0 z-20 mt-[3.25rem]">
      {/* FULLSCREEN MODAL */}
      <motion.div
        ref={cardRef}
        className="h-full w-full overflow-hidden md:rounded-2xl bg-[#1c1c1e] pointer-events-auto"
        layoutId={`card-container-${partial_project.slug}`}
      >
        {/* PROJECT HEADER */}
        <motion.div className="absolute h-72 w-full z-[1]" layoutId={`card-image-container-${project.id}`}>
          {/* Title/Desc Background */}
          <img src={project.image_link} alt="" className="w-full h-full object-cover object-center" />
          {/* Title */}
          <motion.div
            className="absolute flex flex-row items-center pr-16 justify-between top-[0.5rem] left-[0.5rem] md:top-[30px] md:left-[30px] w-full z-[1]"
            layoutId={`title-container-${project.id}`}
          >
            <div className="flex flex-col cursor-pointer" onClick={openLink} onKeyUp={openLink}>
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
            </div>
            <i className="pi pi-arrow-down-left-and-arrow-up-right-to-center cursor-pointer text-3xl text-white" onClick={goBack} onKeyUp={goBack} />
          </motion.div>

          {/* Description */}
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
                onClick={openLink}
                className="flex animate-pulse items-center space-x-2 bg-blue-500 hover:bg-blue-400 text-white px-3 py-1 rounded"
              >
                <span className="uppercase font-bold">Open on github</span>
                <i className="pi pi-external-link" style={{ fontSize: '1rem' }} />
              </button>
            </div>
          )}
        </motion.div>

        {/* PROJECT CONTENT */}
        <motion.div className="pt-80 px-[35px] pb-10 max-h-[calc(100vh-3rem)] md:max-h-[calc(100vh-3rem)] overflow-y-auto text-white space-y-3" animate>
          <div className="" dangerouslySetInnerHTML={{ __html: project.content }} />
          {project.link?.github && (
            <div className="flex items-center justify-center pt-5">
              <button type="button" onClick={openLink} className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-400 text-white px-3 py-1 rounded">
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
