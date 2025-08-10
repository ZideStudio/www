'use client';

import BackgroundGrid from '@components/BackgroundGrid';
import { Button } from '@components/Button';
import { Tag } from '@components/Tag';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

export const Landing = () => {
  const t = useTranslations('home');

  return (
    <>
      <div className="antiSelect relative mb-10 flex h-[calc(100vh-3rem)] flex-col items-center justify-center px-5 md:mb-0">
        <BackgroundGrid interactible />

        <div className="z-10 flex w-full flex-col-reverse items-center md:flex-row md:justify-around">
          <div className="mt-14 flex flex-col space-y-5 md:mt-0 md:min-w-[25.5rem]">
            <Tag>{t('tag')}</Tag>

            <span className="text-activesecondary text-3xl leading-tight font-bold tracking-tight md:text-6xl">
              {t('title')}
              <span className="from-activesecondary to-activeprimary ml-5 bg-gradient-to-r bg-clip-text text-transparent">Zide Studio</span>
            </span>
            <span className="text-2xl font-semibold text-gray-400">
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
            <div className="flex-row space-x-5 pt-5">
              <Button href="/projects" icon="angle-right" className="animate-pulse" primary>
                {t('projects.view_projects')}
              </Button>
              <Button icon="building-columns">{t('story')}</Button>
            </div>
          </div>
          <div className="flex flex-col items-center md:mt-0">
            <motion.div
              className="antiSelect text-text relative h-48 w-80 md:h-64 md:w-[27.4rem]"
              initial={{ opacity: 0, scale: 0.8, y: -50 }}
              animate={{
                opacity: 1,
                scale: [1, 1.025, 1],
                rotate: [0, 1, 0],
              }}
              transition={{
                opacity: { duration: 2, ease: 'easeOut' },
                scale: {
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                },
              }}
              style={{ color: 'white' }}
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
            <h1 className="sr-only">Zide</h1>

            <motion.h2
              className="text-activeprimary px-10 text-center text-2xl font-bold shadow-black drop-shadow-lg md:px-20"
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
      </div>
      <div className="relative">
        <div className="to-primary pointer-events-none absolute bottom-0 z-0 h-20 w-full bg-gradient-to-b from-transparent" />
      </div>
    </>
  );
};
