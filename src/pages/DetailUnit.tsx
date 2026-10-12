import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { ColorGallery } from '../components/ColorGallery'
import { Badge } from '../components/Badge'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { ButtonExtLink, ButtonLink } from '../components/Button'
import { DataNotice } from '../components/DataNotice'
import { IphoneCard } from '../components/IphoneCard'
import { Icon } from '../components/Icon'
import { Check } from 'lucide-react'
import { getPackages, getRelatedUnits, getUnitBySlug } from '../data/iphone'
import { formatRupiah } from '../lib/format'
import { SITE } from '../lib/constants'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { usePageTransition } from '../hooks/usePageTransition'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { NotFound } from './NotFound'
import type { IphoneSpec } from '../lib/types'

/** Pasangan label bahasa Indonesia dan kunci spesifikasi. */
const SPEC_ENTRIES: readonly { readonly key: keyof IphoneSpec; readonly label: string }[] = [
  { key: 'screen', label: 'Layar' },
  { key: 'chip', label: 'Chipset' },
  { key: 'camera', label: 'Kamera' },
  { key: 'battery', label: 'Baterai' },
  { key: 'charging', label: 'Pengisian daya' },
  { key: 'weight', label: 'Berat' },
  { key: 'waterResistance', label: 'Ketahanan air' },
]

export interface DetailUnitProps {
  readonly slug: string
}

/**
 * Halaman detail satu unit.
 *
 * Bila slug tidak dikenal, halaman 404 yang dirender, bukan pengalihan,
 * supaya alamat yang salah tetap terlihat salah bagi pengguna.
 */
export function DetailUnit({ slug }: DetailUnitProps) {
  const unit = getUnitBySlug(slug)
  useDocumentTitle(unit === undefined ? 'Unit tidak ditemukan' : unit.name)
  const pageRef = usePageTransition<HTMLDivElement>()
  const revealRef = useScrollReveal<HTMLDivElement>()

  if (unit === undefined) {
    return <NotFound />
  }

  const related = getRelatedUnits(unit)
  const packages = getPackages(unit)
  const whatsappNumber = SITE.whatsapp.replace(/[^\d]/g, '')
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Halo ${SITE.name}, saya ingin menyewa ${unit.name}. Mohon info ketersediaan dan total biayanya.`,
  )}`

  return (
    <div ref={pageRef}>
      <div ref={revealRef}>
        <Container>
          <div style={{ paddingTop: 'var(--space-6)' }}>
            <Breadcrumbs
              items={[{ label: 'Beranda', to: '/' }, { label: 'Katalog', to: '/katalog' }, { label: unit.name }]}
            />
          </div>

          <PageHeader eyebrow={`Seri ${unit.family}, ${unit.releaseYear}`} title={unit.name} description={unit.tagline} />

          <div className="detail__grid">
            <ColorGallery unit={unit} />

            <div>
              <div className="detail__tags" data-reveal>
                <Badge tone="accent">Kondisi {unit.condition.toLowerCase()}</Badge>
                <Badge tone={unit.stock > 0 ? 'muted' : 'danger'}>
                  {unit.stock > 0 ? `${unit.stock} unit tersedia` : 'Stok habis'}
                </Badge>
              </div>

              <div className="detail__section" data-reveal>
                <h2 className="detail__section-title">Harga sewa</h2>
                <dl className="detail__price">
                  {packages.map((pack) => (
                    <div className="detail__price-item" key={pack.days}>
                      <dt className="detail__price-label">{pack.days} hari</dt>
                      <dd className="detail__price-value">{formatRupiah(pack.price)}</dd>
                    </div>
                  ))}
                </dl>
                <p className="detail__price-note">
                  Paket yang lebih panjang memakai tarif per hari lebih murah. Hubungi kami bila butuh durasi lain di
                  luar paket ini.
                </p>
              </div>

              <div className="detail__section" data-reveal>
                <h2 className="detail__section-title">Yang Anda terima</h2>
                <ul className="detail__list">
                  {unit.includes.map((item) => (
                    <li className="detail__list-item" key={item}>
                      <Icon icon={Check} size="sm" className="detail__list-marker" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detail__section" data-reveal>
                <h2 className="detail__section-title">Ajukan sewa</h2>
                <p className="detail__paragraph">
                  Sebutkan model, tanggal mulai, dan tanggal selesai. Kami cek ketersediaan terlebih dahulu, lalu
                  kirim rincian biaya dan instruksi verifikasi data.
                </p>
                <div className="detail__actions">
                  <ButtonExtLink href={whatsappHref}>Tanya lewat WhatsApp</ButtonExtLink>
                  <ButtonLink to="/katalog" variant="secondary">
                    Lihat unit lain
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>

          <section className="detail__section" aria-labelledby="deskripsi-title">
            <h2 className="detail__section-title" id="deskripsi-title">
              Tentang unit ini
            </h2>
            <p className="detail__paragraph" data-reveal>
              {unit.description}
            </p>
            <ul className="detail__list" data-reveal>
              {unit.highlights.map((highlight) => (
                <li className="detail__list-item" key={highlight}>
                  <Icon icon={Check} size="sm" className="detail__list-marker" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="detail__section" aria-labelledby="spesifikasi-title">
            <h2 className="detail__section-title" id="spesifikasi-title">
              Spesifikasi
            </h2>
            <dl className="spec-list" data-reveal>
              {SPEC_ENTRIES.map((entry) => (
                <div className="spec-list__row" key={entry.key}>
                  <dt className="spec-list__key">{entry.label}</dt>
                  <dd className="spec-list__value">{unit.specs[entry.key]}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="detail__section">
            <DataNotice>
              spesifikasi dan tarif di atas adalah contoh. Verifikasi ulang ke sumber resmi dan sesuaikan dengan unit
              yang benar benar Anda sewakan.
            </DataNotice>
          </div>

          <section className="detail__section" aria-labelledby="mirip-title">
            <h2 className="detail__section-title" id="mirip-title">
              Unit lain yang mungkin cocok
            </h2>
            <ul className="grid grid--catalog">
              {related.map((item) => (
                <li key={item.slug} data-reveal>
                  <IphoneCard unit={item} />
                </li>
              ))}
            </ul>
          </section>
        </Container>
      </div>
    </div>
  )
}
