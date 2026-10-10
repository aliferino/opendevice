import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { Badge } from '../components/Badge'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { ButtonExtLink, ButtonLink } from '../components/Button'
import { DataNotice } from '../components/DataNotice'
import { IphoneCard } from '../components/IphoneCard'
import { Icon } from '../components/Icon'
import { Check } from 'lucide-react'
import { getRelatedUnits, getUnitBySlug } from '../data/iphone'
import { formatRupiah, formatStorage } from '../lib/format'
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
            <figure className="detail__figure" data-reveal>
              <ImagePlaceholder
                label={`Foto ${unit.name}, rasio 4 banding 3`}
                alt={`Placeholder foto ${unit.name}, ganti dengan foto asli unit`}
                ratio="4 / 3"
              />
              <figcaption className="detail__figure-note">
                Slot foto utama. Tambahkan dua sampai tiga foto tambahan saat foto asli sudah siap.
              </figcaption>
            </figure>

            <div>
              <div className="detail__tags" data-reveal>
                <Badge tone="accent">Kondisi {unit.condition.toLowerCase()}</Badge>
                <Badge tone={unit.stock > 0 ? 'muted' : 'danger'}>
                  {unit.stock > 0 ? `${unit.stock} unit tersedia` : 'Stok habis'}
                </Badge>
                <Badge tone="muted">{unit.variants.length} pilihan kapasitas</Badge>
              </div>

              <div className="detail__section" data-reveal>
                <h2 className="detail__section-title">Harga sewa</h2>
                <table className="price-table">
                  <caption>
                    Tarif sewa {unit.name} per kapasitas. Harga mingguan berlaku untuk 7 hari kalender.
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Kapasitas</th>
                      <th scope="col">Per hari</th>
                      <th scope="col">Per minggu</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {unit.variants.map((variant) => (
                      <tr key={variant.storage}>
                        <th scope="row">{formatStorage(variant.storage)}</th>
                        <td className="price-table__value">{formatRupiah(variant.price.perDay)}</td>
                        <td className="price-table__value">{formatRupiah(variant.price.perWeek)}</td>
                        <td className="price-table__note">{variant.available ? 'Tersedia' : 'Kosong'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                  Sebutkan kapasitas, tanggal mulai, dan tanggal selesai. Kami cek stok terlebih dahulu, lalu kirim
                  rincian biaya dan instruksi verifikasi data.
                </p>
                <div className="detail__actions">
                  <ButtonExtLink href={whatsappHref}>Tanya lewat WhatsApp</ButtonExtLink>
                  <ButtonLink to="/katalog" variant="secondary">
                    Bandingkan unit lain
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
