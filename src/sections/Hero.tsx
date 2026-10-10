import { Container } from '../components/Container'
import { ButtonLink } from '../components/Button'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { MOTION } from '../lib/motion'
import { SITE } from '../lib/constants'

const FACTS: readonly { readonly value: string; readonly label: string }[] = [
  { value: '12 unit', label: 'siap disewa hari ini' },
  { value: 'Harian', label: 'mulai Rp38.000' },
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
          <ImagePlaceholder
            label="Foto unit hero, rasio 4 banding 3"
            alt="Placeholder foto unit iPhone unggulan OpenDevice, siap diganti foto asli"
            ratio="4 / 3"
          />
          <figcaption className="hero__figure-caption">
            <span>Slot foto utama</span>
            <span>{MOTION.revealDelayNote}</span>
          </figcaption>
        </figure>
      </Container>
    </section>
  )
}
