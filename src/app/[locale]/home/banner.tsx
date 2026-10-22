'use client';

import { HOME_BANNER_WORDS } from '@constants/home';
import { shuffle } from '@utils/array';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

export const Banner = () => {
  const t = useTranslations('home.banner');

  const [words, setWords] = useState([...HOME_BANNER_WORDS]);

  useEffect(() => {
    setWords(shuffle([...HOME_BANNER_WORDS]));
  }, []);

  return (
    <Marquee speed={25} pauseOnClick className="z-20 overflow-y-hidden text-7xl font-bold uppercase select-none sm:text-8xl md:text-9xl">
      {words.map((word, index) => {
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
          <div key={word} className="flex flex-row justify-center align-middle">
            <p className={`bebas-neue-regular ${textGradient} ml-3 bg-gradient-to-r bg-clip-text text-transparent sm:ml-5`}>{t(word)}</p>
            <i className={`pi pi-circle-fill ${dotGradient} my-auto ml-3 text-xl sm:ml-5 sm:text-2xl md:text-3xl`} />
          </div>
        );
      })}
    </Marquee>
  );
};
