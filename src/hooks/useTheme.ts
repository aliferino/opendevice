import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

/** Kunci penyimpanan pilihan tema pengguna. */
export const THEME_STORAGE_KEY = 'opendevice-theme'

/** Nilai tema saat ini, dibaca dari atribut data-theme pada elemen html. */
function readThemeFromDocument(): Theme {
  if (typeof document === 'undefined') {
    return 'light'
  }
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
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
 * Urutan penentuan tema:
 * 1. Pilihan tersimpan pengguna di localStorage.
 * 2. Preferensi sistem lewat prefers-color-scheme, hanya bila pengguna belum
 *    pernah memilih sendiri.
 * 3. Tema terang sebagai bawaan.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readThemeFromDocument)

  // Jaga state tetap selaras bila atribut data-theme diubah dari luar, dan
  // ikuti perubahan preferensi sistem selama pengguna belum memilih sendiri.
  useEffect(() => {
    const root = document.documentElement

    const syncFromDocument = () => setTheme(readThemeFromDocument())
    syncFromDocument()

    const observer = new MutationObserver(syncFromDocument)
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onSystemChange = (event: MediaQueryListEvent) => {
      let hasStoredChoice = false
      try {
        hasStoredChoice = window.localStorage.getItem(THEME_STORAGE_KEY) !== null
      } catch {
        hasStoredChoice = false
      }
      if (hasStoredChoice) {
        return
      }
      const next: Theme = event.matches ? 'dark' : 'light'
      root.setAttribute('data-theme', next)
    }
    media.addEventListener('change', onSystemChange)

    return () => {
      observer.disconnect()
      media.removeEventListener('change', onSystemChange)
    }
  }, [])

  const setThemeAndPersist = useCallback((next: Theme) => {
    document.documentElement.setAttribute('data-theme', next)
    persistTheme(next)
    setTheme(next)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeAndPersist(readThemeFromDocument() === 'dark' ? 'light' : 'dark')
  }, [setThemeAndPersist])

  return { theme, setTheme: setThemeAndPersist, toggleTheme }
}
