'use client';

import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed right-8 bottom-8 z-50">
      <button
        onClick={scrollToTop}
        className={`bg-secondary/50 hover:bg-secondary/90 group flex h-12 w-12 transform cursor-pointer items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none ${isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-10 opacity-0'} `}
        aria-label="Retour en haut"
      >
        <i className="pi pi-arrow-up align-middle text-lg" />
      </button>
    </div>
  );
};

export default ScrollToTop;
