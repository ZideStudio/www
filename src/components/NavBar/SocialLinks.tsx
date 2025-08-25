import Link from 'next/link';

interface SocialLinksProps {
  className?: string;
  showLabels?: boolean;
}

export function SocialLinks({ className = '', showLabels = false }: SocialLinksProps) {
  const socialLinks = [
    {
      name: 'Discord',
      href: 'https://discord.gg/45DXQZGpEP',
      icon: 'pi pi-discord',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/ZideStudio',
      icon: 'pi pi-github',
    },
  ];

  return (
    <div className={`flex items-center ${showLabels ? 'w-full justify-between' : 'space-x-6'} ${className}`}>
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          className="text-text hover:text-activesecondary flex items-center transition-colors"
          aria-label={link.name}
        >
          <i className={`${link.icon} text-2xl`} />
          {showLabels && <span className="ml-2">{link.name}</span>}
        </Link>
      ))}
    </div>
  );
}
