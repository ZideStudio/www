'use client';

import { Button } from '@components/Button';
import { Title } from '@components/Title';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="text-text border-text/10 mt-32 border-t">
      <div className="bg-secondary border-text/10 mx-5 my-10 flex flex-col items-center justify-between space-y-5 rounded-lg border p-5 md:mx-24 md:flex-row md:space-y-0 md:p-12">
        <div className="flex flex-col space-y-5 md:w-1/2 md:space-y-0">
          <Title className="!text-3xl">{t('discord.title')}</Title>
          <p>{t('discord.description')}</p>
        </div>
        <Button href="https://discord.gg/45DXQZGpEP" target="_blank" icon="arrow-right" primary>
          {t('discord.join')}
        </Button>
      </div>

      <div className="container mx-auto flex flex-col space-y-10 py-10 md:flex-row md:justify-between md:space-y-0">
        {/* Logo */}
        <div className="w-full px-12 md:w-[13rem] md:px-0">
          <Image src="/assets/logo/zide_complete.png" alt="Zide" className="text-text antiSelect h-12 w-auto" width={82} height={48} />
        </div>
        {/* Zide */}
        <div className="w-full px-12 md:w-[13rem] md:px-0">
          <p className="text-start text-xl font-semibold">{t('collective.category')}</p>
          <hr className="border-text/10 my-4 w-1/3" />
          <ul>
            <li className="mt-2 text-start">{t('collective.title')}</li>
            <li className="mt-1 text-start text-xs text-gray-400">{t('collective.description')}</li>
          </ul>
        </div>
        {/* Projects */}
        <div className="w-full px-12 md:w-[13rem] md:px-0">
          <p className="text-start text-xl font-semibold">{t('services.category')}</p>
          <hr className="border-text/10 my-4 w-1/3" />
          <ul className="list-inside list-disc">
            <li className="mt-2 text-start">{t('services.websites')}</li>
            <li className="mt-2 text-start">{t('services.softwares')}</li>
            <li className="mt-2 text-start">{t('services.cli_tools')}</li>
            <li className="mt-2 text-start">{t('services.extensions')}</li>
          </ul>
        </div>
        {/* Contact */}
        <div className="w-full px-12 md:w-[13rem] md:px-0">
          <p className="text-start text-xl font-semibold">{t('contact.category')}</p>
          <hr className="border-text/10 my-4 w-1/3" />
          <ul className="mt-2 text-start">
            <li className="mt-2 flex flex-row items-center space-x-3">
              <i className="pi pi-home" style={{ fontSize: '1rem' }} />
              <p>France</p>
            </li>
            <li className="mt-2 flex flex-row items-center space-x-3">
              <i className="pi pi-twitter" style={{ fontSize: '1rem' }} />
              <Link href="https://x.com/ZideStudio" className="text-blue-400" target="_blank" rel="noopener noreferrer">
                @ZideStudio
              </Link>
            </li>
            <li className="mt-2 flex flex-row items-center space-x-3">
              <i className="pi pi-discord" style={{ fontSize: '1rem' }} />
              <Link href="https://discord.gg/45DXQZGpEP" className="text-blue-400" target="_blank" rel="noopener noreferrer">
                Zide Discord
              </Link>
            </li>
            <li className="mt-2 flex flex-row items-center space-x-3">
              <i className="pi pi-envelope" style={{ fontSize: '1rem' }} />
              <Link href="mailto:contact@zide.fr" className="text-blue-400">
                contact@zide.fr
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-text/10 flex flex-row justify-center space-x-2 border-t py-2">
        <p className="text-start">© 2024-{new Date().getFullYear()} Zide.</p>
        <p className="text-start">All rights reserved.</p>
      </div>
    </footer>
  );
};
