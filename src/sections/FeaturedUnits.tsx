import type { ReactNode } from 'react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { IphoneCard } from '../components/IphoneCard'
import { ButtonLink } from '../components/Button'
import { getAllUnits } from '../data/iphone'

export interface FeaturedUnitsProps {
  /** Catatan opsional, dirender sebagai elemen terakhir di dalam section. */
  readonly notice?: ReactNode
}

/** Cuplikan katalog di beranda, maksimal tiga unit terbaru. */
export function FeaturedUnits({ notice }: FeaturedUnitsProps) {
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
          description="Harga di bawah adalah tarif sewa harian dan mingguan untuk setiap unit. Rincian lengkap ada di halaman detail."
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

        {/* Catatan diletakkan di dalam section, bukan sebagai blok terpisah di
            antara dua section. Dengan begitu ritme jarak antar section tetap
            seragam, dan catatan tetap dekat dengan data yang dijelaskan. */}
        {notice ? <div style={{ marginTop: 'var(--space-6)' }}>{notice}</div> : null}
      </Container>
    </section>
  )
}
