import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../../constants/projects.data';
import { ProjectStatus } from '../../models/project.model';

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container py-10 mx-auto flex flex-col space-y-10 md:flex-row md:justify-between md:space-y-0">
        {/* Logo */}
        <div className="w-full px-12 md:px-0 md:w-[13rem]">
          <img src="/assets/logo/zide_complete.png" alt="Zide" className="text-white h-12 antiSelect" />
        </div>
        {/* Zide */}
        <div className="w-full px-12 md:px-0 md:w-[13rem]">
          <p className="text-start text-xl font-semibold">Collective</p>
          <hr className="border-gray-600 my-4 w-1/3" />
          <ul>
            <li className="text-start mt-2">Zide is a software development collective creating innovative tools for everyone.</li>
            <li className="text-start mt-1 text-xs text-gray-400">Driven by passion and curiosity, We craft digital products that are intuitive, efficient and highly customizable, built to simplify the user experience while unlocking powerful workflows.</li>
          </ul>
        </div>
        {/* Projects */}
        <div className="w-full px-12 md:px-0 md:w-[13rem]">
          <p className="text-start text-xl font-semibold">Projects</p>
          <hr className="border-gray-600 my-4 w-1/3" />
          <ul>
            {PROJECTS.map((project) => (
              <li key={project.id} className="flex mt-2">
                <a
                  className={`text-start font-semibold ${project.status === ProjectStatus.RELEASED ? 'text-white' : 'text-gray-300'} hover:text-blue-400 transition-colors duration-300`}
                  href={`/project/${project.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/project/${project.slug}`);
                  }}
                >
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div className="w-full px-12 md:px-0 md:w-[13rem]">
          <p className="text-start text-xl font-semibold">Contact</p>
          <hr className="border-gray-600 my-4 w-1/3" />
          <ul className="text-start mt-2">
            <li className="flex flex-row items-center space-x-3 mt-2">
              <i className="pi pi-home" style={{ fontSize: '1rem' }} />
              <p>France</p>
            </li>
            <li className="flex flex-row items-center space-x-3 mt-2">
              <i className="pi pi-twitter" style={{ fontSize: '1rem' }} />
              <a href="https://x.com/ZideStudio" className="text-blue-400" target="_blank" rel="noopener noreferrer">
                @ZideStudio
              </a>
            </li>
            <li className="flex flex-row items-center space-x-3 mt-2">
              <i className="pi pi-envelope" style={{ fontSize: '1rem' }} />
              <a href="mailto:contact@zide.fr" className="text-blue-400">
                contact@zide.fr
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#1F1F1F] py-2 flex flex-row space-x-2 justify-center">
        <p className="text-start">© 2024-{new Date().getFullYear()} Zide.</p>
        <p className="text-start">All rights reserved.</p>
      </div>
    </footer>
  );
};
