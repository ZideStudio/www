'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Link as IntlLink, usePathname as useIntlPathname } from '../../i18n/routing';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarClientProps {
  navLinks: NavLink[];
  children: React.ReactNode;
  languageSelector: React.ReactNode;
}

function useCurrentHash() {
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    // Set initial hash immediately
    const initialHash = window.location.hash;
    setCurrentHash(initialHash);

    const checkHash = () => {
      const hash = window.location.hash;
      setCurrentHash((prev) => (prev !== hash ? hash : prev));
    };

    // Check hash more frequently initially to catch fast changes
    const interval = setInterval(checkHash, 50);

    const updateHash = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', updateHash);
    window.addEventListener('popstate', updateHash);
    window.addEventListener('load', updateHash);

    return () => {
      clearInterval(interval);
      window.removeEventListener('hashchange', updateHash);
      window.removeEventListener('popstate', updateHash);
      window.removeEventListener('load', updateHash);
    };
  }, []);

  return currentHash;
}

export function NavbarClient({ navLinks, children, languageSelector }: NavbarClientProps) {
  const pathname = useIntlPathname(); // Use next-intl pathname which excludes locale prefix
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentHash = useCurrentHash();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    navLinks.forEach(({ href }) => {
      let isActive = false;

      if (href === '/projects') {
        isActive = pathname.startsWith('/projects') || pathname.startsWith('/project');
      } else if (href.includes('#')) {
        // For anchor links, check both pathname and hash
        const [linkPath, linkHash] = href.split('#');
        isActive = pathname === linkPath && currentHash === `#${linkHash}`;
      } else if (href === '/') {
        // For home, only active if no hash is present
        isActive = pathname === href && !currentHash;
      } else {
        isActive = pathname === href;
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

  // Handle anchor link clicks
  const handleAnchorClick = (href: string) => {
    if (href.includes('#')) {
      const [, hash] = href.split('#');
      window.location.hash = hash;
    }
  };

  return (
    <>
      <header
        className={`navbar-animate sticky top-0 z-50 w-full overflow-visible py-2 transition-all duration-100 ${
          scrolled ? 'border-text/20 bg-primary/20 border-b shadow-sm backdrop-blur-md' : 'border-b border-transparent backdrop-blur-md'
        }`}
      >
        {children}

        <button
          onClick={() => setMobileMenuOpen(true)}
          className="text-text hover:text-activesecondary fixed top-4 right-6 z-50 flex items-center justify-center rounded-md p-2 lg:hidden"
          aria-label="Open mobile menu"
        >
          <i className="pi pi-bars text-2xl" />
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

          <div className="bg-primary/95 border-text/20 absolute top-0 right-0 h-full w-80 max-w-[85vw] border-l shadow-xl backdrop-blur-md">
            <div className="border-text/20 flex items-center justify-between rounded-b-lg border-b p-6">
              <Image src="/assets/logo/zide_complete.png" className="h-8 w-auto" alt="Zide Logo" width={128} height={32} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-text hover:text-activesecondary flex items-center justify-center rounded-md p-2"
                aria-label="Close mobile menu"
              >
                <i className="pi pi-times text-xl" />
              </button>
            </div>

            <nav className="flex flex-col space-y-2 p-6">
              {navLinks.map(({ label, href }) => {
                let isActive = false;

                if (href === '/projects') {
                  isActive = pathname.startsWith('/projects') || pathname.startsWith('/project');
                } else if (href.includes('#')) {
                  const [linkPath, linkHash] = href.split('#');
                  isActive = pathname === linkPath && currentHash === `#${linkHash}`;
                } else if (href === '/') {
                  // For home, only active if no hash is present
                  isActive = pathname === href && !currentHash;
                } else {
                  isActive = pathname === href;
                }

                const LinkComponent = href.includes('#') ? 'a' : IntlLink;
                const linkProps = href.includes('#')
                  ? {
                      href,
                      onClick: () => {
                        setMobileMenuOpen(false);
                        handleAnchorClick(href);
                      },
                    }
                  : { href, onClick: () => setMobileMenuOpen(false) };

                return (
                  <LinkComponent
                    key={label}
                    {...linkProps}
                    className={`relative flex items-center rounded-md px-4 py-3 text-lg font-semibold transition-colors ${
                      isActive ? 'text-activesecondary bg-activesecondary/10' : 'text-text hover:text-activesecondary hover:bg-text/5'
                    }`}
                  >
                    {label}
                    {isActive && <span className="bg-activesecondary absolute top-0 bottom-0 left-0 w-1 rounded-r" />}
                  </LinkComponent>
                );
              })}
            </nav>

            <div className="border-text/20 absolute right-0 bottom-0 left-0 rounded-t-lg border-t p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-text font-medium">Language</span>
                  {languageSelector}
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    href="https://discord.gg/45DXQZGpEP"
                    target="_blank"
                    className="text-text hover:text-activesecondary flex items-center space-x-2 transition-colors"
                  >
                    <i className="pi pi-discord text-xl" />
                    <span>Discord</span>
                  </Link>

                  <Link
                    href="https://github.com/ZideStudio"
                    target="_blank"
                    className="text-text hover:text-activesecondary flex items-center space-x-2 transition-colors"
                  >
                    <i className="pi pi-github text-xl" />
                    <span>GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
