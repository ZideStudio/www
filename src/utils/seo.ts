import type { Locale } from '@/i18n/config';
import { locales } from '@/i18n/config';
import type { Metadata } from 'next';

export const SITE_URL = 'https://zide.fr';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/og/zide_banner.png`;

const OPEN_GRAPH_LOCALES: Record<Locale, string> = {
  en: 'en_US',
  fr: 'fr_FR',
};

export const getLocalizedUrl = (locale: Locale, path = '') => `${SITE_URL}/${locale}${path}`;

export const getLanguageAlternates = (path = '') => ({
  ...Object.fromEntries(locales.map((locale) => [locale, getLocalizedUrl(locale, path)])),
  'x-default': getLocalizedUrl('en', path),
});

type PageMetadataOptions = {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  image?: string;
};

export const buildPageMetadata = ({ locale, path = '', title, description, image = DEFAULT_OG_IMAGE }: PageMetadataOptions): Metadata => {
  const url = getLocalizedUrl(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Zide',
      images: [{ url: image, alt: title }],
      locale: OPEN_GRAPH_LOCALES[locale],
      alternateLocale: locales.filter((other) => other !== locale).map((other) => OPEN_GRAPH_LOCALES[other]),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
};
