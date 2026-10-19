'use client';
import { tailwindColors } from '@constants/tailwindColors';
import { type HTMLProps, useEffect, useState } from 'react';
import defaultTailwindColors from 'tailwindcss/colors';

const { activeprimary, gridfade } = tailwindColors;

interface BackgroundGridProps {
  interactible?: boolean;
  defaultColor?: string;
  cellSize?: string | number;
  strokeWidth?: number | string;
  className?: string;
  fade?: boolean;
}

const BackgroundGrid = ({
  interactible,
  defaultColor = activeprimary,
  cellSize = '5px',
  strokeWidth = '5px',
  fade = true,
}: Partial<BackgroundGridProps> & HTMLProps<HTMLDivElement>) => {
  const [dynamicColor, setDynamicColor] = useState(defaultColor);
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });
  const [maskX, setMaskX] = useState(50);
  const [maskY, setMaskY] = useState(50);

  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' stroke='${dynamicColor}' stroke-width='${strokeWidth}' fill-opacity='0.4'>
      <path d='M 0 0 L 200 200'/>
      <path d='M 200 0 L 0 200'/>
    </svg>
  `;

  const svgStatic = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' stroke='${defaultTailwindColors.white}' stroke-width='${strokeWidth}' fill-opacity='0.4'>
      <path d='M 0 0 L 200 200'/>
      <path d='M 200 0 L 0 200'/>
    </svg>
  `;

  const svgDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  const svgDataUrlStatic = `data:image/svg+xml;utf8,${encodeURIComponent(svgStatic)}`;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const xRatio = event.clientX / window.innerWidth;
      const yRatio = event.clientY / window.innerHeight;

      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const red = Math.round(255 * xRatio);
      const green = Math.round(255 * yRatio);
      const blue = 180;

      setDynamicColor(`rgb(${red}, ${green}, ${blue})`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setMaskX((cursorPosition.x / window.innerWidth) * 100);
    setMaskY((cursorPosition.y / window.innerHeight) * 100);
  });

  return (
    <div style={{ zIndex: 0 }}>
      {interactible ? (
        <div
          className="pointer-events-none absolute inset-0 h-full"
          style={{
            backgroundImage: `url("${svgDataUrl}")`,
            backgroundRepeat: 'repeat',
            backgroundSize: cellSize,
            maskImage: fade ? `radial-gradient(circle at ${maskX}% ${maskY}%, ${defaultTailwindColors.white}, transparent 70%)` : undefined,
            WebkitMaskImage: fade ? `radial-gradient(circle at ${maskX}% ${maskY}%, ${defaultTailwindColors.white}, transparent 70%)` : undefined,
          }}
        />
      ) : (
        <div
          className="absolute h-full w-full"
          style={{
            backgroundImage: `url("${svgDataUrlStatic}")`,
            backgroundRepeat: 'repeat',
            backgroundSize: cellSize,
            maskImage: `linear-gradient(to bottom, ${defaultTailwindColors.white} 1%, ${gridfade} 100%)`,
            WebkitMaskImage: `linear-gradient(to bottom, ${defaultTailwindColors.white} 1%, ${gridfade} 100%)`,
            opacity: 1,
            filter: 'opacity(0.1)',
          }}
        />
      )}
    </div>
  );
};

export default BackgroundGrid;
