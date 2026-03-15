'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

// Utility to generate a unique class name per instance
function uniqueClass(suffix: string) {
  return `carousel-h-${suffix}-${Math.random().toString(36).slice(2, 8)}`;
}

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  speed?: number;
}

const getNumVisible = () => (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3);

export const Carousel = <T,>({ items, renderItem, speed = 5000 }: CarouselProps<T>) => {
  const [numVisible, setNumVisible] = useState(getNumVisible());
  const [currentIndex, setCurrentIndex] = useState(getNumVisible());
  const [slideWidth, setSlideWidth] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [maxHeightMobile, setMaxHeightMobile] = useState<number | undefined>(undefined);
  const [maxHeightDesktop, setMaxHeightDesktop] = useState<number | undefined>(undefined);
  const [mobileClass, setMobileClass] = useState<string>('');
  const [desktopClass, setDesktopClass] = useState<string>('');
  const isCooldown = useRef(false);

  // Refs for all offscreen slides (for measuring height)
  const measureRefsMobile = useRef<Array<HTMLDivElement | null>>([]);
  const measureRefsDesktop = useRef<Array<HTMLDivElement | null>>([]);

  const trackRef = useRef<HTMLDivElement>(null);

  // Stable refs for all slides (for measuring height)
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);

  const total = items.length;

  const extendedItems = [...items.slice(-numVisible), ...items, ...items.slice(0, numVisible)];

  // Update numVisible and currentIndex on responsive resize
  useEffect(() => {
    const handleResize = () => {
      const newVisible = getNumVisible();
      setNumVisible(newVisible);
      setCurrentIndex(newVisible);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update slide width on mount and resize
  useLayoutEffect(() => {
    const updateSlideWidth = () => {
      // Use the first visible slide as reference
      const ref = slideRefs.current[numVisible] || slideRefs.current[0];
      if (ref) {
        setSlideWidth(ref.offsetWidth);
      }
    };
    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);
    return () => window.removeEventListener('resize', updateSlideWidth);
  }, [numVisible]);

  // Synchronize all slides to the max height for mobile and desktop separately
  useEffect(() => {
    const measure = () => {
      // Mobile
      let maxMobile = 0;
      if (measureRefsMobile.current.length) {
        for (let i = 0; i < measureRefsMobile.current.length; i++) {
          const ref = measureRefsMobile.current[i];
          if (ref) {
            maxMobile = Math.max(maxMobile, ref.offsetHeight);
          }
        }
        setMaxHeightMobile(maxMobile);
      }
      // Desktop
      let maxDesktop = 0;
      if (measureRefsDesktop.current.length) {
        for (let i = 0; i < measureRefsDesktop.current.length; i++) {
          const ref = measureRefsDesktop.current[i];
          if (ref) {
            maxDesktop = Math.max(maxDesktop, ref.offsetHeight);
          }
        }
        setMaxHeightDesktop(maxDesktop);
      }
    };

    // Listen for image loads inside all offscreen slides
    const imgs: HTMLImageElement[] = [];
    [...measureRefsMobile.current, ...measureRefsDesktop.current].forEach((ref) => {
      if (ref) {
        const images = Array.from(ref.getElementsByTagName('img'));
        images.forEach((img) => {
          imgs.push(img);
          img.addEventListener('load', measure);
        });
      }
    });

    // Timeout to let browser paint and images load
    const id = setTimeout(measure, 50);

    window.addEventListener('resize', measure);

    return () => {
      clearTimeout(id);
      window.removeEventListener('resize', measure);
      imgs.forEach((img) => img.removeEventListener('load', measure));
    };
  }, [items, extendedItems, numVisible]);

  // Générer dynamiquement les classes CSS pour la hauteur mobile et desktop
  useEffect(() => {
    let mobile = '';
    let desktop = '';
    if (typeof window !== 'undefined') {
      mobile = uniqueClass('mobile');
      desktop = uniqueClass('desktop');
      setMobileClass(mobile);
      setDesktopClass(desktop);

      // Supprimer les anciennes balises style si elles existent
      const oldMobile = document.getElementById('carousel-style-mobile');
      if (oldMobile) oldMobile.remove();
      const oldDesktop = document.getElementById('carousel-style-desktop');
      if (oldDesktop) oldDesktop.remove();

      // Créer et injecter la balise style pour mobile
      if (maxHeightMobile) {
        const styleMobile = document.createElement('style');
        styleMobile.id = 'carousel-style-mobile';
        styleMobile.innerHTML = `.${mobile} { height: ${maxHeightMobile}px !important; }`;
        document.head.appendChild(styleMobile);
      }
      // Créer et injecter la balise style pour desktop
      if (maxHeightDesktop) {
        const styleDesktop = document.createElement('style');
        styleDesktop.id = 'carousel-style-desktop';
        styleDesktop.innerHTML = `@media (min-width: 640px) { .${desktop} { height: ${maxHeightDesktop}px !important; } }`;
        document.head.appendChild(styleDesktop);
      }
    }
  }, [maxHeightMobile, maxHeightDesktop]);

  // Générer dynamiquement les classes CSS pour la hauteur mobile et desktop
  useEffect(() => {
    let mobile = '';
    let desktop = '';
    if (typeof window !== 'undefined') {
      mobile = uniqueClass('mobile');
      desktop = uniqueClass('desktop');
      setMobileClass(mobile);
      setDesktopClass(desktop);

      // Supprimer les anciennes balises style si elles existent
      const oldMobile = document.getElementById('carousel-style-mobile');
      if (oldMobile) oldMobile.remove();
      const oldDesktop = document.getElementById('carousel-style-desktop');
      if (oldDesktop) oldDesktop.remove();

      // Créer et injecter la balise style pour mobile
      if (maxHeightMobile) {
        const styleMobile = document.createElement('style');
        styleMobile.id = 'carousel-style-mobile';
        styleMobile.innerHTML = `.${mobile} { height: ${maxHeightMobile}px !important; }`;
        document.head.appendChild(styleMobile);
      }
      // Créer et injecter la balise style pour desktop
      if (maxHeightDesktop) {
        const styleDesktop = document.createElement('style');
        styleDesktop.id = 'carousel-style-desktop';
        styleDesktop.innerHTML = `@media (min-width: 640px) { .${desktop} { height: ${maxHeightDesktop}px !important; } }`;
        document.head.appendChild(styleDesktop);
      }
    }
  }, [maxHeightMobile, maxHeightDesktop]);

  // Navigation handlers
  const handleNext = () => {
    if (isCooldown.current) return;
    setCurrentIndex((prev) => prev + 1);
    isCooldown.current = true;
    setTimeout(() => {
      isCooldown.current = false;
    }, 500);
  };

  const handlePrev = () => {
    if (isCooldown.current) return;
    setCurrentIndex((prev) => prev - 1);
    isCooldown.current = true;
    setTimeout(() => {
      isCooldown.current = false;
    }, 500);
  };

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, speed);
    return () => clearInterval(interval);
  }, [isPaused, speed, numVisible]);

  // Infinite loop
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex >= total + numVisible) {
        setTransitionEnabled(false);
        setCurrentIndex(numVisible);
      } else if (currentIndex < numVisible) {
        setTransitionEnabled(false);
        setCurrentIndex(total + numVisible - 1);
      }
    };
    const trackNode = trackRef.current;
    if (!trackNode) return;
    trackNode.addEventListener('transitionend', handleTransitionEnd);
    return () => trackNode.removeEventListener('transitionend', handleTransitionEnd);
  }, [currentIndex, numVisible, total]);

  // Re-enable transition after jump
  useEffect(() => {
    if (!transitionEnabled) {
      const id = setTimeout(() => setTransitionEnabled(true), 50);
      return () => clearTimeout(id);
    }
  }, [transitionEnabled]);

  return (
    <div
      className="flex w-full flex-row items-center space-x-6 overflow-hidden py-5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="border-text bg-secondary cursor-pointer rounded-lg p-3" onClick={handlePrev}>
        <i className="pi pi-chevron-left text-text" />
      </div>
      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * slideWidth}px)`,
            transition: transitionEnabled ? 'transform 0.5s ease' : 'none',
          }}
        >
          {extendedItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                slideRefs.current[index] = el;
              }}
              className={`flex shrink-0 flex-col px-2 ${numVisible === 1 ? 'w-full basis-full' : 'w-1/3 basis-1/3'} ${mobileClass} sm:${desktopClass}`}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
        {/* Offscreen render for measuring all slides - MOBILE */}
        <div
          style={{
            position: 'absolute',
            visibility: 'hidden',
            pointerEvents: 'none',
            zIndex: -1,
            width: '100%',
            top: 0,
            left: 0,
            opacity: 0,
            display: 'block',
          }}
          aria-hidden="true"
        >
          {extendedItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                measureRefsMobile.current[index] = el;
              }}
              className={`flex w-full basis-full flex-col px-2`}
              style={{ width: '100%' }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
        {/* Offscreen render for measuring all slides - DESKTOP */}
        <div
          style={{
            position: 'absolute',
            left: '-99999px',
            top: 0,
            opacity: 0,
            pointerEvents: 'none',
            zIndex: -1,
            width: '33.3333%',
            display: 'block',
          }}
          aria-hidden="true"
        >
          {extendedItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                measureRefsDesktop.current[index] = el;
              }}
              className={`hidden w-1/3 basis-1/3 flex-col px-2 sm:flex`}
              style={{ width: '33.3333%' }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
      <div className="border-text bg-secondary cursor-pointer rounded-lg p-3" onClick={handleNext}>
        <i className="pi pi-chevron-right text-text" />
      </div>
    </div>
  );
};
