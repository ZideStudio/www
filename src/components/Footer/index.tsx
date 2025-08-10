'use client';

import { Button } from '@components/Button';
import { Title } from '@components/Title';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface FooterProps {
  selectedProjectSlug?: string;
}

export const Footer = ({ selectedProjectSlug }: FooterProps) => {
  const t = useTranslations('footer');

  return (
    <footer className="text-text mt-32 border-t border-text/10">
      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center bg-secondary border border-text/10 mx-5 md:mx-24 my-10 p-5 md:p-12 rounded-lg">
        <div className="flex flex-col space-y-5 md:space-y-0 md:w-1/2">
          <Title className="!text-3xl">{t('discord.title')}</Title>
          <p>{t('discord.description')}</p>
        </div>
        <Button icon="arrow-right" primary>
          {t('discord.join')}
        </Button>
      </div>

      <div className="container py-10 mx-auto flex flex-col space-y-10 md:flex-row md:justify-between md:space-y-0">
        {/* Logo */}
        <div className="w-full px-12 md:px-0 md:w-[13rem]">
          <img src="/assets/logo/zide_complete.png" alt="Zide" className="text-text h-12 antiSelect" />
        </div>
        {/* Zide */}
        <div className="w-full px-12 md:px-0 md:w-[13rem]">
          <p className="text-start text-xl font-semibold">{t('collective.category')}</p>
          <hr className="border-gray-600 my-4 w-1/3" />
          <ul>
            <li className="text-start mt-2">{t('collective.title')}</li>
            <li className="text-start mt-1 text-xs text-gray-400">{t('collective.description')}</li>
          </ul>
        </div>
        {/* Projects */}
        <div className="w-full px-12 md:px-0 md:w-[13rem]">
          <p className="text-start text-xl font-semibold">{t('services.category')}</p>
          <hr className="border-gray-600 my-4 w-1/3" />
          <ul className="list-disc list-inside">
            <li className="text-start mt-2">{t('services.websites')}</li>
            <li className="text-start mt-2">{t('services.softwares')}</li>
            <li className="text-start mt-2">{t('services.cli_tools')}</li>
            <li className="text-start mt-2">{t('services.extensions')}</li>
          </ul>
        </div>
        {/* Contact */}
        <div className="w-full px-12 md:px-0 md:w-[13rem]">
          <p className="text-start text-xl font-semibold">{t('contact.category')}</p>
          <hr className="border-gray-600 my-4 w-1/3" />
          <ul className="text-start mt-2">
            <li className="flex flex-row items-center space-x-3 mt-2">
              <i className="pi pi-home" style={{ fontSize: '1rem' }} />
              <p>France</p>
            </li>
            <li className="flex flex-row items-center space-x-3 mt-2">
              <i className="pi pi-twitter" style={{ fontSize: '1rem' }} />
              <Link href="https://x.com/ZideStudio" className="text-blue-400" target="_blank" rel="noopener noreferrer">
                @ZideStudio
              </Link>
            </li>
            <li className="flex flex-row items-center space-x-3 mt-2">
              <i className="pi pi-discord" style={{ fontSize: '1rem' }} />
              <Link href="https://discord.gg/45DXQZGpEP" className="text-blue-400" target="_blank" rel="noopener noreferrer">
                Zide Discord
              </Link>
            </li>
            <li className="flex flex-row items-center space-x-3 mt-2">
              <i className="pi pi-envelope" style={{ fontSize: '1rem' }} />
              <Link href="mailto:contact@zide.fr" className="text-blue-400">
                contact@zide.fr
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-text/10 py-2 flex flex-row space-x-2 justify-center">
        <p className="text-start">© 2024-{new Date().getFullYear()} Zide.</p>
        <p className="text-start">All rights reserved.</p>
      </div>
    </footer>
  );
};
