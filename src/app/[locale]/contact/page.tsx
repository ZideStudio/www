import type { Metadata } from 'next';
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
  return <ContactForm />;
}
