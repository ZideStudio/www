import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Item } from '../../components/Item';
import { NavBar } from '../../components/NavBar';
import type { ProjectPartial } from '../../models/project.model';
import { Projects } from './Projects';
import { Welcome } from './Welcome';

export const Home = () => {
  const params = useParams();
  const projectSlug = params.slug;

  const [projects, setProjects] = useState<ProjectPartial[] | undefined>();
  const [projectLoading, setProjectLoading] = useState<boolean>(true);
  const [isInWelcome, setIsInWelcome] = useState(true);

  const selectedProject: ProjectPartial | undefined = projectSlug && !projectLoading ? projects?.find((project) => project.slug === projectSlug) : undefined;

  const welcomeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInWelcome(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.6,
      },
    );

    const section = welcomeRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    if (projectSlug && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [projectSlug]);

  return (
    <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <AnimatePresence>
        {!isInWelcome && (
          <motion.div
            key="navbar"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: 'easeOut' },
              },
              exit: {
                opacity: 0,
                y: -20,
                transition: { duration: 0.3, ease: 'easeIn' },
              },
            }}
            className="fixed top-0 w-full z-50"
          >
            <NavBar title="Our projects" />
          </motion.div>
        )}
      </AnimatePresence>

      <section ref={welcomeRef} className="h-screen snap-start">
        <Welcome />
      </section>

      <section ref={projectsRef} className="min-h-screen snap-start">
        {projectLoading ? (
          <Projects projects={projects} setProjects={setProjects} setProjectLoading={setProjectLoading} />
        ) : (
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Projects projects={projects} setProjects={setProjects} setProjectLoading={setProjectLoading} />
              {selectedProject && (
                <AnimatePresence>
                  <Item partial_project={selectedProject} key={selectedProject.id} />
                </AnimatePresence>
              )}
            </div>
            <Footer />
          </div>
        )}
      </section>
    </div>
  );
};
