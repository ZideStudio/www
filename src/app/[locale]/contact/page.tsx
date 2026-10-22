import { PageHeader } from '@components/PageHeader';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact us for any questions or suggestions',
  openGraph: {
    title: 'Contact',
    description: 'Contact us for any questions or suggestions',
    url: `https://zide.fr/contact`,
    siteName: 'Zide',
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    type: 'website',
  },
};

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <div className="text-text flex flex-col">
      <PageHeader title={t('title')} descriptionEn={t('description')} descriptionFr={t('description')} imagePath="/assets/background/contact.jpg" />
      <ContactForm />
    </div>
  );
}
