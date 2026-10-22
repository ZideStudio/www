'use client';

import { HOME_CONTENT_ID } from '@constants/home';
import { useScroll } from '@hooks/useScroll';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslations } from 'next-intl';

const CHEVRONS = [0, 1];

/** Chevrons that bounce twice then rest, at the bottom center of the landing, visible only while the page is at the top. Hidden on short viewports where they would overlap the centered landing content. */
export const ScrollIndicator = () => {
  const t = useTranslations('home');
  const scrolled = useScroll(10);

  const scrollDown = () => {
    document.getElementById(HOME_CONTENT_ID)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {!scrolled && (
        <motion.button
          type="button"
          onClick={scrollDown}
          aria-label={t('scroll_down')}
          title={t('scroll_down')}
          className="text-text/70 hover:text-text focus-visible:ring-activesecondary absolute bottom-2 left-1/2 z-30 flex -translate-x-1/2 cursor-pointer flex-col items-center rounded-full px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 md:bottom-4 [@media(max-height:760px)]:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <motion.span
            className="flex flex-col items-center"
            animate={{ y: [0, 10, 0, 10, 0, 0] }}
            transition={{ duration: 2.4, times: [0, 0.14, 0.28, 0.42, 0.56, 1], repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          >
            {CHEVRONS.map((index) => (
              <i key={index} aria-hidden="true" className={`pi pi-angle-down text-2xl leading-none ${index === 0 ? '-mb-2.5' : 'opacity-50'}`} />
            ))}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
