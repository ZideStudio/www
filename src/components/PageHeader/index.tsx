import type { Locale } from '@/i18n/config';
import { Tag } from '@components/Tag';
import { useLocale } from 'next-intl';

export type PageHeaderVariant = 'legacy' | 'light';

type PageHeaderProps = {
  title: string;
  descriptionEn: string;
  descriptionFr: string;
  imagePath: string;
  tag?: string;
  /** `legacy` is the full-height header, `light` takes half of the height. On mobile, `light` is always used. */
  variant?: PageHeaderVariant;
};

const VARIANT_CLASSES: Record<PageHeaderVariant, { section: string; title: string; description: string }> = {
  legacy: {
    section: 'min-h-48 md:min-h-96',
    title: 'text-4xl md:text-6xl',
    description: 'text-lg md:text-xl',
  },
  light: {
    section: 'min-h-48',
    title: 'text-4xl md:text-5xl',
    description: 'text-lg',
  },
};

export const PageHeader = ({ title, descriptionEn, descriptionFr, imagePath, tag, variant = 'legacy' }: PageHeaderProps) => {
  const currentLocale = useLocale() as Locale;
  const description = currentLocale === 'fr' ? descriptionFr : descriptionEn;
  const classes = VARIANT_CLASSES[variant];

  return (
    <section className={`relative w-full ${classes.section}`}>
      <div className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat blur-[2px]" style={{ backgroundImage: `url('${imagePath}')` }} />

      <div className="to-primary absolute inset-0 -bottom-2 bg-gradient-to-b from-transparent" />

      <div className="text-text relative z-10 flex h-full min-h-[inherit] flex-col items-center justify-center px-4 py-6 text-center">
        {tag && <Tag>{tag}</Tag>}
        <h1 className={`text-shadow-primary mb-4 font-bold text-shadow-lg/30 ${classes.title}`}>{title}</h1>
        <h2 className={`text-shadow-primary max-w-2xl text-shadow-lg/30 ${classes.description}`}>{description}</h2>
      </div>
    </section>
  );
};
