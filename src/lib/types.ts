/**
 * Tipe data inti OpenDevice.
 * Semua nama field memakai bahasa Inggris karena ini kontrak data,
 * sedangkan teks yang tampil ke pengguna ditulis di komponen.
 */

export type IphoneFamily = 'SE' | 'X' | 'XR' | 'XS' | '11' | '12' | '13' | '14' | '15' | '16' | '17'

export type StorageOption = 64 | 128 | 256 | 512

export type UnitCondition = 'Sangat baik' | 'Baik' | 'Cukup'

export interface RentalPrice {
  readonly perDay: number
  readonly perWeek: number
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

export interface IphoneVariant {
  readonly storage: StorageOption
  readonly price: RentalPrice
  readonly available: boolean
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
  readonly variants: readonly IphoneVariant[]
}

export type SortKey = 'newest' | 'price-asc' | 'price-desc'

export interface CatalogFilters {
  readonly family: string
  readonly storage: string
  readonly keyword: string
  readonly sort: SortKey
}
