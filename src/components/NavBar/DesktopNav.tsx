import { useActivePath } from '@hooks/useActivePath';
import type { NavLink } from '@models/navlink.model';
import Link from 'next/link';

interface DesktopNavProps {
  navLinks: NavLink[];
}

export function DesktopNav({ navLinks }: DesktopNavProps) {
  const { isActive } = useActivePath(navLinks);

  return (
    <nav className="hidden items-center space-x-2 lg:flex">
      {navLinks.map(({ label, href }) => {
        const isAnchorLink = href.includes('#');
        const LinkComponent = isAnchorLink ? 'a' : Link;
        const active = isActive(href);

        return (
          <div key={label} className="group relative" data-nav-link data-href={href}>
            <LinkComponent
              href={href}
              className={`nav-link relative flex items-center rounded-md px-4 py-2 font-semibold transition-colors ${
                active ? 'text-activesecondary' : 'text-text hover:text-activesecondary'
              }`}
            >
              {label}
              <span
                className={`nav-indicator bg-activesecondary absolute -bottom-5 left-0 h-0.5 transition-all duration-300 ${
                  active ? 'w-full opacity-100' : 'w-0'
                }`}
              />
            </LinkComponent>
          </div>
        );
      })}
    </nav>
  );
}
