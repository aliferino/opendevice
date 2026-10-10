import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { IphoneCard } from '../components/IphoneCard'
import { ButtonLink } from '../components/Button'
import { getAllUnits } from '../data/iphone'

/** Cuplikan katalog di beranda, maksimal tiga unit terbaru. */
export function FeaturedUnits() {
  const featured = getAllUnits()
    .slice()
    .sort((a, b) => b.releaseYear - a.releaseYear)
    .slice(0, 3)

  return (
    <section className="section" aria-labelledby="unggulan-title">
      <Container>
        <SectionHeading
          eyebrow="Unit unggulan"
          title="Paling sering disewa minggu ini"
          description="Harga di bawah adalah tarif sewa terendah dari setiap unit. Tarif per kapasitas ada di halaman detail."
        />
        <h2 id="unggulan-title" className="visually-hidden">
          Unit unggulan
        </h2>

        <ul className="grid grid--catalog" style={{ marginTop: 'var(--space-7)' }}>
          {featured.map((unit) => (
            <li key={unit.slug} data-reveal>
              <IphoneCard unit={unit} />
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'var(--space-6)' }} data-reveal>
          <ButtonLink to="/katalog" variant="secondary">
            Lihat semua unit
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
