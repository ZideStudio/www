import { useEffect, useState } from 'react';

/** Whether the user asked the OS to reduce motion. False until mounted, so server and client markup match. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);

    const handleChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener('change', handleChange);

    return () => query.removeEventListener('change', handleChange);
  }, []);

  return reduced;
}
