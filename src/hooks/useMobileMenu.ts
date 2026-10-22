import { useSyncExternalStore } from 'react';

let mobileMenuOpen = false;
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const setMobileMenuOpen = (open: boolean) => {
  mobileMenuOpen = open;
  listeners.forEach((listener) => {
    listener();
  });
};

/**
 * Hook sharing the mobile menu open state across unrelated components
 * (e.g. the navbar and the scroll-to-top button) without a context provider
 * @returns The current open state and its setter
 */
export function useMobileMenu() {
  const isMobileMenuOpen = useSyncExternalStore(
    subscribe,
    () => mobileMenuOpen,
    () => false,
  );

  return { isMobileMenuOpen, setMobileMenuOpen };
}
