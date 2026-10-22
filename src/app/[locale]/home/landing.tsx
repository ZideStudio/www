'use client';

import BackgroundGrid from '@components/BackgroundGrid';
import { Button } from '@components/Button';
import { Tag } from '@components/Tag';
import { DISCORD_URL } from '@constants/discord';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { ScrollIndicator } from './scroll-indicator';

export const Landing = () => {
  const t = useTranslations('home');

  return (
    <>
      <div className="antiSelect relative flex min-h-[calc(100svh-4rem-1px-(4.5rem+1.25rem)/2)] snap-start scroll-mt-32 flex-col items-center justify-center px-5 py-4 sm:min-h-[calc(100svh-4rem-1px-(6rem+1.5rem)/2)] md:min-h-[calc(100svh-5rem-1px-(8rem+1.875rem)/2)] md:py-0">
        <BackgroundGrid interactible />

        <div className="z-10 flex w-full flex-col-reverse items-center md:flex-row md:justify-around">
          <div className="mt-8 flex w-full flex-col space-y-4 md:mt-0 md:w-auto md:min-w-[25.5rem] md:space-y-5">
            <Tag className="hidden md:block">{t('tag')}</Tag>

            <span className="text-activesecondary text-2xl leading-tight font-bold tracking-tight sm:text-3xl md:text-6xl">
              {t('title')}
              <span className="from-activesecondary to-activeprimary ml-2 bg-gradient-to-r bg-clip-text text-transparent md:ml-5">Zide Studio</span>
            </span>
            <span className="hidden text-2xl font-semibold text-gray-400 md:block">
              {t('projects.developing')}{' '}
              <span className="text-text">
                <Typewriter
                  words={[t('projects.webapps'), t('projects.softwares'), t('projects.cli'), t('projects.extensions'), t('projects.projects')]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={80}
                  delaySpeed={3000}
                />
              </span>
            </span>
            <p className="max-w-xl text-sm font-semibold text-gray-400 md:text-lg">{t('description')}</p>
            <div className="flex flex-wrap gap-3 pt-2 md:gap-5 md:pt-5">
              <Button href={DISCORD_URL} className="animate-pulse" icon="discord" primary>
                {t('discord')}
              </Button>
              <Button href="/projects" icon="angle-right">
                {t('projects.view_projects')}
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center md:mt-0">
            <motion.div
              className="antiSelect relative h-40 w-64 text-white sm:h-48 sm:w-80 md:h-44 md:w-72 lg:h-64 lg:w-[27.4rem]"
              initial={{ opacity: 0, scale: 0.3, rotate: -12, filter: 'brightness(3) blur(12px)' }}
              animate={{ opacity: 1, scale: 1, rotate: 0, filter: 'brightness(1) blur(0px)' }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 14,
                mass: 0.8,
                opacity: { duration: 0.2, ease: 'easeOut' },
                filter: { duration: 0.45, ease: 'easeOut' },
              }}
            >
              <motion.div
                className="relative h-full w-full"
                animate={{
                  scale: [1, 1.025, 1],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 10,
                  delay: 0.8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src="/assets/logo/zide_complete.png"
                  alt="ZIDE"
                  fill
                  className="antiSelect object-contain"
                  sizes="(max-width: 768px) 320px, 438px"
                  priority
                />
              </motion.div>
            </motion.div>
            <h1 className="sr-only">Zide</h1>

            <motion.h2
              className="text-activeprimary px-2 text-center text-xl font-bold shadow-black drop-shadow-lg sm:text-2xl md:px-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 1, ease: 'easeOut' }}
            >
              {t('slogan')}
            </motion.h2>

            {new Date().getMonth() === 0 && (
              <motion.p
                className="mt-4 text-center text-xl font-semibold text-yellow-200 shadow-black drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 2,
                  duration: 1,
                  ease: 'easeOut',
                }}
              >
                Happy new year {new Date().getFullYear()}!
              </motion.p>
            )}
          </div>
        </div>
        <ScrollIndicator />
      </div>
      <div className="relative">
        <div className="to-primary pointer-events-none absolute bottom-0 z-0 h-20 w-full bg-gradient-to-b from-transparent" />
      </div>
    </>
  );
};
