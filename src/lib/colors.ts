import { IPHONE_COLORS } from 'virtual:iphone-colors'
import type { IphoneFamily } from './types'

export interface IphoneColor {
  /** Kode warna dalam huruf kecil, misalnya "mist_blue". */
  readonly slug: string
  /** Label yang tampil, misalnya "Mist Blue". */
  readonly label: string
  /** Alamat berkas gambar. */
  readonly url: string
}

/** "mist_blue" menjadi "Mist Blue". */
function toLabel(color: string): string {
  return color
    .split('_')
    .filter((part) => part.length > 0)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

/**
 * Semua warna yang tersedia untuk satu generasi unit.
 *
 * Daftar ini dibaca dari isi folder public/images/iphone lewat modul virtual,
 * jadi berkas gambar yang baru ditambahkan otomatis ikut tampil tanpa perlu
 * mengubah kode. Warna diurutkan mengikuti nama berkas supaya urutannya stabil.
 */
export function getColorsForFamily(family: IphoneFamily): readonly IphoneColor[] {
  return IPHONE_COLORS.filter((entry) => entry.generation === family).map((entry) => ({
    slug: entry.color,
    label: toLabel(entry.color),
    url: entry.url,
  }))
}

/** True bila generasi ini punya minimal satu gambar warna. */
export function hasColors(family: IphoneFamily): boolean {
  return IPHONE_COLORS.some((entry) => entry.generation === family)
}

/**
 * Warna pertama dari satu generasi, dipakai sebagai gambar utama di kartu
 * katalog dan hero. Mengembalikan undefined bila belum ada gambarnya, supaya
 * pemanggil bisa jatuh ke placeholder.
 */
export function getPrimaryColor(family: IphoneFamily): IphoneColor | undefined {
  return getColorsForFamily(family)[0]
}
