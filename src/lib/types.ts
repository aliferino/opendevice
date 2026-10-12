/**
 * Tipe data inti OpenDevice.
 * Semua nama field memakai bahasa Inggris karena ini kontrak data,
 * sedangkan teks yang tampil ke pengguna ditulis di komponen.
 */

export type IphoneFamily = '11' | '12' | '13' | '14' | '15' | '16' | '17'

export type UnitCondition = 'Sangat baik' | 'Baik' | 'Cukup'

/**
 * Harga sewa unit.
 *
 * Hanya harga harian yang disimpan. Harga paket durasi dihitung dari harga
 * harian lewat getPackagePrice di src/data/iphone.ts, supaya tidak ada angka
 * berulang yang bisa salah saat data diedit.
 */
export interface RentalPrice {
  readonly perDay: number
}

export interface IphoneSpec {
  readonly screen: string
  readonly chip: string
  readonly camera: string
  readonly battery: string
  readonly charging: string
  readonly weight: string
  readonly waterResistance: string
}

export interface IphoneUnit {
  readonly slug: string
  readonly name: string
  readonly family: IphoneFamily
  readonly releaseYear: number
  readonly tagline: string
  readonly description: string
  readonly condition: UnitCondition
  readonly stock: number
  readonly includes: readonly string[]
  readonly highlights: readonly string[]
  readonly specs: IphoneSpec
  readonly rentalPrice: RentalPrice
  /** Unit ini termasuk yang paling sering disewa. Dipakai untuk label di kartu. */
  readonly popular: boolean
}

export type SortKey = 'newest' | 'price-asc' | 'price-desc'

export interface CatalogFilters {
  readonly family: string
  readonly keyword: string
  readonly sort: SortKey
}
