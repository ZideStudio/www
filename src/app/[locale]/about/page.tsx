import type { Metadata } from 'next';
import { Languages } from './languages';
import { Presentation } from './presentation';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Zide is a collective of passionate developers building innovative tools, whether for fellow developers or for the general public',
  openGraph: {
    title: 'About Us',
    description: 'Zide is a collective of passionate developers building innovative tools, whether for fellow developers or for the general public',
    url: `https://zide.fr/about`,
    siteName: 'Zide',
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col space-y-40 py-16 md:py-24">
      <Presentation />
      <Languages />
    </div>
  );
}
