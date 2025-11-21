'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';

type ImageModalProps = {
  image: { src: string; alt?: string } | null;
  onClose: () => void;
};

export const ImageModal = ({ image, onClose }: ImageModalProps) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (image) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [image, onClose]);
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative flex max-h-[90vh] w-full max-w-sm flex-col items-center space-y-4 sm:max-w-2xl lg:max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {image.alt && <h3 className="px-2 text-center text-lg font-medium text-white sm:px-4 sm:text-xl">{image.alt}</h3>}

            <motion.img
              src={image.src}
              alt={image.alt}
              className="max-h-[70vh] max-w-full rounded-2xl object-contain shadow-2xl sm:max-h-[80vh] sm:rounded-3xl lg:rounded-[1.5rem]"
              layoutId={`image-${image.src}`}
            />

            <button
              onClick={onClose}
              className="absolute -top-8 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-lg text-white/70 transition-colors duration-200 hover:bg-black/70 hover:text-white sm:-top-12 sm:-right-4 sm:h-10 sm:w-10 sm:text-2xl"
              aria-label="Fermer l'image"
            >
              <i className="pi pi-times" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
