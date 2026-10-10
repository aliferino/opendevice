import { useState, useSyncExternalStore } from 'react'

function subscribeToMediaQuery(query: string) {
  return (onChange: () => void) => {
    const list = window.matchMedia(query)
    list.addEventListener('change', onChange)
    return () => list.removeEventListener('change', onChange)
  }
}

/**
 * Ikuti sebuah media query tanpa efek samping di render pertama.
 * Dipakai lewat usePrefersReducedMotion dan useIsDesktop.
 */
export function useMediaQuery(query: string): boolean {
  const [subscribe] = useState(() => subscribeToMediaQuery(query))
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  )
}
