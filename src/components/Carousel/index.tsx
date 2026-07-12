'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

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
  const isCooldown = useRef(false);

  const trackRef = useRef<HTMLDivElement>(null);
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
          className="flex items-stretch"
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
              className={`flex shrink-0 px-2 [&>*]:h-full ${numVisible === 1 ? 'w-full basis-full' : 'w-1/3 basis-1/3'}`}
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
