# OpenDevice

Katalog dan profil layanan sewa iPhone. OpenDevice menyewakan unit iPhone siap
pakai untuk kebutuhan kerja, produksi konten, dan perjalanan, dengan tarif
terbuka dan perjanjian sewa tertulis.

Situs ini adalah katalog dan pengenalan toko, bukan toko daring. Pengajuan sewa
dilakukan lewat WhatsApp, telepon, atau email.

## Demo langsung

https://opendevice.vercel.app

## Daftar isi

- [Fitur utama](#fitur-utama)
- [Teknologi](#teknologi)
- [Menjalankan di lokal](#menjalankan-di-lokal)
- [Skrip yang tersedia](#skrip-yang-tersedia)
- [Struktur folder](#struktur-folder)
- [Cara deploy](#cara-deploy)
- [Catatan gambar](#catatan-gambar)
- [Catatan data harga dan spesifikasi](#catatan-data-harga-dan-spesifikasi)
- [Aksesibilitas](#aksesibilitas)

## Fitur utama

- Katalog iPhone 11 sampai 17 varian basic, total 7 unit.
- Halaman detail unit dengan galeri warna. Foto bisa diganti lewat thumbnail
  atau tombol panah pada papan tombol.
- Paket sewa 1, 3, 5, dan 7 hari. Tarif per hari makin murah pada paket yang
  lebih panjang.
- Mode terang dan gelap, dengan mode terang sebagai bawaan. Pilihan pengguna
  disimpan di peramban dan diterapkan sebelum React dimuat supaya tidak ada
  kedipan warna saat halaman dibuka.
- Halaman Tentang Kami dan Syarat dan Ketentuan.
- Animasi GSAP yang berjalan dua arah saat halaman digulir. Elemen yang keluar
  layar kembali disembunyikan, lalu muncul lagi saat masuk layar.
- Tata letak responsif, dari ponsel sempit sampai layar lebar. Sudah diperiksa
  tanpa overflow horizontal pada lebar 320px, 360px, 375px, 768px, dan 1024px
  ke atas.
- Menghormati pengaturan `prefers-reduced-motion`. Bila animasi dimatikan di
  sistem operasi, seluruh konten langsung tampil tanpa gerakan.

## Teknologi

| Bagian | Keterangan |
| --- | --- |
| Kerangka UI | React 19 dengan TypeScript |
| Build tool | Vite 8 |
| Kompilator | React Compiler 1.0, dijalankan lewat Babel |
| Animasi | GSAP dengan `@gsap/react` |
| Routing | React Router 7, memakai `BrowserRouter` |
| Ikon | lucide-react |
| Tipografi | Plus Jakarta Sans, font variabel dari `@fontsource-variable/plus-jakarta-sans` |
| Linting | oxlint |

React Compiler aktif lewat `vite.config.ts`, jadi penulisan `useMemo`,
`useCallback`, dan `React.memo` secara manual tidak diperlukan. Untuk memastikan
kompilator benar benar bekerja, cari simbol `useMemoCache` di dalam berkas JS
hasil build. Simbol itu hanya muncul bila kompilator sudah menulis ulang
komponen.

## Menjalankan di lokal

Prasyarat: Node.js versi 20.19 atau lebih baru, atau 22.12 ke atas. Versi ini
mengikuti syarat minimum Vite 8. Node.js versi 21 belum didukung. npm ikut
terpasang bersama Node.js.

```bash
npm install
npm run dev
```

Server pengembangan mencetak alamat lokal, biasanya `http://localhost:5173`.

## Skrip yang tersedia

| Perintah | Kegunaan |
| --- | --- |
| `npm run dev` | Menjalankan server pengembangan dengan hot reload |
| `npm run build` | Memeriksa tipe lalu membangun versi produksi ke folder `dist/` |
| `npm run preview` | Menyajikan hasil build produksi secara lokal |
| `npm run lint` | Menjalankan oxlint |

## Struktur folder

```
opendevice/
├── public/
│   ├── favicon.svg
│   └── images/iphone/         gambar produk WebP
├── src/
│   ├── components/            komponen UI yang bisa dipakai ulang
│   ├── data/                  data unit iPhone, termasuk harga dan spesifikasi
│   ├── hooks/                 hook React khusus, misalnya tema dan animasi
│   ├── layouts/               kerangka halaman, yaitu header dan footer
│   ├── lib/                   fungsi bantu, tipe, dan konstanta
│   ├── pages/                 halaman yang terhubung ke rute
│   ├── sections/              bagian besar halaman beranda
│   ├── styles/                berkas CSS, termasuk token warna dan spasi
│   ├── App.tsx                daftar rute aplikasi
│   └── main.tsx               titik masuk aplikasi
├── index.html                 kerangka HTML
├── vercel.json                aturan rewrite untuk Vercel
└── vite.config.ts             konfigurasi Vite dan React Compiler
```

Keterangan singkat tiap folder di dalam `src/`:

| Folder | Isi |
| --- | --- |
| `components/` | Komponen kecil yang dipakai lintas halaman, seperti kartu unit, galeri warna, tombol, dan navigasi. |
| `data/` | Satu berkas `iphone.ts` berisi seluruh data unit, fungsi pencarian, penyaringan, dan perhitungan harga paket. |
| `hooks/` | Hook khusus seperti pengelola tema, animasi reveal saat gulir, dan transisi antar halaman. |
| `layouts/` | `RootLayout.tsx` yang membungkus semua halaman dengan header, footer, dan tautan lompat konten. |
| `lib/` | Fungsi bantu format, daftar konstanta teks, definisi tipe TypeScript, dan pengaturan animasi. |
| `pages/` | Satu berkas per halaman, yaitu Beranda, Katalog, Detail Unit, Tentang Kami, Syarat dan Ketentuan, serta halaman tidak ditemukan. |
| `sections/` | Bagian penyusun halaman beranda, seperti hero, layanan, cara sewa, dan unit unggulan. |
| `styles/` | CSS yang dipecah per peran, dengan token warna dan spasi di `tokens.css`. |

## Cara deploy

Situs ini disiapkan untuk dideploy ke Vercel. Cara paling cepat:

```bash
npx --yes vercel@latest deploy --prod --yes
```

### Kenapa perlu `vercel.json`

Aplikasi ini memakai `BrowserRouter`, sehingga alamat seperti
`/katalog/iphone-17` ditangani oleh React Router di sisi peramban, bukan oleh
berkas fisik di server. Tanpa aturan tambahan, Vercel akan mencari berkas
bernama `iphone-17` di dalam folder `katalog`, tidak menemukannya, lalu
mengembalikan halaman 404 saat alamat itu dibuka atau di-refresh langsung.

Karena itu ada `vercel.json` di akar project:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Aturan ini mengarahkan semua permintaan ke `index.html`, sehingga React Router
yang menentukan halaman mana yang ditampilkan. Berkas `vercel.json` ini wajib
ada. Bila dihapus, rute di dalam seperti `/katalog/iphone-17` akan gagal saat
di-refresh.

Folder `.vercel` yang dibuat Vercel CLI berisi data lokal dan tidak ikut
di-commit, sudah tercantum di `.gitignore`.

## Catatan gambar

Gambar produk ada di `public/images/iphone/`, dengan pola nama
`{generasi}_basic_{warna}.webp`. Contoh: `13_basic_midnight.webp` untuk iPhone
13 warna midnight.

- Format WebP, dikonversi dari foto produk resmi Apple.
- Sumbernya dari CDN resmi Apple Store, bukan dari marketplace.
- Latar putih murni, produk tidak terpotong di tepi kanvas.
- Rincian lengkap tiap berkas, termasuk URL sumber dan catatan lisensi, ada di
  `public/images/iphone/SUMBER-GAMBAR.md`.

Penambahan warna baru cukup dilakukan dengan menaruh berkas WebP baru di folder
tersebut memakai pola nama di atas. Vite akan memindainya otomatis, jadi tidak
perlu mengubah kode.

## Catatan data harga dan spesifikasi

Seluruh data unit ada di satu berkas, yaitu `src/data/iphone.ts`. Berkas itu
memuat nama, slug, tahun rilis, tagline, kondisi, stok, perlengkapan, harga
sewa harian, dan spesifikasi tiap unit.

Dua hal yang perlu dibedakan:

- **Spesifikasi teknis** sudah memakai data resmi Apple, diambil dari halaman
  tech specs di `support.apple.com`. Untuk baterai, Apple tidak mencantumkan
  kapasitas dalam mAh di halaman resminya, jadi yang dipakai adalah durasi
  pemutaran video resmi, disertai keterangan bahwa kapasitas mAh tidak
  dicantumkan Apple.
- **Harga dan stok** adalah angka yang perlu disesuaikan pemilik toko sebelum
  dipakai produksi. Tarif di katalog adalah tarif sewa, bukan harga jual unit.

Harga paket durasi tidak disimpan terpisah. Yang disimpan hanya tarif harian,
lalu harga paket dihitung otomatis oleh fungsi `getPackagePrice` memakai
pengali tetap dari daftar `RENTAL_PACKAGES`. Jadi bila tarif harian diubah,
harga paket ikut menyesuaikan sendiri dan tidak ada angka berulang yang bisa
salah.

## Aksesibilitas

- Setiap gambar produk punya teks alternatif yang menjelaskan model dan warna.
- Navigasi galeri warna bisa dipakai lewat tombol panah pada papan tombol.
- Tautan lompat konten tersedia di awal halaman.
- Kontras teks sudah diperiksa memenuhi ambang WCAG pada mode terang maupun
  gelap.
- Bila `prefers-reduced-motion` aktif, animasi dimatikan dan konten langsung
  tampil tanpa gerakan.
