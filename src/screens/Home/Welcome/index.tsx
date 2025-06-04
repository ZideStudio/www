import { motion } from 'framer-motion';
import type React from 'react';
import './index.css';
import BackgroundGrid from '../../../components/BackgroundGrid';

export const Welcome: React.FC = () => {
  return (
    <div className="h-screen w-screen relative flex flex-col items-center justify-center antiSelect">
      <BackgroundGrid interactible />

      <div className="z-10 flex flex-col items-center">
        <motion.img
          src="/assets/logo/zide_complete.png"
          alt="ZIDE"
          className="text-white h-48 md:h-64 antiSelect"
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{
            opacity: 1,
            scale: [1, 1.025, 1],
            rotate: [0, 1, 0],
          }}
          transition={{
            opacity: { duration: 2, ease: 'easeOut' },
            scale: {
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'mirror',
              ease: 'easeInOut',
            },
            rotate: {
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'mirror',
              ease: 'easeInOut',
            },
          }}
          style={{ color: 'white' }}
        />

        <motion.h2 className="kanit-regular text-2xl px-20 md:px-0 mt-6 text-center text-[#00579F] drop-shadow-lg shadow-black" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1, ease: 'easeOut' }}>
          Digital simplicity, greater efficiency
        </motion.h2>

        {new Date().getMonth() === 0 && (
          <motion.p
            className="kanit-regular text-xl mt-4 text-center text-red-400 drop-shadow-lg shadow-black"
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

      <div className="absolute bottom-10 flex flex-col items-center">
        <p className="mt-2 text-white text-sm kanit-regular">
          Scroll down
          <br />
          to see what we're cooking
        </p>
        <motion.div
          className="text-[#00579F] text-3xl"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        >
          &#x26DB;
        </motion.div>
      </div>
    </div>
  );
};
