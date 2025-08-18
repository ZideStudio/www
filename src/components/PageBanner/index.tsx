import type { Locale } from '@/i18n/config';
import { Tag } from '@components/Tag';
import { useLocale } from 'next-intl';

type PageBannerProps = {
  title: string;
  descriptionEn: string;
  descriptionFr: string;
  imagePath: string;
  tag?: string;
};

export const PageBanner = ({ title, descriptionEn, descriptionFr, imagePath, tag }: PageBannerProps) => {
  const currentLocale = useLocale() as Locale;
  let description = '';
  if (currentLocale === 'fr') {
    description = descriptionFr;
  } else {
    description = descriptionEn;
  }

  return (
    <section className="relative h-96 w-full">
      <div className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat" style={{ backgroundImage: `url('${imagePath}')` }} />

      <div className="to-primary absolute inset-0 -bottom-1 bg-gradient-to-b from-transparent" />

      <div className="text-text relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {tag && <Tag>{tag}</Tag>}
        <h1 className="text-shadow-primary mb-4 text-4xl font-bold text-shadow-lg/30 md:text-6xl">{title}</h1>
        <h2 className="text-shadow-primary mb-6 max-w-2xl text-lg text-shadow-lg/30 md:text-xl">{description}</h2>
      </div>
    </section>
  );
};
