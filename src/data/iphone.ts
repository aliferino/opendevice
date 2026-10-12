import type { CatalogFilters, IphoneUnit, SortKey } from '../lib/types'

/**
 * DATA CONTOH.
 *
 * Semua nama, harga, stok, dan spesifikasi di bawah ini adalah placeholder
 * yang harus diganti pemilik toko sebelum website dipakai produksi.
 * Harga memakai Rupiah dan mewakili tarif sewa, bukan harga jual unit.
 *
 * Cakupan katalog saat ini: iPhone 11 sampai iPhone 17, varian basic saja.
 * Varian Pro, Pro Max, X, XR, XS, dan SE sengaja belum dimasukkan dan akan
 * ditambahkan lagi setelah data resminya siap.
 *
 * Catatan spesifikasi: angka teknis mengikuti spesifikasi umum tiap model,
 * tetapi tetap wajib diverifikasi ulang ke sumber resmi sebelum terbit.
 *
 * Catatan foto: slot gambar masih memakai placeholder. Foto asli sedang
 * disiapkan oleh tim konten dan akan dipasang setelah berkasnya terkumpul.
 */

export const IPHONE_FAMILIES = ['11', '12', '13', '14', '15', '16', '17'] as const

/**
 * Paket durasi sewa beserta pengalinya terhadap harga harian.
 *
 * Pengali sengaja sama untuk semua model, sesuai permintaan pemilik project:
 * harga paket dihitung dari tarif harian tiap model. Karena paket yang lebih
 * panjang memakai pengali yang tumbuh lebih lambat daripada jumlah harinya,
 * tarif efektif per hari jadi makin murah untuk sewa panjang. Itu memang
 * maksudnya.
 */
export const RENTAL_PACKAGES = [
  { days: 1, multiplier: 1 },
  { days: 3, multiplier: 2 },
  { days: 5, multiplier: 3 },
  { days: 7, multiplier: 4 },
] as const

/** Paket durasi yang tersedia. */
export type RentalPackageDays = (typeof RENTAL_PACKAGES)[number]['days']

