import type { LucideIcon, LucideProps } from 'lucide-react'

/** Ukuran ikon yang diizinkan, dipetakan ke piksel tetap agar seragam. */
export type IconSize = 'sm' | 'md' | 'lg'

const SIZE_PX: Readonly<Record<IconSize, number>> = {
  sm: 16,
  md: 20,
  lg: 24,
}

export interface IconProps extends Omit<LucideProps, 'ref'> {
  /** Ikon lucide yang dirender, misalnya Menu atau ChevronDown. */
  readonly icon: LucideIcon
  /** Ukuran seragam. Bawaan "md" (20 px). */
  readonly size?: IconSize
  /**
   * Label aksesibilitas. Bila kosong, ikon dianggap dekoratif dan
   * disembunyikan dari pembaca layar.
   */
  readonly label?: string
}

/**
 * Pembungkus ikon lucide.
 *
 * Tujuannya menyeragamkan ukuran, ketebalan garis, dan perilaku aksesibilitas
 * supaya semua ikon di situs ini konsisten. Ikon dekoratif otomatis diberi
 * aria-hidden, ikon bermakna diberi role img dan aria-label.
 */
export function Icon({ icon: Glyph, size = 'md', label, strokeWidth = 1.75, ...rest }: IconProps) {
  const pixels = SIZE_PX[size]
  const isDecorative = label === undefined

  return (
    <Glyph
      width={pixels}
      height={pixels}
      strokeWidth={strokeWidth}
      role={isDecorative ? undefined : 'img'}
      aria-hidden={isDecorative ? true : undefined}
      aria-label={label}
      focusable="false"
      {...rest}
    />
  )
}
