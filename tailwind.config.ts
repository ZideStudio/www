import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lubri: ['"WDXL Lubrifont SC"', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
export default config;