export const IPHONE_UNITS: readonly IphoneUnit[] = [
  {
    slug: 'iphone-11',
    name: 'iPhone 11',
    family: '11',
    releaseYear: 2019,
    tagline: 'Titik masuk paling hemat untuk kebutuhan harian',
    description:
      'iPhone 11 masih menjadi pilihan paling masuk akal untuk pemakaian ringan sampai sedang. Baterainya bertahan seharian dan kamera gandanya cukup untuk dokumentasi kerja maupun konten sosial media.',
    condition: 'Baik',
    stock: 6,
    includes: ['Unit iPhone 11', 'Kabel Lightning', 'Adaptor 20W', 'Casing pelindung', 'Tas penyimpanan'],
    highlights: ['Cocok untuk pemakaian harian', 'Baterai masih sehat', 'Harga sewa paling ringan'],
    specs: {
      screen: '6,1 inci Liquid Retina HD, 1792 x 828 piksel',
      chip: 'Apple A13 Bionic',
      camera: 'Ganda 12 MP (lebar dan ultra lebar), depan 12 MP',
      battery: '3.110 mAh, tahan sekitar 10 jam pemakaian aktif',
      charging: 'Lightning, fast charge 18W, mendukung pengisian nirkabel Qi',
      weight: '194 gram',
      waterResistance: 'IP68, tahan hingga 2 meter selama 30 menit',
    },
    rentalPrice: { perDay: 100_000 },
    popular: true,
  },
  {
    slug: 'iphone-12',
    name: 'iPhone 12',
    family: '12',
    releaseYear: 2020,
    tagline: 'Desain tepi datar dan dukungan 5G',
    description:
      'iPhone 12 kembali ke desain tepi datar dengan layar OLED 6,1 inci. Sudah mendukung jaringan 5G dan MagSafe, jadi aksesori magnetik bisa dipakai langsung tanpa braket tambahan.',
    condition: 'Sangat baik',
    stock: 7,
    includes: ['Unit iPhone 12', 'Kabel USB-C ke Lightning', 'Adaptor 20W', 'Casing MagSafe'],
    highlights: ['Dukungan jaringan 5G', 'MagSafe magnetik', 'Layar OLED 6,1 inci'],
    specs: {
      screen: '6,1 inci Super Retina XDR OLED, 2532 x 1170 piksel',
      chip: 'Apple A14 Bionic',
      camera: 'Ganda 12 MP (lebar dan ultra lebar), depan 12 MP',
      battery: '2.815 mAh, tahan sekitar 9 jam pemakaian aktif',
      charging: 'Lightning, MagSafe 15W, fast charge 20W',
      weight: '164 gram',
      waterResistance: 'IP68, tahan hingga 6 meter selama 30 menit',
    },
    rentalPrice: { perDay: 150_000 },
    popular: false,
  },
  {
    slug: 'iphone-13',
    name: 'iPhone 13',
    family: '13',
    releaseYear: 2021,
    tagline: 'Baterai panjang, pilihan paling seimbang',
    description:
      'iPhone 13 sering jadi unit paling sering disewa di toko kami. Baterainya jauh lebih tahan dibanding generasi sebelumnya, dan hasil kameranya masih kompetitif untuk kebutuhan komersial ringan.',
    condition: 'Sangat baik',
    stock: 9,
    includes: ['Unit iPhone 13', 'Kabel USB-C ke Lightning', 'Adaptor 20W', 'Casing MagSafe', 'Pelindung layar'],
    highlights: ['Baterai paling tahan di kelasnya', 'Mode Sinematik untuk video', 'Stok paling banyak'],
    specs: {
      screen: '6,1 inci Super Retina XDR OLED, 2532 x 1170 piksel',
      chip: 'Apple A15 Bionic',
      camera: 'Ganda 12 MP (lebar dan ultra lebar), depan 12 MP',
      battery: '3.240 mAh, tahan sekitar 11 jam pemakaian aktif',
      charging: 'Lightning, MagSafe 15W, fast charge 20W',
      weight: '174 gram',
      waterResistance: 'IP68, tahan hingga 6 meter selama 30 menit',
    },
    rentalPrice: { perDay: 200_000 },
    popular: true,
  },
  {
    slug: 'iphone-14',
    name: 'iPhone 14',
    family: '14',
    releaseYear: 2022,
    tagline: 'Kamera depan lebih tajam untuk konten',
    description:
      'iPhone 14 membawa autofokus pada kamera depan dan perbaikan pada sistem pendingin internal. Cocok untuk pembuat konten yang sering merekam video vertikal dengan kualitas stabil.',
    condition: 'Sangat baik',
    stock: 8,
    includes: ['Unit iPhone 14', 'Kabel USB-C ke Lightning', 'Adaptor 20W', 'Casing MagSafe', 'Pelindung layar'],
    highlights: ['Kamera depan autofokus', 'Perekaman stabil 4K', 'Deteksi kecelakaan'],
    specs: {
      screen: '6,1 inci Super Retina XDR OLED, 2532 x 1170 piksel',
      chip: 'Apple A15 Bionic (GPU 5 inti)',
      camera: 'Ganda 12 MP (lebar dan ultra lebar), depan 12 MP autofokus',
      battery: '3.279 mAh, tahan sekitar 11 jam pemakaian aktif',
      charging: 'Lightning, MagSafe 15W, fast charge 20W',
      weight: '172 gram',
      waterResistance: 'IP68, tahan hingga 6 meter selama 30 menit',
    },
    rentalPrice: { perDay: 250_000 },
    popular: false,
  },
  {
    slug: 'iphone-15',
    name: 'iPhone 15',
    family: '15',
    releaseYear: 2023,
    tagline: 'Port USB-C dan kamera 48 MP',
    description:
      'iPhone 15 akhirnya memakai port USB-C dan kamera utama 48 MP. Satu kabel yang sama bisa dipakai untuk laptop dan ponsel, praktis untuk perjalanan kerja.',
    condition: 'Sangat baik',
    stock: 7,
    includes: ['Unit iPhone 15', 'Kabel USB-C', 'Adaptor 20W', 'Casing MagSafe', 'Pelindung layar'],
    highlights: ['Port USB-C', 'Kamera utama 48 MP', 'Dynamic Island'],
    specs: {
      screen: '6,1 inci Super Retina XDR OLED, 2556 x 1179 piksel',
      chip: 'Apple A16 Bionic',
      camera: 'Ganda 48 MP dan 12 MP ultra lebar, depan 12 MP',
      battery: '3.349 mAh, tahan sekitar 11 jam pemakaian aktif',
      charging: 'USB-C, MagSafe 15W, fast charge 20W',
      weight: '171 gram',
      waterResistance: 'IP68, tahan hingga 6 meter selama 30 menit',
    },
    rentalPrice: { perDay: 300_000 },
    popular: true,
  },
  {
    slug: 'iphone-16',
    name: 'iPhone 16',
    family: '16',
    releaseYear: 2024,
    tagline: 'Tombol Kontrol Kamera dan chip A18',
    description:
      'iPhone 16 menambahkan Tombol Kontrol Kamera dan chip A18 yang lebih efisien. Pilihan tepat bila Anda butuh perangkat terbaru untuk presentasi klien atau produksi konten intensif.',
    condition: 'Sangat baik',
    stock: 5,
    includes: ['Unit iPhone 16', 'Kabel USB-C', 'Adaptor 20W', 'Casing MagSafe', 'Pelindung layar'],
    highlights: ['Tombol Kontrol Kamera', 'Chip A18', 'Dukungan Apple Intelligence'],
    specs: {
      screen: '6,1 inci Super Retina XDR OLED, 2556 x 1179 piksel',
      chip: 'Apple A18',
      camera: 'Ganda 48 MP Fusion dan 12 MP ultra lebar, depan 12 MP',
      battery: '3.561 mAh, tahan sekitar 13 jam pemakaian aktif',
      charging: 'USB-C, MagSafe 25W, fast charge 20W',
      weight: '170 gram',
      waterResistance: 'IP68, tahan hingga 6 meter selama 30 menit',
    },
    rentalPrice: { perDay: 350_000 },
    popular: false,
  },
  {
    slug: 'iphone-17',
    name: 'iPhone 17',
    family: '17',
    releaseYear: 2025,
    tagline: 'ProMotion 120 Hz dan kamera depan Center Stage',
    description:
      'iPhone 17 membawa layar ProMotion 120 Hz ke model basic, bersama chip A19 dan kamera depan Center Stage 18 MP. Unit termuda di katalog kami, cocok untuk pekerjaan yang menuntut kelancaran layar dan hasil video terbaik.',
    condition: 'Sangat baik',
    stock: 4,
    includes: ['Unit iPhone 17', 'Kabel USB-C', 'Adaptor 40W', 'Casing MagSafe', 'Pelindung layar'],
    highlights: ['Layar ProMotion 120 Hz', 'Chip A19', 'Kamera depan Center Stage 18 MP'],
    specs: {
      screen: '6,3 inci Super Retina XDR OLED ProMotion 120 Hz, 2622 x 1206 piksel',
      chip: 'Apple A19',
      camera: 'Ganda 48 MP Fusion dan 48 MP ultra lebar, depan 18 MP Center Stage',
      battery: '3.692 mAh, tahan sekitar 13 jam pemakaian aktif',
      charging: 'USB-C, MagSafe 25W, fast charge 40W',
      weight: '177 gram',
      waterResistance: 'IP68, tahan hingga 6 meter selama 30 menit',
    },
    rentalPrice: { perDay: 400_000 },
    popular: false,
  },
]

