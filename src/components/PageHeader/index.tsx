import type { Locale } from '@/i18n/config';
import { Tag } from '@components/Tag';
import { useLocale } from 'next-intl';

type PageHeaderProps = {
  title: string;
  descriptionEn: string;
  descriptionFr: string;
  imagePath: string;
  tag?: string;
};

export const PageHeader = ({ title, descriptionEn, descriptionFr, imagePath, tag }: PageHeaderProps) => {
  const currentLocale = useLocale() as Locale;
  const description = currentLocale === 'fr' ? descriptionFr : descriptionEn;

  return (
    <section className="relative min-h-36 w-full md:min-h-48">
      <div className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat blur-[2px]" style={{ backgroundImage: `url('${imagePath}')` }} />

      <div className="to-primary absolute inset-0 -bottom-2 bg-gradient-to-b from-transparent" />

      <div className="text-text relative z-10 flex h-full min-h-[inherit] flex-col items-center justify-center px-4 py-3 text-center md:py-6">
        {tag && <Tag>{tag}</Tag>}
        <h1 className="text-shadow-primary mb-2 text-4xl font-bold text-shadow-lg/30 md:mb-4 md:text-5xl">{title}</h1>
        <h2 className="text-shadow-primary max-w-2xl text-lg text-shadow-lg/30">{description}</h2>
      </div>
    </section>
  );
};
