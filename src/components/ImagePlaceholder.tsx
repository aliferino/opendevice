import type { CSSProperties } from 'react'

export type PlaceholderRatio = '4 / 3' | '3 / 4' | '1 / 1' | '16 / 9' | '9 / 16'

export interface ImagePlaceholderProps {
  /** Nama model atau bagian, dipakai sebagai isi label dan alt text. */
  readonly label: string
  /** Alt text lengkap untuk pembaca layar. Kalau kosong, dianggap dekoratif. */
  readonly alt?: string
  readonly ratio?: PlaceholderRatio
  readonly className?: string
  /** Nada dasar placeholder. "dark" dipakai di atas latar gelap. */
  readonly tone?: 'light' | 'dark'
}

/**
 * Placeholder gambar iPhone.
 *
 * Sengaja bukan gambar, supaya tidak ada permintaan jaringan dan tidak ada
 * berkas biner yang perlu diganti manual. Saat foto asli siap:
 * 1. Simpan foto di folder public/images atau impor dari src/assets.
 * 2. Ganti pemakaian komponen ini dengan elemen img.
 * 3. Pertahankan rasio yang sama supaya layout tidak bergeser.
 */
export function ImagePlaceholder({
  label,
  alt = '',
  ratio = '4 / 3',
  className,
  tone = 'light',
}: ImagePlaceholderProps) {
  const style: CSSProperties = { aspectRatio: ratio }
  const isDecorative = alt === ''

  return (
    <div
      className={`image-placeholder image-placeholder--${tone}${className === undefined ? '' : ` ${className}`}`}
      style={style}
      role={isDecorative ? 'presentation' : 'img'}
      aria-label={isDecorative ? undefined : alt}
      aria-hidden={isDecorative ? true : undefined}
      data-placeholder-label={label}
    >
      <span className="image-placeholder__frame" aria-hidden="true">
        <span className="image-placeholder__label">{label}</span>
      </span>
    </div>
  )
}