/** Kembalikan semua unit. Dipisah agar mudah diganti sumber data nanti. */
export function getAllUnits(): readonly IphoneUnit[] {
  return IPHONE_UNITS
}

/** Cari satu unit berdasarkan slug. */
export function getUnitBySlug(slug: string): IphoneUnit | undefined {
  return IPHONE_UNITS.find((unit) => unit.slug === slug)
}

/** Daftar seri unik, diurutkan dari yang terbaru. */
export function getFamilies(): readonly string[] {
  const years = new Map<string, number>()
  for (const unit of IPHONE_UNITS) {
    const current = years.get(unit.family)
    if (current === undefined || unit.releaseYear > current) {
      years.set(unit.family, unit.releaseYear)
    }
  }
  return [...years.entries()].sort((a, b) => b[1] - a[1]).map(([family]) => family)
}

/** Harga sewa harian unit. */
export function getDailyPrice(unit: IphoneUnit): number {
  return unit.rentalPrice.perDay
}

/**
 * Harga total paket durasi untuk satu unit.
 *
 * Dihitung dari harga harian dikali pengali paket, jadi tidak ada angka
 * paket yang disimpan terpisah dan tidak ada risiko data tidak sinkron saat
 * harga harian diubah.
 */
export function getPackagePrice(unit: IphoneUnit, days: RentalPackageDays): number {
  const pack = RENTAL_PACKAGES.find((item) => item.days === days)
  if (pack === undefined) {
    return getDailyPrice(unit)
  }
  return getDailyPrice(unit) * pack.multiplier
}

