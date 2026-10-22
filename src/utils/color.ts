/** WCAG 2.x AA minimum contrast ratios. */
export const MIN_CONTRAST_NORMAL_TEXT = 4.5;
export const MIN_CONTRAST_LARGE_TEXT = 3;

type Rgb = [number, number, number];

const HEX_COLOR_REGEX = /^#?([\da-f]{3}|[\da-f]{6})$/i;
const MIX_STEP = 0.05;

const parseHexColor = (hex: string): Rgb | undefined => {
  const match = HEX_COLOR_REGEX.exec(hex.trim());
  if (!match) return undefined;

  const digits = match[1].length === 3 ? [...match[1]].map((digit) => digit + digit).join('') : match[1];
  return [0, 2, 4].map((index) => parseInt(digits.slice(index, index + 2), 16)) as Rgb;
};

const toHexColor = (rgb: Rgb) => `#${rgb.map((channel) => Math.round(channel).toString(16).padStart(2, '0')).join('')}`;

const getRelativeLuminance = (rgb: Rgb) => {
  const [r, g, b] = rgb.map((channel) => {
    const value = channel / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const getRgbContrastRatio = (rgbA: Rgb, rgbB: Rgb) => {
  const [lighter, darker] = [getRelativeLuminance(rgbA), getRelativeLuminance(rgbB)].sort((a, b) => b - a);
  return (lighter + 0.05) / (darker + 0.05);
};

const mixRgb = (from: Rgb, to: Rgb, amount: number) => from.map((channel, index) => channel + (to[index] - channel) * amount) as Rgb;

/**
 * Keeps `color` when it stands out enough on `background`. Colors too dark to be read at all (below the large text
 * minimum) are progressively mixed with `lightColor` until they reach the normal text minimum, keeping their hue.
 */
export const getReadableColorOnDark = (color: string, background: string, lightColor: string) => {
  const rgb = parseHexColor(color);
  const backgroundRgb = parseHexColor(background);
  const lightRgb = parseHexColor(lightColor);
  if (!rgb || !backgroundRgb || !lightRgb || getRgbContrastRatio(rgb, backgroundRgb) >= MIN_CONTRAST_LARGE_TEXT) return color;

  for (let amount = MIX_STEP; amount < 1; amount += MIX_STEP) {
    const mixed = mixRgb(rgb, lightRgb, amount);
    if (getRgbContrastRatio(mixed, backgroundRgb) >= MIN_CONTRAST_NORMAL_TEXT) return toHexColor(mixed);
  }
  return lightColor;
};
