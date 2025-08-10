'use client';
import BackgroundGrid from '@components/BackgroundGrid';
import { Button } from '@components/Button';
import Navbar from '@components/NavBar';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { Typewriter } from 'react-simple-typewriter';

export const Home = () => {
  const t = useTranslations('home');

  return (
    <div className="">
      <div className="antiSelect relative flex h-screen w-screen flex-col items-center justify-center px-5">
        <BackgroundGrid interactible />

        <div className="z-10 flex w-full flex-col-reverse items-center md:flex-row md:justify-around">
          <div className="mt-14 flex flex-col space-y-5 md:mt-0 md:min-w-[25.5rem]">
            <p className="border-text/50 text-text w-max rounded-xl border px-3 py-1 text-sm">{t('tag')}</p>

            <span className="text-activesecondary text-3xl leading-tight font-bold tracking-tight md:text-6xl">
              {t('title')}
              <span className="from-activesecondary to-activeprimary ml-5 bg-gradient-to-r bg-clip-text text-transparent">Zide Studio</span>
            </span>
            <h2 className="text-2xl font-semibold text-gray-400">
              {t('projects.title')}{' '}
              <span className="text-white">
                <Typewriter
                  words={[t('projects.webapps'), t('projects.softwares'), t('projects.cli'), t('projects.raycast'), t('projects.projects')]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={80}
                  delaySpeed={3000}
                />
              </span>
            </h2>
            <h2 className="max-w-xl text-lg font-semibold text-gray-400">{t('description')}</h2>
            <div className="flex-row space-x-5 pt-5">
              <Button icon="angle-right" className="animate-pulse" primary>
                View Projects
              </Button>
              <Button icon="building-columns">Our Story</Button>
            </div>
          </div>
          <div className="flex flex-col items-center md:mt-0">
            <motion.img
              src="/assets/logo/zide_complete.png"
              alt="ZIDE"
              className="antiSelect h-48 text-white md:h-64"
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
            />
            <h1 className="sr-only">Zide</h1>

            <motion.h2
              className="kanit-regular text-activeprimary px-20 text-center text-2xl font-bold shadow-black drop-shadow-lg md:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 1, ease: 'easeOut' }}
            >
              Digital simplicity, greater efficiency
            </motion.h2>

            {new Date().getMonth() === 0 && (
              <motion.p
                className="kanit-regular mt-4 text-center text-xl font-semibold text-yellow-200 shadow-black drop-shadow-lg"
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

      <div className="h-screen bg-gray-500">
        <p>TEST</p>
      </div>
    </div>
  );
};
