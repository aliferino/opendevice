import type { CatalogFilters, IphoneUnit, SortKey, StorageOption } from '../lib/types'

/**
 * DATA CONTOH.
 *
 * Semua nama, harga, stok, dan spesifikasi di bawah ini adalah placeholder
 * yang harus diganti pemilik toko sebelum website dipakai produksi.
 * Harga memakai Rupiah dan mewakili tarif sewa, bukan harga jual unit.
 *
 * Catatan spesifikasi: angka teknis mengikuti spesifikasi umum tiap model,
 * tetapi tetap wajib diverifikasi ulang ke sumber resmi sebelum terbit.
 */

export const IPHONE_FAMILIES = ['11', '12', '13', '14', '15', '16', '17', 'X', 'XR', 'XS', 'SE'] as const

export const STORAGE_OPTIONS: readonly StorageOption[] = [64, 128, 256, 512]

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
    variants: [
      { storage: 64, price: { perDay: 45_000, perWeek: 250_000 }, available: true },
      { storage: 128, price: { perDay: 55_000, perWeek: 310_000 }, available: true },
      { storage: 256, price: { perDay: 65_000, perWeek: 370_000 }, available: false },
    ],
  },
  {
    slug: 'iphone-xr',
    name: 'iPhone XR',
    family: 'XR',
    releaseYear: 2018,
    tagline: 'Layar besar dengan biaya sewa paling ringan',
    description:
      'iPhone XR memakai layar Liquid Retina 6,1 inci dengan bodi aluminium yang ringan. Pilihan tepat bila Anda butuh perangkat pendamping untuk panggilan, pesan, dan aplikasi kasir.',
    condition: 'Cukup',
    stock: 3,
    includes: ['Unit iPhone XR', 'Kabel Lightning', 'Adaptor 20W', 'Casing pelindung'],
    highlights: ['Layar 6,1 inci', 'Bodi aluminium ringan', 'Sewa harian paling murah'],
    specs: {
      screen: '6,1 inci Liquid Retina HD, 1792 x 828 piksel',
      chip: 'Apple A12 Bionic',
      camera: 'Tunggal 12 MP, depan 7 MP',
      battery: '2.942 mAh, tahan sekitar 9 jam pemakaian aktif',
      charging: 'Lightning, fast charge 18W, mendukung pengisian nirkabel Qi',
      weight: '194 gram',
      waterResistance: 'IP67, tahan hingga 1 meter selama 30 menit',
    },
    variants: [
      { storage: 64, price: { perDay: 38_000, perWeek: 210_000 }, available: true },
      { storage: 128, price: { perDay: 48_000, perWeek: 265_000 }, available: true },
    ],
  },
  {
    slug: 'iphone-xs',
    name: 'iPhone XS',
    family: 'XS',
    releaseYear: 2018,
    tagline: 'Layar OLED ringkas untuk tangan kecil',
    description:
      'iPhone XS punya layar Super Retina OLED 5,8 inci dengan bodi stainless steel. Ukurannya pas untuk satu tangan, dan kualitas layarnya masih terasa mahal untuk kelas sewa ekonomis.',
    condition: 'Baik',
    stock: 4,
    includes: ['Unit iPhone XS', 'Kabel Lightning', 'Adaptor 20W', 'Casing pelindung'],
    highlights: ['Layar OLED 5,8 inci', 'Bodi stainless steel', 'Kompak dan ringan'],
    specs: {
      screen: '5,8 inci Super Retina OLED, 2436 x 1125 piksel',
      chip: 'Apple A12 Bionic',
      camera: 'Ganda 12 MP (lebar dan telephoto), depan 7 MP',
      battery: '2.658 mAh, tahan sekitar 8 jam pemakaian aktif',
      charging: 'Lightning, fast charge 18W, mendukung pengisian nirkabel Qi',
      weight: '177 gram',
      waterResistance: 'IP68, tahan hingga 2 meter selama 30 menit',
    },
    variants: [
      { storage: 64, price: { perDay: 42_000, perWeek: 230_000 }, available: true },
      { storage: 256, price: { perDay: 58_000, perWeek: 320_000 }, available: true },
    ],
  },
  {
    slug: 'iphone-se-3',
    name: 'iPhone SE (generasi ke-3)',
    family: 'SE',
    releaseYear: 2022,
    tagline: 'Tombol Home dan chip kelas flagship',
    description:
      'iPhone SE generasi ke-3 memakai bodi klasik dengan tombol Home dan Touch ID, tetapi chipset-nya sekelas iPhone 13. Pilihan bagus untuk pengguna yang belum nyaman dengan navigasi gestur.',
    condition: 'Sangat baik',
    stock: 5,
    includes: ['Unit iPhone SE', 'Kabel Lightning', 'Adaptor 20W', 'Casing pelindung'],
    highlights: ['Touch ID dan tombol Home', 'Chip A15 Bionic', 'Bodi ringkas 4,7 inci'],
    specs: {
      screen: '4,7 inci Retina HD, 1334 x 750 piksel',
      chip: 'Apple A15 Bionic',
      camera: 'Tunggal 12 MP, depan 7 MP',
      battery: '2.018 mAh, tahan sekitar 8 jam pemakaian aktif',
      charging: 'Lightning, fast charge 20W, mendukung pengisian nirkabel Qi',
      weight: '144 gram',
      waterResistance: 'IP67, tahan hingga 1 meter selama 30 menit',
    },
    variants: [
      { storage: 64, price: { perDay: 55_000, perWeek: 300_000 }, available: true },
      { storage: 128, price: { perDay: 65_000, perWeek: 355_000 }, available: true },
      { storage: 256, price: { perDay: 78_000, perWeek: 425_000 }, available: true },
    ],
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
    variants: [
      { storage: 64, price: { perDay: 65_000, perWeek: 355_000 }, available: true },
      { storage: 128, price: { perDay: 75_000, perWeek: 410_000 }, available: true },
      { storage: 256, price: { perDay: 88_000, perWeek: 480_000 }, available: true },
    ],
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
    variants: [
      { storage: 128, price: { perDay: 90_000, perWeek: 490_000 }, available: true },
      { storage: 256, price: { perDay: 105_000, perWeek: 570_000 }, available: true },
      { storage: 512, price: { perDay: 125_000, perWeek: 680_000 }, available: false },
    ],
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
    variants: [
      { storage: 128, price: { perDay: 110_000, perWeek: 600_000 }, available: true },
      { storage: 256, price: { perDay: 125_000, perWeek: 680_000 }, available: true },
      { storage: 512, price: { perDay: 145_000, perWeek: 790_000 }, available: true },
    ],
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
    variants: [
      { storage: 128, price: { perDay: 135_000, perWeek: 740_000 }, available: true },
      { storage: 256, price: { perDay: 150_000, perWeek: 820_000 }, available: true },
      { storage: 512, price: { perDay: 175_000, perWeek: 950_000 }, available: true },
    ],
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
    variants: [
      { storage: 128, price: { perDay: 165_000, perWeek: 900_000 }, available: true },
      { storage: 256, price: { perDay: 185_000, perWeek: 1_010_000 }, available: true },
      { storage: 512, price: { perDay: 215_000, perWeek: 1_180_000 }, available: true },
    ],
  },
  {
    slug: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    family: '16',
    releaseYear: 2024,
    tagline: 'Bodi titanium dan perekaman ProRes',
    description:
      'iPhone 16 Pro memakai rangka titanium dengan layar 6,3 inci dan kamera telephoto 5x. Dipakai untuk produksi video profesional yang butuh format ProRes dan kontrol manual.',
    condition: 'Sangat baik',
    stock: 3,
    includes: ['Unit iPhone 16 Pro', 'Kabel USB-C', 'Adaptor 30W', 'Casing MagSafe', 'Pelindung layar'],
    highlights: ['Rangka titanium', 'Telephoto 5x', 'Perekaman ProRes 4K'],
    specs: {
      screen: '6,3 inci Super Retina XDR OLED ProMotion 120 Hz, 2622 x 1206 piksel',
      chip: 'Apple A18 Pro',
      camera: 'Triple 48 MP Fusion, 48 MP ultra lebar, 12 MP telephoto 5x',
      battery: '3.582 mAh, tahan sekitar 14 jam pemakaian aktif',
      charging: 'USB-C, MagSafe 25W, fast charge 30W',
      weight: '199 gram',
      waterResistance: 'IP68, tahan hingga 6 meter selama 30 menit',
    },
    variants: [
      { storage: 128, price: { perDay: 225_000, perWeek: 1_250_000 }, available: true },
      { storage: 256, price: { perDay: 250_000, perWeek: 1_380_000 }, available: true },
      { storage: 512, price: { perDay: 285_000, perWeek: 1_570_000 }, available: true },
    ],
  },
  {
    slug: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    family: '16',
    releaseYear: 2024,
    tagline: 'Layar terbesar dengan baterai terlama',
    description:
      'iPhone 16 Pro Max memakai layar 6,9 inci dan baterai terbesar di jajaran iPhone 16. Pilihan utama untuk syuting seharian atau perjalanan kerja tanpa sempat mengisi daya.',
    condition: 'Sangat baik',
    stock: 4,
    includes: ['Unit iPhone 16 Pro Max', 'Kabel USB-C', 'Adaptor 30W', 'Casing MagSafe', 'Pelindung layar'],
    highlights: ['Layar 6,9 inci', 'Baterai paling tahan', 'Zoom optik 5x'],
    specs: {
      screen: '6,9 inci Super Retina XDR OLED ProMotion 120 Hz, 2868 x 1320 piksel',
      chip: 'Apple A18 Pro',
      camera: 'Triple 48 MP Fusion, 48 MP ultra lebar, 12 MP telephoto 5x',
      battery: '4.685 mAh, tahan sekitar 16 jam pemakaian aktif',
      charging: 'USB-C, MagSafe 25W, fast charge 30W',
      weight: '227 gram',
      waterResistance: 'IP68, tahan hingga 6 meter selama 30 menit',
    },
    variants: [
      { storage: 256, price: { perDay: 285_000, perWeek: 1_570_000 }, available: true },
      { storage: 512, price: { perDay: 320_000, perWeek: 1_760_000 }, available: true },
    ],
  },
  {
    slug: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    family: '17',
    releaseYear: 2025,
    tagline: 'Kamera 48 MP di ketiga lensa dan pendingin ruang uap',
    description:
      'iPhone 17 Pro membawa tiga kamera 48 MP dan sistem pendingin ruang uap untuk pemakaian berat dalam waktu lama. Unit termuda di katalog kami, cocok untuk pekerjaan yang menuntut hasil terbaik.',
    condition: 'Sangat baik',
    stock: 2,
    includes: ['Unit iPhone 17 Pro', 'Kabel USB-C', 'Adaptor 40W', 'Casing MagSafe', 'Pelindung layar'],
    highlights: ['Tiga kamera 48 MP', 'Pendingin ruang uap', 'Perekaman ProRes RAW'],
    specs: {
      screen: '6,3 inci Super Retina XDR OLED ProMotion 120 Hz, 2622 x 1206 piksel',
      chip: 'Apple A19 Pro',
      camera: 'Triple 48 MP Fusion, 48 MP ultra lebar, 48 MP telephoto',
      battery: '4.252 mAh, tahan sekitar 15 jam pemakaian aktif',
      charging: 'USB-C, MagSafe 25W, fast charge 40W',
      weight: '204 gram',
      waterResistance: 'IP68, tahan hingga 6 meter selama 30 menit',
    },
    variants: [
      { storage: 256, price: { perDay: 350_000, perWeek: 1_950_000 }, available: true },
      { storage: 512, price: { perDay: 395_000, perWeek: 2_190_000 }, available: false },
    ],
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

/** Harga sewa harian terendah dari seluruh varian unit. */
export function getLowestDailyPrice(unit: IphoneUnit): number {
  return unit.variants.reduce((lowest, variant) => Math.min(lowest, variant.price.perDay), Number.POSITIVE_INFINITY)
}

/** Harga sewa mingguan terendah dari seluruh varian unit. */
export function getLowestWeeklyPrice(unit: IphoneUnit): number {
  return unit.variants.reduce((lowest, variant) => Math.min(lowest, variant.price.perWeek), Number.POSITIVE_INFINITY)
}

/** Semua opsi kapasitas yang benar benar tersedia di katalog. */
export function getAvailableStorages(): readonly StorageOption[] {
  const used = new Set<StorageOption>()
  for (const unit of IPHONE_UNITS) {
    for (const variant of unit.variants) {
      used.add(variant.storage)
    }
  }
  return STORAGE_OPTIONS.filter((storage) => used.has(storage))
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
    if (filters.storage !== 'all') {
      const storage = Number(filters.storage)
      if (!unit.variants.some((variant) => variant.storage === storage)) {
        return false
      }
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
    return copy.sort((a, b) => getLowestDailyPrice(a) - getLowestDailyPrice(b))
  }
  if (sort === 'price-desc') {
    return copy.sort((a, b) => getLowestDailyPrice(b) - getLowestDailyPrice(a))
  }
  return copy.sort((a, b) => b.releaseYear - a.releaseYear || a.name.localeCompare(b.name))
}
