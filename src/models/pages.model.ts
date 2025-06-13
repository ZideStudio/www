import type React from 'react';

export type Page = {
  title: string;
  ref: React.RefObject<HTMLDivElement>;
  isSelected: boolean;
};
