'use client';

import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`bg-secondary/50 hover:bg-secondary/90 group focus-visible:ring-activesecondary fixed right-8 bottom-8 z-50 flex h-12 w-12 transform cursor-pointer items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 ${isVisible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-10 opacity-0'}`}
      aria-label="Retour en haut"
      title="Retour en haut"
      tabIndex={isVisible ? 0 : -1}
    >
      <i className="pi pi-arrow-up align-middle text-lg" />
    </button>
  );
};

export default ScrollToTop;
