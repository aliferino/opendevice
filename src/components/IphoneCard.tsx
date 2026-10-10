import { Link } from 'react-router-dom'
import type { IphoneUnit } from '../lib/types'
import { formatRupiah, formatRupiahShort, formatStorage } from '../lib/format'
import { getLowestDailyPrice, getLowestWeeklyPrice } from '../data/iphone'
import { Badge } from './Badge'
import { ImagePlaceholder } from './ImagePlaceholder'

export interface IphoneCardProps {
  readonly unit: IphoneUnit
}

/**
 * Kartu unit untuk katalog dan blok rekomendasi.
 * Seluruh kartu bisa diklik lewat tautan pada judul, jadi area klik besar
 * tanpa membungkus semuanya dalam elemen non semantik.
 */
export function IphoneCard({ unit }: IphoneCardProps) {
  const dailyPrice = getLowestDailyPrice(unit)
  const weeklyPrice = getLowestWeeklyPrice(unit)
  const isAvailable = unit.variants.some((variant) => variant.available)
  const storages = unit.variants.map((variant) => variant.storage).join(', ')

  return (
    <article className="unit-card">
      <Link to={`/katalog/${unit.slug}`} className="unit-card__media-link" tabIndex={-1} aria-hidden="true">
        <ImagePlaceholder label={unit.name} ratio="4 / 3" />
      </Link>

      <div className="unit-card__body">
        <div className="unit-card__meta">
          <span className="note">Seri {unit.family}</span>
          <Badge tone={isAvailable ? 'accent' : 'danger'}>{isAvailable ? 'Tersedia' : 'Stok habis'}</Badge>
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

        <p className="note unit-card__note">Kapasitas tersedia: {storages}</p>

        <ul className="unit-card__storages" aria-label={`Kapasitas ${unit.name}`}>
          {unit.variants.map((variant) => (
            <li key={variant.storage}>
              <Badge tone={variant.available ? 'muted' : 'default'}>
                {formatStorage(variant.storage)}
                {variant.available ? '' : ' - kosong'}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
