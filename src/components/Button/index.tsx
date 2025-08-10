import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  icon?: string;
  iconClassName?: string;
  primary?: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
};

export const Button = ({ children, className, icon, iconClassName, primary, onClick, href, target }: ButtonProps) => {
  const childrenWithIcon = (
    <>
      {children}
      {icon && <i className={`pi pi-${icon} ${iconClassName ? iconClassName : ''}`} />}
    </>
  );

  if (!href) {
    return (
      <button
        className={`ring-offset-background inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold whitespace-nowrap transition-all duration-300 select-none hover:scale-105 md:px-8 ${className ? className : !primary ? 'bg-primary text-text border-text border' : ''} ${primary ? 'bg-text border-primary text-primary border' : ''}`}
        onClick={onClick}
      >
        {childrenWithIcon}
      </button>
    );
  }

  return (
    <Link
      className={`ring-offset-background inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold whitespace-nowrap transition-all duration-300 select-none hover:scale-105 md:px-8 ${className ? className : !primary ? 'bg-primary text-text border-text border' : ''} ${primary ? 'bg-text border-primary text-primary border' : ''}`}
      onClick={onClick}
      href={href}
      target={target}
    >
      {childrenWithIcon}
    </Link>
  );
};
