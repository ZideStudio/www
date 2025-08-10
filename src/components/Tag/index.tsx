'use client';

export enum TagPlainType {
  LIGHT = 1,
  DARK = 2,
  SUCCESS = 3,
}

type TagProps = {
  children: React.ReactNode;
  className?: string;
  plain?: TagPlainType;
};

export const Tag = ({ children, plain, className }: TagProps) => {
  const getPlainClasses = () => {
    if (!plain) return 'border border-text/25 text-text px-3 py-1';

    switch (plain) {
      case TagPlainType.LIGHT:
        return 'border-2 border-primary bg-white text-primary px-2 py-0.5';
      case TagPlainType.DARK:
        return 'bg-primary/50 text-text px-2 py-0.5';
      case TagPlainType.SUCCESS:
        return 'bg-green-300/50 text-text px-2 py-0.5';
      default:
        return 'bg-primary/50 text-text px-2 py-0.5';
    }
  };

  return <p className={`w-max rounded-xl text-sm ${getPlainClasses()} ${className ?? ''}`}>{children}</p>;
};
