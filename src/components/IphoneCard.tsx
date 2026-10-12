import { Link } from 'react-router-dom'
import type { IphoneUnit } from '../lib/types'
import { formatRupiah } from '../lib/format'
import { getPackages } from '../data/iphone'
import { Badge } from './Badge'
import { UnitPhoto } from './UnitPhoto'

export interface IphoneCardProps {
  readonly unit: IphoneUnit
}

/**
 * Kartu unit untuk katalog dan blok rekomendasi.
 * Seluruh kartu bisa diklik lewat tautan pada judul, jadi area klik besar
 * tanpa membungkus semuanya dalam elemen non semantik.
 *
 * Kapasitas sengaja tidak ditampilkan. Penyewa memilih berdasarkan seri dan
 * harga, bukan kapasitas penyimpanan.
 *
 * Harga ditampilkan sekali saja, dalam bentuk daftar paket durasi. Tidak ada
 * baris harga harian terpisah, karena paket 1 hari sudah mewakili harga
 * harian, dan menampilkan keduanya hanya menduplikasi angka yang sama.
 */
export function IphoneCard({ unit }: IphoneCardProps) {
  const packages = getPackages(unit)
  const isAvailable = unit.stock > 0

  return (
    <article className="unit-card">
      <Link to={`/katalog/${unit.slug}`} className="unit-card__media-link" tabIndex={-1} aria-hidden="true">
        <UnitPhoto name={unit.name} family={unit.family} ratio="4 / 3" loading="lazy" />
      </Link>

      <div className="unit-card__body">
        <div className="unit-card__meta">
          <span className="unit-card__meta-group">
            <span className="note">Seri {unit.family}</span>
            {unit.popular ? <Badge tone="accent">Paling sering disewa</Badge> : null}
          </span>
          <span className="unit-card__meta-availability">
            <Badge tone={isAvailable ? 'muted' : 'danger'}>{isAvailable ? 'Tersedia' : 'Stok habis'}</Badge>
          </span>
        </div>

        <h3 className="unit-card__title">
          <Link to={`/katalog/${unit.slug}`} className="unit-card__title-link">
            {unit.name}
          </Link>
        </h3>

        <p className="unit-card__tagline">{unit.tagline}</p>

        <div className="unit-card__price">
          <p className="unit-card__price-label">Paket sewa</p>
          <dl className="unit-card__packages">
            {packages.map((pack) => (
              <div className="unit-card__package" key={pack.days}>
                <dt>{pack.days} hari</dt>
                <dd>{formatRupiah(pack.price)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  )
}
