import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lubri: ['"WDXL Lubrifont SC"', 'sans-serif'],
        article: ['"Source Serif Pro"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
      fontSize: {
        article: '1.25rem',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
export default config;
