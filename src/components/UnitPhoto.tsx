import { getPrimaryColor } from '../lib/colors'
import { ImagePlaceholder } from './ImagePlaceholder'
import type { PlaceholderRatio } from './ImagePlaceholder'
import type { IphoneFamily } from '../lib/types'

export interface UnitPhotoProps {
  /** Nama unit, dipakai untuk alt text dan label placeholder. */
  readonly name: string
  /** Generasi unit, dipakai untuk mencari berkas gambar. */
  readonly family: IphoneFamily
  readonly ratio?: PlaceholderRatio
  /** Hero memakai eager karena gambar pertama yang dilihat pengunjung. */
  readonly loading?: 'eager' | 'lazy'
  readonly className?: string
}

/**
 * Gambar unit untuk kartu katalog dan hero.
 *
 * Memakai warna pertama dari generasi unit sebagai gambar utama. Bila unit
 * belum punya gambar sama sekali, komponen jatuh ke ImagePlaceholder supaya
 * tidak pernah muncul gambar rusak.
 *
 * width dan height selalu dipasang supaya tata letak tidak bergeser saat
 * gambar selesai dimuat.
 */
export function UnitPhoto({ name, family, ratio = '4 / 3', loading = 'lazy', className }: UnitPhotoProps) {
  const primary = getPrimaryColor(family)

  if (primary === undefined) {
    return <ImagePlaceholder label={name} alt={`Foto ${name} belum tersedia`} ratio={ratio} className={className} />
  }

  return (
    <img
      className={`unit-photo${className === undefined ? '' : ` ${className}`}`}
      style={{ aspectRatio: ratio }}
      src={primary.url}
      alt={`${name} warna ${primary.label}`}
      width={1400}
      height={1400}
      loading={loading}
      decoding="async"
    />
  )
}
