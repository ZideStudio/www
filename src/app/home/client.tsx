'use client';
import { useTranslations } from 'next-intl';
import Marquee from 'react-fast-marquee';
import { Landing } from './landing';
import { Languages } from './languages';
import { Presentation } from './presentation';
import { HomeProjects } from './projects';
import { Team } from './team';

export const Home = () => {
  const t = useTranslations('home');

  return (
    <div>
      <Landing />

      <div className="bg-primary relative">
        <Marquee pauseOnClick className="absolute -top-20 z-20 overflow-y-hidden text-9xl font-bold uppercase select-none">
          {[t('projects.webapps'), t('projects.softwares'), t('projects.cli'), t('projects.extensions')].map((item, index) => {
            let textGradient: string;
            let dotGradient: string;
            if (index % 2 === 0) {
              textGradient = 'from-text to-text/75';
              dotGradient = 'text-text/75';
            } else {
              textGradient = 'from-text/75 to-text';
              dotGradient = 'text-text';
            }

            return (
              <div className="flex flex-row justify-center align-middle">
                <p key={index} className={`bebas-neue-regular ${textGradient} ml-5 bg-gradient-to-r bg-clip-text text-transparent`}>
                  {item}
                </p>
                <i className={`pi pi-circle-fill ${dotGradient} my-auto ml-5 text-3xl`} />
              </div>
            );
          })}
        </Marquee>

        <div className="flex flex-col space-y-40 my-16">
          <Presentation />
          <HomeProjects />
          <Languages />
          <Team />
        </div>
      </div>
    </div>
  );
};
