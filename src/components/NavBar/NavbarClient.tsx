'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarClientProps {
  navLinks: NavLink[];
  children: React.ReactNode;
}

function useCurrentHash() {
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    setCurrentHash(window.location.hash);

    const checkHash = () => {
      const hash = window.location.hash;
      setCurrentHash((prev) => (prev !== hash ? hash : prev));
    };

    const interval = setInterval(checkHash, 100);

    const updateHash = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', updateHash);
    window.addEventListener('popstate', updateHash);

    return () => {
      clearInterval(interval);
      window.removeEventListener('hashchange', updateHash);
      window.removeEventListener('popstate', updateHash);
    };
  }, []);

  return currentHash;
}

export function NavbarClient({ navLinks, children }: NavbarClientProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const currentHash = useCurrentHash();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    navLinks.forEach(({ href }) => {
      const currentUrl = pathname + currentHash;
      let isActive = false;

      if (href === '/projects') {
        isActive = pathname.startsWith('/project');
      } else {
        isActive = currentUrl === href;
      }
      const linkElement = document.querySelector(`[data-href="${href}"] .nav-link`);
      const indicatorElement = document.querySelector(`[data-href="${href}"] .nav-indicator`);

      if (linkElement && indicatorElement) {
        if (isActive) {
          linkElement.classList.remove('text-text');
          linkElement.classList.add('text-activesecondary');
          indicatorElement.classList.remove('w-0');
          indicatorElement.classList.add('w-full', 'opacity-100');
        } else {
          linkElement.classList.remove('text-activesecondary');
          linkElement.classList.add('text-text');
          indicatorElement.classList.remove('w-full', 'opacity-100');
          indicatorElement.classList.add('w-0');
        }
      }
    });
  }, [pathname, currentHash, navLinks]);

  return (
    <header
      className={`navbar-animate sticky top-0 z-50 w-full overflow-visible py-2 transition-all duration-100 ${
        scrolled ? 'border-text/20 bg-primary/20 border-b shadow-sm backdrop-blur-md' : 'border-b border-transparent backdrop-blur-md'
      }`}
    >
      {children}
    </header>
  );
}
