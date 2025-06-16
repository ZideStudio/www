import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectStatusLabels } from '../../constants/projects/projects.data';
import { type ProjectPartial, ProjectTarget, ProjectTitleColor } from '../../models/project.model';
import projectsService from '../../services/projects.service';

type ItemProps = {
  partial_project: ProjectPartial;
};

export const Item = ({ partial_project }: ItemProps) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const cardRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const handleScroll = () => {
      if (!scrollContainer) return;
      setScrolled(scrollContainer.scrollTop > 50);
    };
    scrollContainer?.addEventListener('scroll', handleScroll);
    return () => scrollContainer?.removeEventListener('scroll', handleScroll);
  }, []);

  const openLinkProps = {
    onClick: openLink,
    onKeyUp: openLink,
  };

  const goBackProps = {
    onClick: goBack,
    onKeyUp: goBack,
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-20 mt-[3.25rem]">
      <motion.div
        ref={cardRef}
        className="h-full w-full overflow-hidden  bg-[#1c1c1e] pointer-events-auto relative"
        layoutId={`card-container-${partial_project.slug}`}
      >
        {/* Sticky reduced header */}
        <div
          className={`fixed top-[3.25rem] left-0 right-0 z-30 transition-all duration-300 ${
            scrolled ? 'h-16 bg-black/50 backdrop-blur-md md:border-x border-b border-white rounded-b-xl' : 'h-0 overflow-hidden'
          }`}
        >
          {scrolled && (
            <div className="h-full flex items-center justify-between px-6">
              <div className="flex items-center space-x-4 cursor-pointer" {...openLinkProps}>
                <div className="h-10 w-10 rounded bg-cover bg-center" style={{ backgroundImage: `url(${project.image_link})` }} />
                <div className="flex flex-col justify-start">
                  <div className="flex flex-row justify-start items-center space-x-2">
                    <i className="pi pi-external-link text-xs text-white" />
                    <span className={`font-bold text-sm ${card_color}`}>{project.title}</span>
                    <div className="hidden md:inline space-x-2">
                      <span className="text-white/50">•</span>
                      <span className={'text-white/50'}>
                        {project.release_date
                          ? new Date(project.release_date).toLocaleDateString()
                          : project.release_date_planned
                            ? new Date(project.release_date_planned).toLocaleDateString()
                            : null}
                      </span>
                    </div>
                  </div>
                  <ul className="flex space-x-2">
                    <li className={`uppercase font-bold text-xs text-white px-3 py-1 rounded ${projectStatusLabels[project.status].color}`}>
                      {projectStatusLabels[project.status].label}
                    </li>
                    {project.labels.slice(0, 2).map((label, i) => (
                      <li key={label} className={`text-xs uppercase bg-white/10 text-white px-2 py-1 rounded ${i > 0 ? 'hidden md:inline' : ''}`}>
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-row space-x-3">
                <div className="hidden md:inline">
                  <i className="pi pi-external-link cursor-pointer text-white text-xl " {...openLinkProps} />
                </div>
                <i className="pi pi-times cursor-pointer text-white text-xl" {...goBackProps} />
              </div>
            </div>
          )}
        </div>

        {/* Scrollable content container */}
        <div ref={scrollContainerRef} className="h-full overflow-x-hidden overflow-y-auto scroll-smooth">
          {/* Full header */}
          <motion.div className="relative h-72 w-full z-[1]" layoutId={`card-image-container-${project.id}`}>
            <img src={project.image_link} alt="" className="w-full h-full object-cover object-center" />
            <motion.div
              className="absolute flex flex-row items-center pr-5 md:pr-8 justify-between top-[0.5rem] left-[0.5rem] md:top-[15px] md:left-[15px] w-full z-[1]"
              layoutId={`title-container-${project.id}`}
            >
              <div className="flex flex-col cursor-pointer" {...openLinkProps}>
                <div className="flex flex-col md:flex-row md:space-x-3 items-start md:items-center">
                  <p className={`font-extrabold text-lg md:m-2 ${card_color}`} style={{ textShadow: '#aa0 1px 0 5px' }}>
                    {project.title}
                  </p>
                  <p
                    className={`italic text-sm font-bold ${project.target === ProjectTarget.DEVELOPERS ? 'text-blue-500' : 'text-green-500'}`}
                    style={{ textShadow: '#aa0 1px 0 10px' }}
                  >
                    Made for {project.target === ProjectTarget.DEVELOPERS ? 'developers' : 'everyone'}
                  </p>
                </div>
                <ul className="flex mt-2 md:mt-0 space-x-3">
                  {project.labels.map((label, index) => (
                    <li key={label} className={`uppercase text-xs text-white bg-black/75 rounded px-3 py-1 ${index > 1 ? 'hidden md:inline' : ''}`}>
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
              <i className="pi pi-arrow-down-left-and-arrow-up-right-to-center cursor-pointer text-3xl text-white" {...goBackProps} />
            </motion.div>

            <div className="flex flex-col justify-center absolute bottom-[0.5rem] left-[0.5rem] md:bottom-[15px] md:left-[15px] space-y-2">
              {project.isOpenSource && <motion.div className="text-xs bg-black/50 text-gray-400 px-3 py-1 rounded">Open Source</motion.div>}
              <div className="flex flex-row">
                <div
                  className={`uppercase font-bold text-xs text-white px-3 py-1 ${project.release_date || project.release_date_planned ? 'rounded-l' : 'rounded'} ${projectStatusLabels[project.status].color}`}
                >
                  {projectStatusLabels[project.status].label}
                </div>
                {(project.release_date || project.release_date_planned) && (
                  <div className="flex flex-row px-3 text-white bg-black rounded-r">
                    {project.release_date_planned && <p className="mr-1">Planned for</p>}
                    {project.release_date
                      ? new Date(project.release_date).toLocaleDateString()
                      : project.release_date_planned
                        ? new Date(project.release_date_planned).toLocaleDateString()
                        : null}
                  </div>
                )}
              </div>
            </div>
            {project.link?.github && (
              <div className="flex flex-row absolute bottom-[0.5rem] right-[0.5rem] md:bottom-[15px] md:right-[15px] space-x-3 items-center">
                <button
                  type="button"
                  {...openLinkProps}
                  className="flex animate-pulse items-center space-x-2 bg-blue-500 hover:bg-blue-400 text-white px-3 py-1 rounded"
                >
                  <span className="uppercase font-bold md:inline hidden">Open on Github</span>
                  <span className="uppercase font-bold md:hidden inline">Open</span>
                  <i className="pi pi-external-link" />
                </button>
              </div>
            )}
          </motion.div>

          {/* Main content */}
          <div className="py-10 px-10 md:px-48 lg:px-96 pb-10 text-white space-y-6">
            {project.ContentComponent && <project.ContentComponent />}
            {project.link?.github && (
              <div className="flex items-center justify-center pt-5">
                <button type="button" {...openLinkProps} className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-400 text-white px-3 py-1 rounded">
                  <span className="uppercase font-bold">Find out more</span>
                  <i className="pi pi-external-link" />
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
