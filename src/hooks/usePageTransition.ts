import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap, MOTION, useGSAP } from '../lib/motion'
import { usePrefersReducedMotion } from './useReducedMotion'

/**
 * Transisi halus antar halaman.
 *
 * Setiap kali path berubah, konten baru masuk dengan fade singkat dan geser
 * kecil. Dekorasi murni, jadi tidak mengubah urutan fokus dan tidak
 * mengunci pemakaian keyboard.
 */
export function usePageTransition<T extends HTMLElement>(): React.RefObject<T | null> {
  const container = useRef<T>(null)
  const { pathname } = useLocation()
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (prefersReducedMotion || container.current === null) {
        return
      }
      gsap.fromTo(
        container.current,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out', clearProps: 'transform' },
      )
    },
    {
      dependencies: [pathname, prefersReducedMotion],
      revertOnUpdate: true,
      scope: container,
    },
  )

  // Kembalikan ke posisi awal saat halaman berganti supaya pengguna
  // membaca dari atas, sama seperti navigasi biasa. Hormati reduced motion
  // dengan memakai perilaku instan.
  useEffect(() => {
    const behavior: ScrollBehavior = prefersReducedMotion ? 'auto' : 'smooth'
    const top = MOTION.pageTopAnchor
    window.scrollTo({ top, behavior })
  }, [pathname, prefersReducedMotion])

  return container
}
