import { useMediaQuery } from './useMediaQuery'

/** True bila pengguna meminta animasi diminimalkan di sistem operasinya. */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}

/** True mulai dari breakpoint desktop di src/styles/tokens.css (1024px). */
export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 1024px)')
}
