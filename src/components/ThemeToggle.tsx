import { Moon, Sun } from 'lucide-react'
import { Icon } from './Icon'
import { useTheme } from '../hooks/useTheme'

/**
 * Tombol pengubah tema terang dan gelap.
 *
 * Label tombol berubah sesuai tema aktif, jadi pengguna pembaca layar tahu
 * aksi apa yang akan terjadi. Ikon hanya penanda visual, maknanya dibawa
 * oleh label yang tersembunyi secara visual.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const label = isDark ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={label} title={label}>
      <Icon icon={isDark ? Sun : Moon} size="md" />
      <span className="visually-hidden">{label}</span>
    </button>
  )
}
