import type { Locale } from '@/i18n/config';
import { Tag } from '@components/Tag';
import { useLocale } from 'next-intl';

type PageHeaderProps = {
  title: string;
  descriptionEn: string;
  descriptionFr: string;
  imagePath: string;
  logoPath?: string;
  color?: string;
  dimBackground?: boolean;
  tag?: string;
};

export const PageHeader = ({ title, descriptionEn, descriptionFr, imagePath, logoPath, color, dimBackground, tag }: PageHeaderProps) => {
  const currentLocale = useLocale() as Locale;
  const description = currentLocale === 'fr' ? descriptionFr : descriptionEn;

  return (
    <section className="relative min-h-36 w-full md:min-h-48">
      {/* Clip the blurred layer so it doesn't bleed into the transparent navbar above */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -inset-2 bg-cover bg-center bg-no-repeat ${dimBackground ? 'blur-xs' : 'bg-fixed blur-[2px]'}`}
          style={{ backgroundImage: `url('${imagePath}')` }}
        />
      </div>

      {dimBackground && <div className="bg-primary/60 absolute inset-0" />}

      <div className="to-primary absolute inset-0 -bottom-2 bg-gradient-to-b from-transparent" />

      <div
        className="text-text relative z-10 flex h-full min-h-[inherit] flex-col items-center justify-center px-4 py-3 text-center md:py-6"
        style={color ? ({ '--header-color': color } as React.CSSProperties) : undefined}
      >
        {tag && <Tag>{tag}</Tag>}
        {logoPath && <img src={logoPath} alt="" aria-hidden="true" className="mb-2 h-12 w-auto max-w-full object-contain drop-shadow-lg md:mb-4" />}
        <h1
          className={
            logoPath
              ? 'sr-only'
              : `text-shadow-primary mb-2 text-4xl font-bold text-shadow-lg/30 md:mb-4 md:text-5xl ${color ? 'text-(color:--header-color)' : ''}`
          }
        >
          {title}
        </h1>
        <h2 className="text-shadow-primary max-w-2xl text-lg text-shadow-lg/30">{description}</h2>
      </div>
    </section>
  );
};
