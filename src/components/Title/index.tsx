type TitleProps = {
  children: React.ReactNode;
  id?: string;
};

export const Title = ({ children, id }: TitleProps) => (
  <p
    id={id}
    className="from-activesecondary to-activeprimary bg-gradient-to-r bg-clip-text text-3xl leading-tight font-bold tracking-tight text-transparent md:text-6xl"
  >
    {children}
  </p>
);
