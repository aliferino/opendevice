import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

/** Kunci penyimpanan pilihan tema pengguna. */
export const THEME_STORAGE_KEY = 'opendevice-theme'

/** Warna bilah alamat browser untuk tiap tema. */
const THEME_COLOR: Record<Theme, string> = {
  light: '#ffffff',
  dark: '#0b0b0d',
}

/** Nilai tema saat ini, dibaca dari atribut data-theme pada elemen html. */
function readThemeFromDocument(): Theme {
  if (typeof document === 'undefined') {
    return 'light'
  }
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
}

/** Selaraskan warna bilah alamat browser dengan tema yang sedang aktif. */
function applyThemeColor(theme: Theme): void {
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta !== null) {
    meta.setAttribute('content', THEME_COLOR[theme])
  }
}

/** Simpan pilihan pengguna supaya tidak berubah saat halaman dimuat ulang. */
function persistTheme(theme: Theme): void {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Penyimpanan bisa diblokir di mode privat. Tema tetap berlaku di sesi ini.
  }
}

/**
 * Pengatur tema terang dan gelap.
 *
 * Nilai awal dibaca dari atribut data-theme pada elemen html, yang sudah
 * dipasang skrip kecil di index.html sebelum React dimuat. Dengan begitu
 * tidak ada kedipan tema saat halaman dibuka.
 *
 * Bawaan SELALU terang. Preferensi sistem lewat prefers-color-scheme sengaja
 * tidak dipakai sebagai penentu awal, karena pemilik project ingin website
 * selalu terbuka dalam mode terang. Tema gelap hanya berlaku kalau pengguna
 * memilihnya sendiri lewat tombol tema, dan pilihan itu tersimpan.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readThemeFromDocument)

  // Jaga state tetap selaras bila atribut data-theme diubah dari luar.
  // Tidak ada lagi langganan prefers-color-scheme, jadi tema tidak pernah
  // berubah sendiri mengikuti pengaturan sistem operasi.
  useEffect(() => {
    const root = document.documentElement

    const syncFromDocument = () => {
      const current = readThemeFromDocument()
      setTheme(current)
      applyThemeColor(current)
    }
    syncFromDocument()

    const observer = new MutationObserver(syncFromDocument)
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })

    return () => {
      observer.disconnect()
    }
  }, [])

  const setThemeAndPersist = useCallback((next: Theme) => {
    document.documentElement.setAttribute('data-theme', next)
    applyThemeColor(next)
    persistTheme(next)
    setTheme(next)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeAndPersist(readThemeFromDocument() === 'dark' ? 'light' : 'dark')
  }, [setThemeAndPersist])

  return { theme, setTheme: setThemeAndPersist, toggleTheme }
}
