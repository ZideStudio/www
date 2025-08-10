type TitleProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export const Title = ({ children, id, className }: TitleProps) => (
  <p
    id={id}
    className={`from-activesecondary to-activeprimary bg-gradient-to-r bg-clip-text text-3xl leading-tight font-bold tracking-tight text-transparent md:text-6xl ${className}`}
  >
    {children}
  </p>
);
