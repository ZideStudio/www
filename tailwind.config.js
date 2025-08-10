/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,js,tsx,jsx,pcss,mdx}',
    './src/pages/**/*.{ts,js,tsx,jsx,pcss,mdx}',
    './src/components/**/*.{ts,js,tsx,jsx,pcss,mdx}',
    './src/**/*.{ts,js,tsx,jsx,pcss,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#131313',
        secondary: '#1E1E1E',
        tertiary: '#1A1A1A',
        activeprimary: '#00579F',
        activesecondary: '#06AEF7',
        text: '#ECEEEF',
      },
      fontFamily: {
        article: ['"Source Serif Pro"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
      fontSize: {
        article: '1.25rem',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
