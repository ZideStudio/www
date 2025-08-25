import { usePathname } from '@/i18n/routing';
import { useEffect, useState } from 'react';
import { useCurrentHash } from './useCurrentHash';

interface NavLink {
  href: string;
  label: string;
}

/**
 * Hook to determine if a navigation link is active
 * @param navLinks Array of navigation links to track
 * @returns Object containing isActive function to check if a link is active
 */
export function useActivePath(navLinks: NavLink[]) {
  const pathname = usePathname();
  const currentHash = useCurrentHash();
  const [activeStates, setActiveStates] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const newActiveStates = navLinks.reduce<Record<string, boolean>>((acc, { href }) => {
      let isActive = false;

      if (href === '/projects') {
        // Projects route is active for /projects and /project/*
        isActive = pathname === '/projects' || pathname.startsWith('/project/');
      } else if (href.includes('#')) {
        // For anchor links, check both pathname and hash
        const [linkPath, linkHash] = href.split('#');
        const basePathMatch = linkPath === '' || pathname === linkPath;
        isActive = basePathMatch && currentHash === `#${linkHash}`;
      } else if (href === '/') {
        // Home is active only if exactly at / with no hash
        isActive = pathname === '/' && !currentHash;
      } else {
        isActive = pathname === href;
      }

      acc[href] = isActive;
      return acc;
    }, {});

    setActiveStates(newActiveStates);
  }, [pathname, currentHash, navLinks]);

  const isActive = (href: string) => activeStates[href] || false;

  return { isActive };
}
