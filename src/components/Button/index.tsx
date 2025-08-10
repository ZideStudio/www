type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  icon?: string;
  iconClassName?: string;
  onClick?: () => void;
};

export const Button = ({ children, className, icon, iconClassName, onClick }: ButtonProps) => {
  return (
    <a
      className={`ring-offset-background inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold whitespace-nowrap transition-all duration-300 select-none hover:scale-105 md:px-8 ${className ? className : 'bg-primary text-text border-text border'}`}
      onClick={onClick}
    >
      {children}
      {icon && <i className={`pi pi-${icon} ${iconClassName ? iconClassName : ''}`} />}
    </a>
  );
};
