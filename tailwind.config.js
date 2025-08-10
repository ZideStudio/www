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
        secondary: '#326771',
        tertiary: '#63b9ca',
        activeprimary: '#00579F',
        activesecondary: '#06AEF7',
        text: '#eceeef',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
