'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  speed?: number;
}

export const Carousel = <T,>({ items, renderItem, speed = 5000 }: CarouselProps<T>) => {
  const [numVisible, setNumVisible] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(3);
  const [slideWidth, setSlideWidth] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const isCooldown = useRef(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const total = items.length;

  const extendedItems = [...items.slice(-numVisible), ...items, ...items.slice(0, numVisible)];

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const newVisible = isMobile ? 1 : 3;
      setNumVisible(newVisible);
      setCurrentIndex(newVisible);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updateSlideWidth = () => {
    if (slideRef.current) {
      setSlideWidth(slideRef.current.offsetWidth);
    }
  };

  useLayoutEffect(() => {
    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);
    return () => window.removeEventListener('resize', updateSlideWidth);
  }, [numVisible]);

  const handleNext = () => {
    if (isCooldown.current) return;
    setCurrentIndex((prev) => prev + 1);
    isCooldown.current = true;
    setTimeout(() => {
      isCooldown.current = false;
    }, 1000);
  };

  const handlePrev = () => {
    if (isCooldown.current) return;
    setCurrentIndex((prev) => prev - 1);
    isCooldown.current = true;
    setTimeout(() => {
      isCooldown.current = false;
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, speed);
    return () => clearInterval(interval);
  }, []);

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
  }, [currentIndex, numVisible]);

  useEffect(() => {
    if (!transitionEnabled) {
      const id = setTimeout(() => setTransitionEnabled(true), 50);
      return () => clearTimeout(id);
    }
  }, [transitionEnabled]);

  return (
    <div className="flex flex-row items-center w-full py-5 space-x-6 overflow-hidden">
      <div className="p-3 border-text bg-secondary rounded-lg cursor-pointer" onClick={handlePrev}>
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
              ref={index === numVisible ? slideRef : null}
              className={`${numVisible === 1 ? 'w-full basis-full' : 'w-1/3 basis-1/3'} px-2 shrink-0`}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      <div className="p-3 border-text bg-secondary rounded-lg cursor-pointer" onClick={handleNext}>
        <i className="pi pi-chevron-right text-text" />
      </div>
    </div>
  );
};
