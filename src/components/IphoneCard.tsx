import { Link } from 'react-router-dom'
import type { IphoneUnit } from '../lib/types'
import { formatRupiah, formatRupiahShort } from '../lib/format'
import { getDailyPrice, getWeeklyPrice } from '../data/iphone'
import { Badge } from './Badge'
import { ImagePlaceholder } from './ImagePlaceholder'

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
 */
export function IphoneCard({ unit }: IphoneCardProps) {
  const dailyPrice = getDailyPrice(unit)
  const weeklyPrice = getWeeklyPrice(unit)
  const isAvailable = unit.stock > 0

  return (
    <article className="unit-card">
      <Link to={`/katalog/${unit.slug}`} className="unit-card__media-link" tabIndex={-1} aria-hidden="true">
        <ImagePlaceholder label={unit.name} ratio="4 / 3" />
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

        <dl className="unit-card__price">
          <div>
            <dt>Per hari</dt>
            <dd>
              {formatRupiah(dailyPrice)}
              <span className="unit-card__price-scale"> ({formatRupiahShort(dailyPrice)})</span>
            </dd>
          </div>
          <div>
            <dt>Per minggu</dt>
            <dd>{formatRupiah(weeklyPrice)}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}
