import tailwindConfig from '../../tailwind.config.js';

type TailwindConfigColors = Record<string, string>;

export const tailwindColors = (tailwindConfig as unknown as { theme: { extend: { colors: TailwindConfigColors } } }).theme.extend.colors;
