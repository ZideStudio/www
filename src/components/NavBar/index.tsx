'use client';

import { Button } from '@components/Button';
import LanguageSelector from '@components/LanguageSelector';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations('navbar');

  const NAV_LINKS = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/#about' },
    { label: t('projects'), href: '/projects' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`navbar-animate sticky top-0 z-50 w-full overflow-visible py-2 transition-all duration-100 ${
        scrolled ? 'border-text/20 bg-primary/20 border-b shadow-sm backdrop-blur-md' : 'border-b border-transparent backdrop-blur-md'
      }`}
    >
      <div className="flex h-12 w-full items-center justify-between overflow-visible px-24 md:h-16">
        <Link href="/" className="group flex items-center space-x-3">
          <img src="/assets/logo/zide_complete.png" className="h-10 w-auto sm:h-12" alt="Zide Logo" />
        </Link>

        <nav className="hidden items-center space-x-2 md:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <div key={label} className="group relative">
                <Link
                  href={href}
                  className={`relative flex items-center rounded-md px-4 py-2 font-semibold transition-colors ${
                    isActive ? 'text-activesecondary' : 'hover:text-activesecondary text-text'
                  }`}
                >
                  {label}
                  <span
                    className={`bg-activesecondary absolute -bottom-5 left-0 h-0.5 transition-all duration-300 ${isActive ? 'w-full opacity-100' : 'w-0'}`}
                  />
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Actions à droite */}
        <div className="relative flex items-center justify-center space-x-4 align-middle">
          <LanguageSelector />
          <Link href="https://discord.gg/45DXQZGpEP" target="_blank">
            <i className="pi pi-discord text-text align-middle text-2xl" />
          </Link>
          <Button icon="github" primary>
            Open GitHub
          </Button>
        </div>
      </div>
    </header>
  );
}
