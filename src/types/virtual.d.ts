/**
 * Deklarasi tipe untuk modul virtual yang dibuat plugin di vite.config.ts.
 * Daftar ini diisi otomatis dari isi folder public/images/iphone.
 */
declare module 'virtual:iphone-colors' {
  export interface IphoneColorEntry {
    readonly generation: string
    readonly color: string
    readonly url: string
  }

  export const IPHONE_COLORS: readonly IphoneColorEntry[]
}
