'use client';

import { useScroll } from '@hooks/useScroll';
import type { NavLink } from '@models/navlink.model';
import { useState } from 'react';
import { DesktopNav } from './DesktopNav';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { SocialLinks } from './SocialLinks';

interface NavbarClientProps {
  navLinks: NavLink[];
  languageSelector: React.ReactNode;
}

export function NavbarClient({ navLinks, languageSelector }: NavbarClientProps) {
  const scrolled = useScroll(10);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`navbar-animate sticky top-0 z-50 w-full overflow-visible py-2 transition-all duration-100 ${
          scrolled ? 'border-text/20 bg-primary/20 border-b shadow-sm backdrop-blur-md' : 'border-b border-transparent backdrop-blur-md'
        }`}
      >
        <div className="flex h-12 w-full items-center justify-between overflow-visible px-6 md:h-16 md:px-24">
          <Logo />
          <DesktopNav navLinks={navLinks} />

          <div className="relative hidden min-w-2xs items-center justify-center space-x-6 align-middle lg:flex">
            {languageSelector}
            <SocialLinks />
          </div>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="text-text hover:text-activesecondary fixed top-4 right-6 z-50 flex items-center justify-center rounded-md p-2 lg:hidden"
          aria-label="Open mobile menu"
        >
          <i className="pi pi-bars text-2xl" />
        </button>
      </header>

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileMenuOpen} navLinks={navLinks} onClose={() => setMobileMenuOpen(false)} languageSelector={languageSelector} />
    </>
  );
}
