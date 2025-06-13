import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
export default config;
