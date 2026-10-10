import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'
import { gsap, MOTION, REVEALED_CLASS, REVEAL_SELECTOR, ScrollTrigger, useGSAP } from '../lib/motion'
import { usePrefersReducedMotion } from './useReducedMotion'

export interface ScrollRevealOptions {
  /** true berarti animasi juga dijalankan ulang setiap kali dependensi berubah. */
  readonly replayOnDependencies?: boolean
  /** Jeda antar elemen di dalam satu kelompok. */
  readonly stagger?: number
  /** Mulai animasi begitu elemen terlihat, tanpa animasi keluar masuk. */
  readonly once?: boolean
}

/**
 * Reveal saat scroll memakai ScrollTrigger.batch.
 *
 * Kenapa memakai hook ini dan bukan useEffect mentah:
 * 1. useGSAP memakai gsap.context, jadi semua Tween dan ScrollTrigger yang
 *    dibuat di dalamnya otomatis di-revert saat komponen dilepas.
 * 2. Selector di dalam scope hanya mencari turunan container, jadi tidak
 *    perlu satu ref untuk setiap elemen.
 *
 * Tinggal tambahkan atribut data-reveal pada elemen yang ingin dianimasikan.
 */
export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {},
): RefObject<T | null> {
  const container = useRef<T>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const { replayOnDependencies = false, stagger = MOTION.stagger, once = true } = options

  useGSAP(
    () => {
      const targets = gsap.utils.toArray<HTMLElement>(REVEAL_SELECTOR)
      if (targets.length === 0) {
        return
      }

      // Hormati preferensi pengguna. Tanpa animasi, elemen langsung terlihat.
      if (prefersReducedMotion) {
        gsap.set(targets, { clearProps: 'all', autoAlpha: 1, y: 0, opacity: 1 })
        targets.forEach((element) => element.classList.add(REVEALED_CLASS))
        return
      }

      gsap.set(targets, { autoAlpha: 0, y: MOTION.distance })

      ScrollTrigger.batch(targets, {
        start: MOTION.start,
        once,
        interval: 0.1,
        batchMax: 6,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: MOTION.duration,
            ease: 'power2.out',
            stagger,
          }),
      })

      // Kalau halaman dimuat dalam keadaan sudah di tengah (misal reload),
      // paksa perhitungan ulang setelah font dan layout selesai.
      const refresh = () => ScrollTrigger.refresh()
      const frame = window.requestAnimationFrame(refresh)

      return () => {
        window.cancelAnimationFrame(frame)
      }
    },
    {
      scope: container,
      dependencies: [prefersReducedMotion, stagger, once],
      revertOnUpdate: replayOnDependencies,
    },
  )

  // Pastikan konten kembali terlihat bila hook dilepas saat animasi berjalan.
  useEffect(() => {
    const element = container.current
    return () => {
      if (!element) {
        return
      }
      gsap.set(element.querySelectorAll(REVEAL_SELECTOR), { clearProps: 'all' })
    }
  }, [])

  return container
}
