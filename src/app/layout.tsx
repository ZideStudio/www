// app/layout.tsx

import Navbar from '@components/NavBar';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import './globals.css';
import { ScrollBar } from '@components/ScrollBar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PrimeReactProvider>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <ScrollBar />
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
