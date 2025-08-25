import { useEffect, useState } from 'react';

/**
 * Hook that tracks the current hash fragment in the URL
 * @returns The current hash string (including the # symbol)
 */
export function useCurrentHash(): string {
  const [currentHash, setCurrentHash] = useState<string>('');

  useEffect(() => {
    setCurrentHash(window.location.hash);

    const updateHash = () => setCurrentHash(window.location.hash);

    const interval = setInterval(updateHash, 50);

    window.addEventListener('hashchange', updateHash);
    window.addEventListener('popstate', updateHash);
    window.addEventListener('load', updateHash);

    return () => {
      clearInterval(interval);
      window.removeEventListener('hashchange', updateHash);
      window.removeEventListener('popstate', updateHash);
      window.removeEventListener('load', updateHash);
    };
  }, []);

  return currentHash;
}
