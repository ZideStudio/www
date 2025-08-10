import { Locale } from '@/i18n/config';
import { Tag } from '@components/Tag';
import { useLocale } from 'next-intl';

type PageBannerProps = {
  title: string;
  descriptionEn: string;
  descriptionFr: string;
  imageUrl: string;
  tag?: string;
};

export const PageBanner = ({ title, descriptionEn, descriptionFr, imageUrl, tag }: PageBannerProps) => {
  const currentLocale = useLocale() as Locale;
  let description = '';
  if (currentLocale === 'fr') {
    description = descriptionFr;
  } else {
    description = descriptionEn;
  }

  return (
    <section className="relative h-96 w-full">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url('${imageUrl}')` }} />

      <div className="absolute inset-0 -bottom-1 bg-gradient-to-b from-transparent to-primary" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-text px-4">
        {tag && <Tag>{tag}</Tag>}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg/30 text-shadow-primary">{title}</h1>
        <h2 className="text-lg md:text-xl max-w-2xl mb-6 text-shadow-lg/30 text-shadow-primary">{description}</h2>
      </div>
    </section>
  );
};
