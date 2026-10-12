/** Util format angka dan tanggal. Semua format mengikuti lokal Indonesia. */

const rupiahFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
})

/** 150000 menjadi "Rp150.000". */
export function formatRupiah(value: number): string {
  return rupiahFormatter.format(value)
}

/** 2019 menjadi "sejak 2019". */
export function formatYear(year: number): string {
  return `sejak ${year}`
}
