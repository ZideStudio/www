'use client';

import { useEffect, useState } from 'react';

export const ScrollBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollTop / docHeight) * 100;
      setScrollPercent(Math.min(percent, 98));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-bar"
      style={{
        top: `${scrollPercent}%`,
        ['--p' as string]: `${scrollPercent * 100}%` as string,
      }}
    />
  );
};
