/**
 * Konfigurasi gerak bersama.
 *
 * Semua animasi memakai nilai dari file ini supaya durasi dan easing konsisten.
 * Preferensi "prefers-reduced-motion" ditangani di dua lapis:
 * 1. CSS di src/styles/base.css mematikan transition dan animation.
 * 2. Hook useScrollReveal membaca usePrefersReducedMotion dan langsung
 *    menampilkan elemen tanpa animasi.
 */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export const MOTION = {
  /** Durasi masuk untuk satu elemen. */
  duration: 0.6,
  /** Jeda antar elemen di dalam satu kelompok. */
  stagger: 0.08,
  /** Jeda antar elemen pada animasi masuk hero. */
  heroStagger: 0.12,
  /** Jarak geser awal dalam piksel. */
  distance: 24,
  /** Titik mulai animasi saat elemen masuk viewport. */
  start: 'top 85%',
  /** Offset dari atas dokumen saat pindah halaman. */
  pageTopAnchor: 0,
  /** Kelas penanda elemen yang ikut animasi masuk. */
  revealAttribute: 'data-reveal',
} as const

/** Easing lembut, tanpa overshoot, supaya terasa tenang. */
export const EASE = 'power2.out'

/** Kelas yang dipakai hook untuk menandai elemen sudah pernah tampil. */
export const REVEALED_CLASS = 'is-revealed'

/** Selector siap pakai untuk gsap.context. */
export const REVEAL_SELECTOR = `[${MOTION.revealAttribute}]`

/** Plugin GSAP didaftarkan sekali di sini, lalu diimpor oleh komponen yang butuh. */
gsap.registerPlugin(useGSAP, ScrollTrigger)

export { gsap, ScrollTrigger, useGSAP }
