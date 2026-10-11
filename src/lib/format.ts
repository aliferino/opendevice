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

/** 150000 menjadi "Rp150rb", dipakai sebagai label ringkas pada kartu. */
export function formatRupiahShort(value: number): string {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000
    const rounded = Number.isInteger(millions) ? millions.toString() : millions.toFixed(1)
    return `Rp${rounded.replace('.', ',')}jt`
  }
  if (value >= 1_000) {
    return `Rp${Math.round(value / 1_000)}rb`
  }
  return formatRupiah(value)
}

/** 2019 menjadi "sejak 2019". */
export function formatYear(year: number): string {
  return `sejak ${year}`
}
