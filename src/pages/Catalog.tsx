import { ChevronDown } from 'lucide-react'
import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { IphoneCard } from '../components/IphoneCard'
import { DataNotice } from '../components/DataNotice'
import { ButtonLink, ButtonAction } from '../components/Button'
import { Icon } from '../components/Icon'
import { filterUnits, getAvailableStorages, getFamilies, getAllUnits } from '../data/iphone'
import { formatStorage } from '../lib/format'
import type { CatalogFilters, SortKey } from '../lib/types'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { usePageTransition } from '../hooks/usePageTransition'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useRefreshOnUpdate } from '../hooks/useScrollRefresh'
import { useState } from 'react'

const SORT_LABELS: readonly { readonly value: SortKey; readonly label: string }[] = [
  { value: 'newest', label: 'Terbaru' },
  { value: 'price-asc', label: 'Harga terendah' },
  { value: 'price-desc', label: 'Harga tertinggi' },
]

const DEFAULT_FILTERS: CatalogFilters = {
  family: 'all',
  storage: 'all',
  keyword: '',
  sort: 'newest',
}

/**
 * Halaman katalog.
 *
 * Filter disimpan di state lokal supaya tidak perlu backend. Karena React
 * Compiler aktif, penghitungan daftar tetap efisien tanpa useMemo manual:
 * hanya satu perhitungan ringan untuk 12 unit.
 */
export function Catalog() {
  useDocumentTitle('Katalog unit iPhone', 'Daftar iPhone yang bisa disewa harian atau mingguan beserta tarifnya.')
  const pageRef = usePageTransition<HTMLDivElement>()
  const revealRef = useScrollReveal<HTMLDivElement>({ once: true })

  const [filters, setFilters] = useState<CatalogFilters>(DEFAULT_FILTERS)
  const families = getFamilies()
  const storages = getAvailableStorages()
  const units = filterUnits(getAllUnits(), filters)
  const isFiltered =
    filters.family !== 'all' || filters.storage !== 'all' || filters.keyword.trim().length > 0 || filters.sort !== 'newest'

  // Daftar berubah, jadi posisi ScrollTrigger perlu dihitung ulang.
  useRefreshOnUpdate(`${units.length}-${filters.family}-${filters.storage}-${filters.sort}-${filters.keyword}`)

  return (
    <div ref={pageRef}>
      <Container>
        <PageHeader
          eyebrow="Katalog"
          title="Unit iPhone yang bisa disewa"
          description="Pilih seri dan kapasitas yang sesuai kebutuhan. Semua unit sudah melewati pemeriksaan fungsi dan kebersihan sebelum diserahkan."
        />

        <div className="catalog__toolbar" role="search">
          <div className="catalog__field">
            <label className="label" htmlFor="catalog-keyword">
              Cari unit
            </label>
            <input
              id="catalog-keyword"
              className="input"
              type="search"
              placeholder="Contoh: iPhone 13"
              value={filters.keyword}
              onChange={(event) => setFilters({ ...filters, keyword: event.target.value })}
              autoComplete="off"
            />
          </div>

          <div className="catalog__field">
            <label className="label" htmlFor="catalog-family">
              Seri
            </label>
            <span className="select-wrap">
              <select
                id="catalog-family"
                className="select"
                value={filters.family}
                onChange={(event) => setFilters({ ...filters, family: event.target.value })}
              >
                <option value="all">Semua seri</option>
                {families.map((family) => (
                  <option key={family} value={family}>
                    Seri {family}
                  </option>
                ))}
              </select>
              <Icon icon={ChevronDown} size="sm" className="select-wrap__icon" />
            </span>
          </div>

          <div className="catalog__field">
            <label className="label" htmlFor="catalog-storage">
              Kapasitas
            </label>
            <span className="select-wrap">
              <select
                id="catalog-storage"
                className="select"
                value={filters.storage}
                onChange={(event) => setFilters({ ...filters, storage: event.target.value })}
              >
                <option value="all">Semua kapasitas</option>
                {storages.map((storage) => (
                  <option key={storage} value={storage}>
                    {formatStorage(storage)}
                  </option>
                ))}
              </select>
              <Icon icon={ChevronDown} size="sm" className="select-wrap__icon" />
            </span>
          </div>

          <div className="catalog__field">
            <label className="label" htmlFor="catalog-sort">
              Urutkan
            </label>
            <span className="select-wrap">
              <select
                id="catalog-sort"
                className="select"
                value={filters.sort}
                onChange={(event) => setFilters({ ...filters, sort: event.target.value as SortKey })}
              >
                {SORT_LABELS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <Icon icon={ChevronDown} size="sm" className="select-wrap__icon" />
            </span>
          </div>
        </div>

        <div className="catalog__summary">
          <p className="catalog__count" aria-live="polite">
            {units.length} unit ditemukan
          </p>
          {isFiltered ? (
            <ButtonAction variant="ghost" small onClick={() => setFilters(DEFAULT_FILTERS)}>
              Kosongkan filter
            </ButtonAction>
          ) : null}
        </div>

        <div ref={revealRef}>
          {units.length > 0 ? (
            <ul className="grid grid--catalog">
              {units.map((unit) => (
                <li key={unit.slug} data-reveal>
                  <IphoneCard unit={unit} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="catalog__empty">
              <h2 className="catalog__empty-title">Tidak ada unit yang cocok</h2>
              <p className="text-muted">
                Coba ubah kata kunci, pilih seri lain, atau kosongkan filter untuk melihat seluruh katalog.
              </p>
              <div style={{ marginTop: 'var(--space-5)' }}>
                <ButtonAction onClick={() => setFilters(DEFAULT_FILTERS)}>Kosongkan filter</ButtonAction>
              </div>
            </div>
          )}
        </div>

        <div style={{ marginTop: 'var(--space-7)' }}>
          <DataNotice>
            tarif dan ketersediaan adalah contoh. Ganti di src/data/iphone.ts dan sesuaikan dengan stok nyata toko
            Anda.
          </DataNotice>
        </div>

        <div style={{ marginTop: 'var(--space-6)' }}>
          <ButtonLink to="/syarat-ketentuan" variant="secondary">
            Baca syarat dan ketentuan sewa
          </ButtonLink>
        </div>
      </Container>
    </div>
  )
}
