type TagProps = {
  children: React.ReactNode;
};

export const Tag = ({ children }: TagProps) => <p className="border-text/25 text-text w-max rounded-xl border px-3 py-1 text-sm">{children}</p>;
