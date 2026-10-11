import { Container } from '../components/Container'
import { ButtonLink } from '../components/Button'
import { UnitPhoto } from '../components/UnitPhoto'
import { SITE } from '../lib/constants'

const FACTS: readonly { readonly value: string; readonly label: string }[] = [
  { value: '7 unit', label: 'siap disewa hari ini' },
  { value: 'Harian', label: 'mulai Rp45.000' },
  { value: 'Mingguan', label: 'lebih hemat hingga 20 persen' },
  { value: 'Tanpa akun', label: 'pakai Apple ID Anda sendiri' },
]

/**
 * Hero halaman beranda.
 *
 * Atribut data-hero dipakai useGSAP di halaman untuk animasi masuk berurutan.
 * Setiap elemen diberi data-reveal agar tetap tampil bila JavaScript nonaktif
 * (lihat catatan di styles/utilities.css).
 */
export function Hero() {
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
            {FACTS.map((fact) => (
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
