type TitleProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  /** Element to render, so the title can be a real heading where the page outline needs one. */
  as?: 'p' | 'h2' | 'h3';
};

export const Title = ({ children, id, className, as: Component = 'p' }: TitleProps) => (
  <Component
    id={id}
    className={`from-activesecondary to-activeprimary bg-gradient-to-r bg-clip-text text-3xl leading-tight font-bold tracking-tight text-transparent md:text-6xl ${className ?? ''}`}
  >
    {children}
  </Component>
);
