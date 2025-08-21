import LanguageSelector from '@components/LanguageSelector';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
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
      <div className="flex h-12 w-full items-center justify-between overflow-visible px-6 md:h-16 md:px-24">
        <Link href="/" className="group flex min-w-2xs items-center space-x-3">
          <Image src="/assets/logo/zide_complete.png" className="h-10 w-auto sm:h-12" alt="Zide Logo" width={192} height={48} />
        </Link>

        <nav className="hidden items-center space-x-2 lg:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const isAnchorLink = href.includes('#');
            const LinkComponent = isAnchorLink ? 'a' : Link;

            return (
              <div key={label} className="group relative" data-nav-link data-href={href}>
                <LinkComponent
                  href={href}
                  className="nav-link text-text hover:text-activesecondary relative flex items-center rounded-md px-4 py-2 font-semibold transition-colors"
                >
                  {label}
                  <span className="nav-indicator bg-activesecondary absolute -bottom-5 left-0 h-0.5 w-0 transition-all duration-300" />
                </LinkComponent>
              </div>
            );
          })}
        </nav>

        <div className="relative hidden min-w-2xs items-center justify-center space-x-6 align-middle lg:flex">
          <LanguageSelector />
          <Link href="https://discord.gg/45DXQZGpEP" target="_blank">
            <i className="pi pi-discord text-text hover:text-activesecondary align-middle text-2xl" />
          </Link>
          <Link href="https://github.com/ZideStudio" target="_blank">
            <i className="pi pi-github text-text hover:text-activesecondary align-middle text-2xl" />
          </Link>
        </div>
      </div>
    </NavbarClient>
  );
}
