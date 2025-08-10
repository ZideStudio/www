import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Marquee from 'react-fast-marquee';
import { Landing } from './home/landing';
import { Languages } from './home/languages';
import { Presentation } from './home/presentation';
import { HomeProjects } from './home/projects';
import { Team } from './home/team';

export const metadata: Metadata = {
  title: 'Zide',
  description: 'Digital simplicity, greater efficiency. We develop open-source applications to help you improve your efficiency',
};

export default async function Page() {
  const t = await getTranslations('home');

  return (
    <div>
      <Landing />

      <div className="bg-primary relative">
        <Marquee pauseOnClick className="absolute -top-20 z-20 overflow-y-hidden text-9xl font-bold uppercase select-none">
          {[t('banner.webapps'), t('banner.softwares'), t('banner.cli'), t('banner.extensions')].map((item, index) => {
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

        <div className="flex flex-col space-y-40 md:my-16">
          <Presentation />
          <HomeProjects />
          <Languages />
          <Team />
        </div>
      </div>
    </div>
  );
}
