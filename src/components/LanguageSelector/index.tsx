'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { localeFlags, localeLabels, locales, type Locale } from '../../i18n/config';

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const currentLocale = useLocale() as Locale;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (buttonRef.current && !buttonRef.current.contains(target)) {
        const dropdownElement = document.querySelector('[data-language-dropdown]');
        if (!dropdownElement || !dropdownElement.contains(target)) {
          setIsOpen(false);
        }
      }
    };

    const handleScroll = () => {
      if (isOpen && buttonRef.current) {
        setButtonRect(buttonRef.current.getBoundingClientRect());
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (!isOpen && buttonRef.current) {
      setButtonRect(buttonRef.current.getBoundingClientRect());
    }
    setIsOpen(!isOpen);
  };

  const handleLocaleChange = (locale: Locale) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=lax`;
    router.refresh();
    setIsOpen(false);
  };

  const dropdown =
    isOpen && buttonRect ? (
      <div
        data-language-dropdown
        className="border-text/20 bg-primary/90 fixed z-[9999] min-w-[120px] rounded-md border shadow-lg backdrop-blur-md"
        style={{
          top: buttonRect.bottom + 4,
          left: buttonRect.right - 120,
        }}
      >
        {locales.map((locale) => (
          <button
            key={locale}
            onClick={(e) => {
              e.stopPropagation();
              handleLocaleChange(locale);
            }}
            className={`flex w-full items-center space-x-2 px-3 py-2 text-left text-sm transition-colors first:rounded-t-md last:rounded-b-md ${
              locale === currentLocale ? 'bg-activesecondary/20 text-activesecondary' : 'hover:text-activesecondary text-text hover:bg-white/10'
            }`}
          >
            <span className="text-base">{localeFlags[locale]}</span>
            <span className="font-medium">{localeLabels[locale]}</span>
          </button>
        ))}
      </div>
    ) : null;

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className="hover:text-activesecondary flex items-center justify-center rounded-md p-2 text-text transition-colors"
        aria-label="Select language"
      >
        <span className="text-xl">{localeFlags[currentLocale]}</span>
      </button>

      {typeof document !== 'undefined' && dropdown && createPortal(dropdown, document.body)}
    </>
  );
}