/** Daftar paket durasi lengkap dengan harga totalnya untuk satu unit. */
export function getPackages(unit: IphoneUnit): readonly { days: RentalPackageDays; price: number }[] {
  return RENTAL_PACKAGES.map((pack) => ({
    days: pack.days,
    price: getDailyPrice(unit) * pack.multiplier,
  }))
}

/** Unit sejenis untuk blok rekomendasi di halaman detail. */
export function getRelatedUnits(unit: IphoneUnit, limit = 3): readonly IphoneUnit[] {
  const sameFamily = IPHONE_UNITS.filter((item) => item.slug !== unit.slug && item.family === unit.family)
  const others = IPHONE_UNITS.filter((item) => item.slug !== unit.slug && item.family !== unit.family)
  const sortedOthers = [...others].sort(
    (a, b) => Math.abs(a.releaseYear - unit.releaseYear) - Math.abs(b.releaseYear - unit.releaseYear),
  )
  return [...sameFamily, ...sortedOthers].slice(0, limit)
}

/**
 * Terapkan filter katalog.
 * Fungsi ini murni supaya mudah diuji dan mudah dipindah ke server nanti.
 */
export function filterUnits(units: readonly IphoneUnit[], filters: CatalogFilters): readonly IphoneUnit[] {
  const keyword = filters.keyword.trim().toLowerCase()

  const filtered = units.filter((unit) => {
    if (filters.family !== 'all' && unit.family !== filters.family) {
      return false
    }
    if (keyword.length > 0) {
      const haystack = `${unit.name} ${unit.tagline} ${unit.description}`.toLowerCase()
      if (!haystack.includes(keyword)) {
        return false
      }
    }
    return true
  })

  return sortUnits(filtered, filters.sort)
}

/** Urutkan unit sesuai pilihan pengguna. */
export function sortUnits(units: readonly IphoneUnit[], sort: SortKey): readonly IphoneUnit[] {
  const copy = [...units]
  if (sort === 'price-asc') {
    return copy.sort((a, b) => getDailyPrice(a) - getDailyPrice(b))
  }
  if (sort === 'price-desc') {
    return copy.sort((a, b) => getDailyPrice(b) - getDailyPrice(a))
  }
  return copy.sort((a, b) => b.releaseYear - a.releaseYear || a.name.localeCompare(b.name))
}
