import { usePathname } from '@/i18n/routing';
import { HOME_CONTENT_ID } from '@constants/home';
import { useEffect, useState } from 'react';

/**
 * Hook that tracks whether the home page has scrolled to its content snap (past the landing)
 * @returns True once the home content reaches the upper half of the viewport, always true outside the home page
 */
export function useHomeContentReached(): boolean {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [reached, setReached] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const content = document.getElementById(HOME_CONTENT_ID);
    if (!content) return;

    const handleScroll = () => {
      setReached(content.getBoundingClientRect().top <= window.innerHeight / 2);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      setReached(false);
    };
  }, [isHome]);

  return !isHome || reached;
}
