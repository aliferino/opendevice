/** Konstanta konten yang dipakai lintas halaman. */

export interface NavItem {
  readonly label: string
  readonly path: string
}

export const SITE = {
  name: 'OpenDevice',
  tagline: 'Sewa iPhone tanpa ribet',
  description:
    'OpenDevice menyewakan iPhone dengan paket 1 sampai 7 hari untuk kebutuhan kerja, konten, dan perjalanan. Unit siap pakai, proses cepat, tanpa biaya tersembunyi.',
  city: 'Jakarta Selatan',
  address: 'Jl. Contoh Raya No. 12, Kebayoran Baru, Jakarta Selatan 12110',
  hours: 'Setiap hari, 08.00 sampai 21.00 WIB',
  whatsapp: '+62 812-0000-0000',
  phone: '+62 21 0000 0000',
  email: 'halo@opendevice.id',
  instagram: '@opendevice.id',
} as const

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Beranda', path: '/' },
  { label: 'Katalog', path: '/katalog' },
  { label: 'Tentang Kami', path: '/tentang' },
  { label: 'Syarat dan Ketentuan', path: '/syarat-ketentuan' },
]

export const RENTAL_STEPS: readonly { readonly step: number; readonly title: string; readonly body: string }[] = [
  {
    step: 1,
    title: 'Pilih unit',
    body: 'Buka katalog, pilih seri yang sesuai kebutuhan, lalu tentukan durasi sewa yang paling pas.',
  },
  {
    step: 2,
    title: 'Konfirmasi ketersediaan',
    body: 'Hubungi kami lewat WhatsApp dengan model, tanggal mulai, dan tanggal selesai. Kami cek stok dan kirim total biaya.',
  },
  {
    step: 3,
    title: 'Verifikasi data',
    body: 'Kirim foto KTP dan satu identitas pendukung. Untuk paket 5 hari ke atas kami juga meminta bukti domisili.',
  },
  {
    step: 4,
    title: 'Ambil atau terima unit',
    body: 'Unit bisa diambil di toko, atau dikirim ke alamat Anda. Serah terima selalu disertai berita acara kondisi unit.',
  },
]

export const WHY_US: readonly { readonly title: string; readonly body: string }[] = [
  {
    title: 'Unit dirawat, bukan sekadar disewakan',
    body: 'Setiap unit melewati 12 titik pemeriksaan sebelum diserahkan, termasuk kesehatan baterai dan kebersihan kamera.',
  },
  {
    title: 'Harga jelas sejak awal',
    body: 'Tarif setiap paket durasi tercantum terbuka. Tidak ada biaya administrasi mendadak saat pengambilan.',
  },
  {
    title: 'Tanpa pemblokiran akun',
    body: 'Anda memakai Apple ID sendiri. Kami tidak mengunci perangkat dengan akun toko.',
  },
  {
    title: 'Bisa diperpanjang kapan saja',
    body: 'Butuh waktu tambahan? Cukup kabari kami sebelum masa sewa berakhir, selama unit belum dijadwalkan unit lain.',
  },
]

export const TERMS_SECTIONS: readonly { readonly title: string; readonly items: readonly string[] }[] = [
  {
    title: 'Ruang lingkup sewa',
    items: [
      'Penyewa wajib berusia minimal 18 tahun dan menyerahkan identitas asli saat serah terima.',
      'Setiap transaksi dituangkan dalam perjanjian sewa yang ditandatangani kedua pihak.',
      'Unit hanya boleh dipakai untuk penggunaan pribadi yang sah. Penyewaan ulang kepada pihak lain tidak diizinkan.',
    ],
  },
  {
    title: 'Pembayaran',
    items: [
      'Sewa dibayar penuh di muka sebelum unit diserahkan.',
      'Paket 1 hari dihitung per 24 jam sejak waktu serah terima unit.',
      'Paket 7 hari dihitung per 7 hari kalender, dan tarif per harinya lebih hemat dibanding paket 1 hari.',
      'Keterlambatan pengembalian dikenakan tarif satu hari ditambah 20 persen per hari keterlambatan.',
    ],
  },
  {
    title: 'Deposit dan jaminan',
    items: [
      'Deposit dikembalikan penuh setelah unit diperiksa dan dinyatakan sesuai kondisi awal.',
      'Deposit dapat ditahan sebagian atau seluruhnya bila ditemukan kerusakan, kehilangan aksesori, atau tunggakan biaya.',
      'Untuk paket 5 hari ke atas, kami meminta satu identitas tambahan sebagai jaminan.',
    ],
  },
  {
    title: 'Kondisi dan kerusakan',
    items: [
      'Kondisi unit dan aksesori dicatat bersama pada berita acara serah terima. Harap periksa sebelum menandatangani.',
      'Kerusakan akibat pemakaian wajar ditangani tim kami tanpa biaya tambahan.',
      'Kerusakan akibat kelalaian, cairan, atau benturan di luar pemakaian wajar menjadi tanggung jawab penyewa sesuai biaya perbaikan resmi.',
    ],
  },
  {
    title: 'Kehilangan dan tindak kriminal',
    items: [
      'Kehilangan atau pencurian wajib dilaporkan ke kami maksimal 1 x 24 jam sejak diketahui.',
      'Penyewa menyerahkan salinan laporan polisi untuk keperluan klaim.',
      'Nilai penggantian unit mengikuti harga pasar perangkat sejenis pada saat kejadian, dikurangi nilai sisa.',
    ],
  },
  {
    title: 'Data, privasi, dan akun',
    items: [
      'Unit dikosongkan dari seluruh data kami sebelum diserahkan, dan wajib dikosongkan penyewa saat pengembalian.',
      'Kami tidak menyimpan salinan data pribadi penyewa dari perangkat yang disewa.',
      'Kelalaian menghapus data pada perangkat tidak menimbulkan kewajiban apa pun bagi kami.',
    ],
  },
  {
    title: 'Pembatalan',
    items: [
      'Pembatalan lebih dari 24 jam sebelum jadwal pengambilan dikembalikan penuh.',
      'Pembatalan kurang dari 24 jam dikenakan biaya administrasi sebesar tarif sewa satu hari.',
    ],
  },
]
