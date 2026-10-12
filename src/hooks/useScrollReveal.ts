import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'
import { EASE, gsap, MOTION, REVEALED_CLASS, REVEAL_SELECTOR, ScrollTrigger, useGSAP } from '../lib/motion'
import { usePrefersReducedMotion } from './useReducedMotion'

export interface ScrollRevealOptions {
  /** Jeda antar elemen di dalam satu kelompok. */
  readonly stagger?: number
}

/**
 * Reveal dua arah saat scroll memakai ScrollTrigger.batch.
 *
 * Kenapa memakai hook ini dan bukan useEffect mentah:
 * 1. useGSAP memakai gsap.context, jadi semua Tween dan ScrollTrigger yang
 *    dibuat di dalamnya otomatis di-revert saat komponen dilepas.
 * 2. Selector di dalam scope hanya mencari turunan container, jadi tidak
 *    perlu satu ref untuk setiap elemen.
 *
 * Perilaku animasi sengaja dua arah, bukan sekali jalan:
 * - onEnter dan onEnterBack menampilkan elemen saat masuk viewport, baik dari
 *   bawah maupun dari atas.
 * - onLeave dan onLeaveBack mengembalikan elemen ke keadaan awal saat keluar
 *   viewport, baik ke atas maupun ke bawah. Ini yang membuat animasi terlihat
 *   lagi setiap kali pengguna scroll bolak balik.
 *
 * ScrollTrigger.batch di sini TIDAK memakai once: true. Dengan once, trigger
 * mematikan dirinya setelah animasi pertama, sehingga elemen tidak pernah
 * kembali ke keadaan awal dan animasi hanya terlihat sekali.
 *
 * Tinggal tambahkan atribut data-reveal pada elemen yang ingin dianimasikan.
 *
 * Kenapa memakai opacity, bukan autoAlpha:
 * autoAlpha mengubah visibility dan opacity sekaligus, sehingga GSAP memasang
 * visibility hidden pada elemen yang dianggap belum masuk layar. Akibatnya teks
 * kartu bisa hilang walau kartunya masih terlihat di layar, dan elemen itu juga
 * tersembunyi dari pembaca layar. opacity saja tidak menyembunyikan elemen dari
 * pembaca layar, jadi konten tetap terbaca walau animasi belum berjalan atau
 * JavaScript gagal di tengah jalan.
 */
export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {},
): RefObject<T | null> {
  const container = useRef<T>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const { stagger = MOTION.stagger } = options

  useGSAP(
    () => {
      const targets = gsap.utils.toArray<HTMLElement>(REVEAL_SELECTOR)
      if (targets.length === 0) {
        return
      }

      // Hormati preferensi pengguna. Tanpa animasi, elemen langsung terlihat
      // dan tidak ada ScrollTrigger yang dibuat, jadi tidak ada elemen yang
      // bisa tertinggal dalam keadaan tersembunyi.
      if (prefersReducedMotion) {
        gsap.set(targets, { clearProps: 'all', opacity: 1, y: 0 })
        targets.forEach((element) => element.classList.add(REVEALED_CLASS))
        return
      }

      const reveal = (batch: Element[]) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: MOTION.duration,
          ease: EASE,
          stagger,
          overwrite: true,
        })

      const reset = (batch: Element[]) =>
        gsap.to(batch, {
          opacity: 0,
          y: MOTION.distance,
          duration: MOTION.duration,
          ease: EASE,
          stagger,
          overwrite: true,
        })

      gsap.set(targets, { opacity: 0, y: MOTION.distance })

      // Reveal saat elemen masuk layar, dari bawah maupun dari atas.
      ScrollTrigger.batch(targets, {
        start: MOTION.start,
        end: 'bottom top',
        interval: 0.1,
        batchMax: 6,
        onEnter: reveal,
        onEnterBack: reveal,
      })

      // Reset hanya setelah elemen BENAR BENAR keluar layar. Ambang masuk
      // (MOTION.start, yaitu top 85%) sengaja tidak dipakai untuk reset, karena
      // pada titik itu sebagian kartu masih terlihat di layar. Kalau reset
      // dipasang di situ, teks kartu hilang saat kartu masih tampak, dan itu
      // yang membuat halaman terlihat rusak. Dengan ambang top bottom dan
      // bottom top, elemen baru disembunyikan setelah seluruh badannya keluar
      // dari viewport.
      ScrollTrigger.batch(targets, {
        start: 'top bottom',
        end: 'bottom top',
        interval: 0.1,
        batchMax: 6,
        onLeave: reset,
        onLeaveBack: reset,
      })

      // Kalau halaman dimuat dalam keadaan sudah di tengah (misal reload),
      // paksa perhitungan ulang setelah font dan layout selesai. Elemen yang
      // sudah lewat garis start saat itu langsung memicu onEnter.
      const refresh = () => ScrollTrigger.refresh()
      const frame = window.requestAnimationFrame(refresh)

      return () => {
        window.cancelAnimationFrame(frame)
      }
    },
    {
      scope: container,
      dependencies: [prefersReducedMotion, stagger],
      // Selalu revert saat dependensi berubah. Tanpa ini, ScrollTrigger lama
      // tetap hidup saat prefers-reduced-motion berubah dan bisa menyembunyikan
      // elemen kembali, sehingga konten berisiko hilang.
      revertOnUpdate: true,
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
