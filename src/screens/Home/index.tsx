import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Head } from '../../components/Head';
import { Item } from '../../components/Item';
import { NavBar } from '../../components/NavBar';
import { PROJECT_LOCATION } from '../../constants/project.const';
import type { ProjectPartial } from '../../models/project.model';
import { Screen } from '../../models/screen.model';
import { Projects } from './Projects';
import { Welcome } from './Welcome';

export const Home = () => {
  const params = useParams();
  const projectSlug = params.slug;

  const [projects, setProjects] = useState<ProjectPartial[] | undefined>();
  const [projectLoading, setProjectLoading] = useState<boolean>(true);
  const [isInWelcome, setIsInWelcome] = useState(true);
  const [baseLocation, setBaseLocation] = useState<string | undefined>(window.location.pathname);

  const selectedProject: ProjectPartial | undefined = projectSlug && !projectLoading ? projects?.find((project) => project.slug === projectSlug) : undefined;

  const welcomeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInWelcome(entry.isIntersecting);
        if (entry.isIntersecting) {
          setBaseLocation(undefined);
        }
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
    if ((projectSlug || baseLocation === PROJECT_LOCATION) && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [projectSlug]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (!isInWelcome && currentPath === '/') {
      navigate(PROJECT_LOCATION, { replace: true });
    } else if (isInWelcome && currentPath === PROJECT_LOCATION && baseLocation !== PROJECT_LOCATION) {
      navigate('/', { replace: true });
    }
  }, [isInWelcome, navigate]);

  return (
    <div className="overflow-x-hidden">
      <Head screen={isInWelcome ? Screen.WELCOME : selectedProject ? Screen.PROJECT : Screen.PROJECTS} title={selectedProject ? selectedProject.title : undefined} description={selectedProject ? selectedProject.metaDescription : undefined} />

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
    </div>
  );
};
