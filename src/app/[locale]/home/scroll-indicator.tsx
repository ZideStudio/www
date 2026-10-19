'use client';

import { useScroll } from '@hooks/useScroll';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslations } from 'next-intl';

const CHEVRONS = [0, 1];

/** Chevrons that bounce twice then rest, pinned at the bottom center of the viewport, visible only while the page is at the top. */
export const ScrollIndicator = () => {
  const t = useTranslations('home');
  const scrolled = useScroll(10);

  const scrollDown = () => {
    window.scroll({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {!scrolled && (
        <motion.button
          type="button"
          onClick={scrollDown}
          aria-label={t('scroll_down')}
          title={t('scroll_down')}
          className="text-text/70 hover:text-text focus-visible:ring-activesecondary fixed bottom-8 left-1/2 z-30 flex -translate-x-1/2 cursor-pointer flex-col items-center rounded-full px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 md:bottom-12"
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
