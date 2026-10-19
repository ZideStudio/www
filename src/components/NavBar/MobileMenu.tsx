import { useActivePath } from '@hooks/useActivePath';
import type { NavLink } from '@models/navlink.model';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { Link as IntlLink } from '../../i18n/routing';
import { SocialLinks } from './SocialLinks';

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavLink[];
  onClose: () => void;
  languageSelector: React.ReactNode;
}

export function MobileMenu({ isOpen, navLinks, onClose, languageSelector }: MobileMenuProps) {
  const { isActive } = useActivePath(navLinks);

  const handleAnchorClick = (href: string) => {
    if (href.includes('#')) {
      const [, hash] = href.split('#');
      window.location.hash = hash;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <motion.div
            className="bg-primary/95 border-text/20 absolute top-0 right-0 h-full w-80 max-w-[85vw] border-l shadow-xl backdrop-blur-md"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
          >
            {/* Header */}
            <div className="border-text/20 flex items-center justify-between rounded-b-lg border-b p-6">
              <Image src="/assets/logo/zide_complete.png" className="h-8 w-auto" alt="Zide Logo" width={128} height={32} />
              <button
                onClick={onClose}
                className="text-text hover:text-activesecondary flex items-center justify-center rounded-md p-2"
                aria-label="Close mobile menu"
              >
                <i className="pi pi-times text-xl" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-2 p-6">
              {navLinks.map(({ label, href }) => {
                const active = isActive(href);
                const isAnchorLink = href.includes('#');

                const LinkComponent = isAnchorLink ? 'a' : IntlLink;
                const linkProps = isAnchorLink
                  ? {
                      href,
                      onClick: () => {
                        onClose();
                        handleAnchorClick(href);
                      },
                    }
                  : { href, onClick: onClose };

                return (
                  <LinkComponent
                    key={label}
                    {...linkProps}
                    className={`relative flex items-center rounded-md px-4 py-3 text-lg font-semibold transition-colors ${
                      active ? 'text-activesecondary bg-activesecondary/10' : 'text-text hover:text-activesecondary hover:bg-text/5'
                    }`}
                  >
                    {label}
                    {active && <span className="bg-activesecondary absolute top-0 bottom-0 left-0 w-1 rounded-r" />}
                  </LinkComponent>
                );
              })}
            </nav>

            {/* Footer with language selector and social links */}
            <div className="border-text/20 absolute right-0 bottom-0 left-0 rounded-t-lg border-t p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-text font-medium">Language</span>
                  {languageSelector}
                </div>

                <div className="flex items-center justify-between">
                  <SocialLinks showLabels={true} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
