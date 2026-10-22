'use client';

import type { Locale } from '@/i18n/config';
import { Button } from '@components/Button';
import type { Project } from '@models/project.model';
import { getDeprecationNote } from '@utils/project';
import { AnimatePresence, motion } from 'motion/react';
import { useLocale, useTranslations } from 'next-intl';
import { useCallback, useEffect, useRef, useState } from 'react';

type DeprecatedModalProps = {
  project: Pick<Project, 'slug' | 'deprecationNoteEn' | 'deprecationNoteFr'>;
};

const getStorageKey = (slug: string) => `deprecated-modal-acknowledged-${slug}`;

export const DeprecatedModal = ({ project }: DeprecatedModalProps) => {
  const t = useTranslations('projects.deprecated_modal');
  const locale = useLocale() as Locale;
  const [isOpen, setIsOpen] = useState(false);
  const acknowledgeButtonRef = useRef<HTMLButtonElement>(null);

  const note = getDeprecationNote(project, locale);

  // Opened after mount to avoid hydration mismatch, skipped if already acknowledged during this session.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(getStorageKey(project.slug))) {
        return;
      }
    } catch {
      // Storage unavailable, always show the modal.
    }
    setIsOpen(true);
  }, [project.slug]);

  const acknowledge = useCallback(() => {
    try {
      sessionStorage.setItem(getStorageKey(project.slug), 'true');
    } catch {
      // Storage unavailable, the modal will be shown again on next visit.
    }
    setIsOpen(false);
  }, [project.slug]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        acknowledge();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscapeKey);
    acknowledgeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, acknowledge]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-primary/80 fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 backdrop-blur-sm"
        >
          <motion.div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="deprecated-modal-title"
            aria-describedby="deprecated-modal-description"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-secondary border-text/10 text-text my-auto flex w-full max-w-xl flex-col space-y-5 rounded-3xl border p-5 shadow-2xl sm:p-8 lg:max-w-2xl"
          >
            <div className="flex flex-col items-center space-y-4 text-center sm:flex-row sm:items-start sm:space-y-0 sm:space-x-4 sm:text-left">
              <div className="bg-warning/10 text-warning flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
                <i className="pi pi-exclamation-triangle text-xl" aria-hidden="true" />
              </div>
              <div className="flex flex-col space-y-2">
                <h2 id="deprecated-modal-title" className="text-xl font-semibold sm:text-2xl lg:whitespace-nowrap">
                  {t('title')}
                </h2>
                <p id="deprecated-modal-description" className="text-text/75 text-sm sm:text-base">
                  {t('description')}
                </p>
              </div>
            </div>

            {note && <p className="border-text/25 text-text/60 border-l-2 pl-4 text-sm break-words">{note}</p>}

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
              <Button href="/projects">
                <i className="pi pi-arrow-left" aria-hidden="true" />
                {t('back')}
              </Button>
              <Button primary onClick={acknowledge} ref={acknowledgeButtonRef}>
                {t('acknowledge')}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
