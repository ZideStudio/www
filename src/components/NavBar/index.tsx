import { Button } from '@components/Button';
import LanguageSelector from '@components/LanguageSelector';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { NavbarClient } from './NavbarClient';

export default async function Navbar() {
  const t = await getTranslations('navbar');

  const NAV_LINKS = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/#about' },
    { label: t('projects'), href: '/projects' },
  ];

  return (
    <NavbarClient navLinks={NAV_LINKS} languageSelector={<LanguageSelector />}>
      <div className="flex h-12 w-full items-center justify-between overflow-visible px-6 md:px-24 md:h-16">
        <Link href="/" className="group flex items-center space-x-3 min-w-2xs">
          <img src="/assets/logo/zide_complete.png" className="h-10 w-auto sm:h-12" alt="Zide Logo" />
        </Link>

        <nav className="hidden items-center space-x-2 lg:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <div key={label} className="group relative" data-nav-link data-href={href}>
              <Link
                href={href}
                className="nav-link relative flex items-center rounded-md px-4 py-2 font-semibold transition-colors text-text hover:text-activesecondary"
              >
                {label}
                <span className="nav-indicator bg-activesecondary absolute -bottom-5 left-0 h-0.5 transition-all duration-300 w-0" />
              </Link>
            </div>
          ))}
        </nav>

        <div className="relative hidden items-center justify-center space-x-4 align-middle min-w-2xs lg:flex">
          <LanguageSelector />
          <Link href="https://discord.gg/45DXQZGpEP" target="_blank">
            <i className="pi pi-discord text-text align-middle text-2xl" />
          </Link>
          <Button href="https://github.com/ZideStudio" target="_blank" icon="github" primary>
            Open GitHub
          </Button>
        </div>
      </div>
    </NavbarClient>
  );
}
