'use client';

import { motion, MotionConfig } from 'motion/react';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  direction?: RevealDirection;
  /** Delay (in seconds) before the element appears. Leaving the viewport is never delayed. */
  delay?: number;
  /** Share of the element (0 to 1) that must be visible to trigger the animation. */
  amount?: number;
};

const OFFSET = 56;

const OFFSETS: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: OFFSET },
  down: { x: 0, y: -OFFSET },
  left: { x: -OFFSET, y: 0 },
  right: { x: OFFSET, y: 0 },
  none: { x: 0, y: 0 },
};

/** Fades an element in when it enters the viewport and back out when it leaves it, in both scroll directions. */
export const Reveal = ({ children, className, direction = 'up', delay = 0, amount = 0.2 }: RevealProps) => {
  // reducedMotion="user": users who asked for it get a plain fade, without the movement
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={{ opacity: 0, scale: 0.96, ...OFFSETS[direction] }}
        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, transition: { duration: 0.8, delay, ease: 'easeOut' } }}
        viewport={{ amount, once: false }}
        transition={{ duration: 0.4, ease: 'easeIn' }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
};
