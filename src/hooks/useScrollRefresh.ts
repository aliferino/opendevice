import { useEffect } from 'react'
import { gsap, ScrollTrigger } from '../lib/motion'

/**
 * Segarkan posisi ScrollTrigger setelah konten baru dirender.
 * Dipakai di halaman yang isinya berubah karena filter, misal katalog.
 *
 * Alasan pakai efek dan bukan useGSAP: pekerjaan di sini hanya memanggil
 * ScrollTrigger.refresh(), tidak membuat Tween atau ScrollTrigger baru,
 * jadi tidak ada objek GSAP yang perlu di-revert.
 */
export function useRefreshOnUpdate(dependency: string | number | boolean): void {
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => window.cancelAnimationFrame(frame)
  }, [dependency])
}

/**
 * Segarkan ScrollTrigger setelah gambar atau font selesai dimuat,
 * supaya titik mulai animasi tidak salah hitung.
 */
export function useRefreshOnLoad(dependency: string | number | boolean): void {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    if (document.readyState === 'complete') {
      refresh()
    } else {
      window.addEventListener('load', refresh, { once: true })
    }
    return () => window.removeEventListener('load', refresh)
  }, [dependency])
}

/** Kumpulkan semua tween aktif, dipakai untuk mematikan animasi darurat. */
export function killAllAnimations(): void {
  gsap.globalTimeline.clear()
}
