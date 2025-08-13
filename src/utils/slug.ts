/**
 * Converts a string to a URL-safe slug
 * - Converts to lowercase
 * - Replaces spaces with hyphens
 * - Removes special characters and accents
 * - Trims leading/trailing hyphens
 */
export const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
};
