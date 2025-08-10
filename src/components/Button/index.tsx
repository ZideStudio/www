type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  icon?: string;
  iconClassName?: string;
  primary?: boolean;
  onClick?: () => void;
  href?: string;
};

export const Button = ({ children, className, icon, iconClassName, primary, onClick, href }: ButtonProps) => {
  return (
    <a
      className={`ring-offset-background inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold whitespace-nowrap transition-all duration-300 select-none hover:scale-105 md:px-8 ${className ? className : !primary ? 'bg-primary text-text border-text border' : ''} ${primary ? 'bg-text border-primary text-primary border' : ''}`}
      onClick={onClick}
      href={href}
    >
      {children}
      {icon && <i className={`pi pi-${icon} ${iconClassName ? iconClassName : ''}`} />}
    </a>
  );
};
