import { Container } from '../components/Container'
import { ButtonLink } from '../components/Button'
import { UnitPhoto } from '../components/UnitPhoto'
import { SITE } from '../lib/constants'
import { formatRupiah } from '../lib/format'
import { RENTAL_PACKAGES, getAllUnits, getDailyPrice } from '../data/iphone'

/** Paket terpanjang, dipakai untuk menghitung penghematan terbesar. */
const LONGEST_PACKAGE_DAYS = 7

/**
 * Susun fakta hero dari data unit, bukan angka tetap.
 *
 * Angka sengaja dihitung dari data supaya tidak pernah basi. Sebelumnya
 * tarif terendah dan persentase hemat ditulis tetap di sini, dan keduanya
 * jadi salah begitu harga di src/data/iphone.ts diubah. Sekarang kalau
 * harga atau daftar paket berubah, teks di hero ikut menyesuaikan sendiri.
 */
function buildFacts(): readonly { readonly value: string; readonly label: string }[] {
  const units = getAllUnits()
  const dailyPrices = units.map(getDailyPrice)
  const lowestDaily = dailyPrices.length > 0 ? Math.min(...dailyPrices) : 0

  // Penghematan paket terpanjang dibanding membayar tarif harian selama
  // jumlah hari yang sama. Dihitung dari pengali paket, bukan angka tetap.
  const longest = RENTAL_PACKAGES.find((pack) => pack.days === LONGEST_PACKAGE_DAYS)
  const savingsPercent =
    longest === undefined ? 0 : Math.round((1 - longest.multiplier / longest.days) * 100)

  return [
    { value: `${units.length} unit`, label: 'siap disewa hari ini' },
    { value: `Mulai ${formatRupiah(lowestDaily)}`, label: 'tarif paket 1 hari' },
    { value: `Hemat ${savingsPercent} persen`, label: `paket ${LONGEST_PACKAGE_DAYS} hari dibanding harian` },
    { value: 'Tanpa akun', label: 'pakai Apple ID Anda sendiri' },
  ]
}

/**
 * Hero halaman beranda.
 *
 * Atribut data-hero dipakai useGSAP di halaman untuk animasi masuk berurutan.
 * Setiap elemen diberi data-reveal agar tetap tampil bila JavaScript nonaktif
 * (lihat catatan di styles/utilities.css).
 */
export function Hero() {
  const facts = buildFacts()

  return (
    <section className="hero" data-hero aria-labelledby="hero-title">
      <Container className="hero__inner">
        <div>
          <span className="eyebrow" data-reveal>
            Penyewaan iPhone
          </span>
          <h1 className="hero__title" id="hero-title" data-reveal>
            Sewa iPhone hari ini, tanpa membeli.
          </h1>
          <p className="hero__text" data-reveal>
            {SITE.name} menyediakan iPhone siap pakai untuk kerja, produksi konten, dan perjalanan. Pilih unitnya,
            tentukan durasinya, lalu ambil di toko atau minta dikirim.
          </p>

          <div className="hero__actions" data-reveal>
            <ButtonLink to="/katalog">Lihat katalog unit</ButtonLink>
            <ButtonLink to="/tentang" variant="secondary">
              Kenali toko kami
            </ButtonLink>
          </div>

          <dl className="hero__facts" data-reveal>
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="hero__fact-label">{fact.label}</dt>
                <dd className="hero__fact-value">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="hero__figure" data-reveal>
          <UnitPhoto name="iPhone 17" family="17" ratio="4 / 3" loading="eager" />
        </figure>
      </Container>
    </section>
  )
}
