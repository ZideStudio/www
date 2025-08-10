'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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

export function NavbarClient({ navLinks, children, languageSelector }: NavbarClientProps) {
  const pathname = usePathname();
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
    <>
      <header
        className={`navbar-animate sticky top-0 z-50 w-full overflow-visible py-2 transition-all duration-100 ${
          scrolled ? 'border-text/20 bg-primary/20 border-b shadow-sm backdrop-blur-md' : 'border-b border-transparent backdrop-blur-md'
        }`}
      >
        {children}

        <button
          onClick={() => setMobileMenuOpen(true)}
          className="fixed right-6 top-4 z-50 flex items-center justify-center rounded-md p-2 text-text hover:text-activesecondary lg:hidden"
          aria-label="Open mobile menu"
        >
          <i className="pi pi-bars text-2xl" />
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-primary/95 backdrop-blur-md border-l border-text/20 shadow-xl">
            <div className="flex items-center justify-between p-6 border-b rounded-b-lg border-text/20">
              <img src="/assets/logo/zide_complete.png" className="h-8 w-auto" alt="Zide Logo" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-md p-2 text-text hover:text-activesecondary"
                aria-label="Close mobile menu"
              >
                <i className="pi pi-times text-xl" />
              </button>
            </div>

            <nav className="flex flex-col p-6 space-y-2">
              {navLinks.map(({ label, href }) => {
                const currentUrl = pathname + currentHash;
                let isActive = false;

                if (href === '/projects') {
                  isActive = pathname.startsWith('/projects');
                } else {
                  isActive = currentUrl === href;
                }

                return (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`relative flex items-center rounded-md px-4 py-3 text-lg font-semibold transition-colors ${
                      isActive ? 'text-activesecondary bg-activesecondary/10' : 'text-text hover:text-activesecondary hover:bg-text/5'
                    }`}
                  >
                    {label}
                    {isActive && <span className="absolute left-0 top-0 bottom-0 w-1 bg-activesecondary rounded-r" />}
                  </Link>
                );
              })}
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t rounded-t-lg border-text/20">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-text font-medium">Language</span>
                  {languageSelector}
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    href="https://discord.gg/45DXQZGpEP"
                    target="_blank"
                    className="flex items-center space-x-2 text-text hover:text-activesecondary transition-colors"
                  >
                    <i className="pi pi-discord text-xl" />
                    <span>Discord</span>
                  </Link>

                  <Link
                    href="https://github.com/ZideStudio"
                    target="_blank"
                    className="flex items-center space-x-2 text-text hover:text-activesecondary transition-colors"
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
