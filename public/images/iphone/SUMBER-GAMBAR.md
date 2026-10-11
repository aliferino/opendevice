# Sumber Gambar iPhone (Varian Basic)

Catatan aset gambar produk iPhone untuk project OpenDevice.
Semua berkas disimpan di `public/images/iphone/` dengan pola nama `{generasi}_basic_{warna}.webp`.

Terakhir diperbarui: riset iPhone 11, 12, 13, 14 (basic). Ditambahkan ke aset yang sudah ada: iPhone 15, 16, 17.

## Ringkasan

- Total berkas baru: 24 (iPhone 11, 12, 13, 14 masing-masing 6 warna)
- Berkas gagal: 0
- Resolusi seragam: 1400x1400 piksel, persegi
- Format: WebP (kualitas 90), dikonversi dari JPEG asli Apple
- Latar belakang: putih murni (diverifikasi sudut piksel RGB 255,255,255)
- Gaya: foto produk resmi Apple, tampak depan-belakang, tanpa watermark, tanpa teks promosi
- Produk tidak terpotong di tepi kanvas (diverifikasi bounding box konten)

## Sumber Utama

Semua gambar berasal dari CDN resmi Apple Store (`store.storeimages.cdn-apple.com`), yang dipakai oleh halaman belanja Apple.
Pola URL aset: `https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/{slug}?wid=1400&hei=1400&fmt=jpeg&qlt=95`

Halaman sumber (halaman belanja Apple, diakses via arsip web karena sebagian produk sudah dihentikan):

| Generasi | Halaman sumber | Keterangan |
| --- | --- | --- |
| iPhone 11 | https://web.archive.org/web/20200531034706/https://www.apple.com/shop/buy-iphone/iphone-11 | Arsip 2020-05-31, semua 6 warna ada |
| iPhone 12 | https://web.archive.org/web/20210531114239/https://www.apple.com/shop/buy-iphone/iphone-12 | Arsip 2021-05-31, termasuk warna purple rilis 2021 |
| iPhone 13 | https://web.archive.org/web/20220331184857/https://www.apple.com/shop/buy-iphone/iphone-13 | Arsip 2022-03-31, termasuk warna green rilis 2022 |
| iPhone 14 | https://web.archive.org/web/20240101041600/https://www.apple.com/shop/buy-iphone/iphone-14 | Arsip 2024-01-01, semua 6 warna ada |

Catatan penting soal iPhone 14: halaman belanja Apple untuk iPhone 14 sudah dihentikan (URL live `apple.com/shop/buy-iphone/iphone-14` kini dialihkan ke `apple.com/iphone/`), sehingga warna midnight dan starlight tidak muncul di situs live. Keduanya berhasil diambil dari arsip web 2024-01-01 dan masih tersedia di CDN Apple. Ini menjawab kendala yang dilaporkan pemilik project.

## Tabel Berkas

| Nama berkas | Model | Warna | URL sumber (aset) | Lisensi | Resolusi |
| --- | --- | --- | --- | --- | --- |
| 11_basic_black.webp | iPhone 11 | black | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 11_basic_white.webp | iPhone 11 | white | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-white-select-2019?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 11_basic_green.webp | iPhone 11 | green | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-green-select-2019?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 11_basic_yellow.webp | iPhone 11 | yellow | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-yellow-select-2019?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 11_basic_purple.webp | iPhone 11 | purple | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 11_basic_red.webp | iPhone 11 | red | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 12_basic_black.webp | iPhone 12 | black | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-black-select-2020?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 12_basic_white.webp | iPhone 12 | white | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-white-select-2020?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 12_basic_red.webp | iPhone 12 | red | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-red-select-2020?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 12_basic_green.webp | iPhone 12 | green | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-green-select-2020?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 12_basic_blue.webp | iPhone 12 | blue | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 12_basic_purple.webp | iPhone 12 | purple | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 13_basic_midnight.webp | iPhone 13 | midnight | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 13_basic_starlight.webp | iPhone 13 | starlight | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-starlight-select-2021?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 13_basic_pink.webp | iPhone 13 | pink | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 13_basic_blue.webp | iPhone 13 | blue | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-blue-select-2021?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 13_basic_green.webp | iPhone 13 | green | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-green-select?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 13_basic_red.webp | iPhone 13 | red | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-product-red-select-2021?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 14_basic_midnight.webp | iPhone 14 | midnight | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-midnight-select-202209?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 14_basic_starlight.webp | iPhone 14 | starlight | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-starlight-select-202209?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 14_basic_blue.webp | iPhone 14 | blue | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-blue-select-202209?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 14_basic_purple.webp | iPhone 14 | purple | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-purple-select-202209?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 14_basic_yellow.webp | iPhone 14 | yellow | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-yellow-select-202303?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |
| 14_basic_red.webp | iPhone 14 | red | https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-red-select-202209?wid=1400&hei=1400&fmt=jpeg&qlt=95 | Apple Inc. (foto produk resmi) | 1400x1400 |

## Catatan Lisensi

Gambar adalah foto produk resmi Apple Inc. dari CDN Apple Store. Hak cipta milik Apple Inc.
Ini bukan lisensi bebas (bukan Creative Commons). Gambar dipakai sebagai aset katalog produk untuk menampilkan perangkat yang disewakan, mengikuti pola yang sudah dipakai untuk iPhone 15, 16, dan 17 di folder yang sama.
Tidak ada gambar dari marketplace (Tokopedia, Shopee, Bukalapak) yang dipakai.

## Verifikasi yang Sudah Dilakukan

1. Setiap berkas dibuka ulang dengan pembaca gambar: format terbaca WebP, bukan HTML atau berkas rusak.
2. Dimensi dicek: semua 1400x1400 piksel (memenuhi syarat minimal 800x800).
3. Sudut kanvas dicek: RGB (255, 255, 255) murni, memastikan latar putih bersih.
4. Bounding box konten dicek: produk tidak menyentuh tepi kanvas, jadi tidak terpotong.
5. Pemeriksaan visual tiap sel: gaya foto produk resmi, depan-belakang, tanpa watermark, tanpa teks promosi, tanpa tangan orang.
6. URL aset dicek balik: mengembalikan `Content-Type: image/jpeg` dan berkas gambar sah.
7. Halaman sumber dicek balik: slug aset benar-benar muncul di halaman belanja Apple (atau arsipnya).

## Berkas Gagal

Tidak ada. Ke-24 berkas berhasil diunduh, dikonversi, dan diverifikasi.
