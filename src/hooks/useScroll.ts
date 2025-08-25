import { useEffect, useState } from 'react';

/**
 * Hook that tracks whether the page has been scrolled past a certain threshold
 * @param threshold The scroll position threshold in pixels
 * @returns A boolean indicating whether the page has scrolled past the threshold
 */
export function useScroll(threshold = 10): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setScrolled(window.scrollY > threshold);

    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
