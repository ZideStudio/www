// app/layout.tsx

import { Footer } from '@components/Footer';
import Navbar from '@components/NavBar';
import { ScrollBar } from '@components/ScrollBar';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import { Toaster } from 'react-hot-toast';
import { locales } from '../../i18n/config';
import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Validate that the locale is supported
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    return { title: '404 - Page Not Found' };
  }

  return {
    title: 'Zide',
    description: 'Digital simplicity, greater efficiency',
    other: {
      'Accept-Language': locale,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Validate locale before proceeding
  if (!locales.includes(locale as (typeof locales)[number])) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  // Enable static rendering and set the locale context
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="oSycr6s-tbcxcGBjTexUhsgH0NinsvxBXBhOokbBPRk" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7960999043141760" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PrimeReactProvider>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <Toaster
              toastOptions={{
                style: {
                  border: '10px',
                  background: '#333',
                  color: '#fff',
                },
              }}
            />
            <ScrollBar />
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </PrimeReactProvider>
        <script src="./node_modules/preline/dist/preline.js" />
      </body>
    </html>
  );
}
