import LanguageSelector from '@components/LanguageSelector';
import type { NavLink } from '@models/navlink.model';
import { getTranslations } from 'next-intl/server';
import { NavbarClient } from './NavbarClient';

/**
 * Server Component for the main navigation bar
 * Gets translations and initializes the navbar with appropriate navigation links
 */
export default async function Navbar() {
  const t = await getTranslations('navbar');

  const navLinks: NavLink[] = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/#about' },
    { label: t('team'), href: '/#team' },
    { label: t('projects'), href: '/projects' },
    { label: t('contact'), href: '/contact' },
  ];

  return <NavbarClient navLinks={navLinks} languageSelector={<LanguageSelector />} />;
}
