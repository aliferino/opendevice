import { useCallback, useRef, useState } from 'react'
import { ImagePlaceholder } from './ImagePlaceholder'
import { getColorsForFamily } from '../lib/colors'
import { gsap, MOTION, useGSAP } from '../lib/motion'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'
import type { IphoneUnit } from '../lib/types'

export interface ColorGalleryProps {
  readonly unit: IphoneUnit
}

/** Jarak geser minimum untuk dianggap sebagai swipe, dalam piksel. */
const SWIPE_THRESHOLD = 40

/**
 * Galeri warna unit, hanya untuk pajangan.
 *
 * Ini bukan penanda stok. Tujuannya semata memperlihatkan pilihan warna yang
 * ada, jadi tidak ada label ketersediaan di dalam galeri.
 *
 * Gambar dibaca otomatis dari folder public/images/iphone lewat helper
 * getColorsForFamily, jadi berkas baru langsung ikut tampil.
 */
export function ColorGallery({ unit }: ColorGalleryProps) {
  const colors = getColorsForFamily(unit.family)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const stageRef = useRef<HTMLDivElement>(null)
  const activeImageRef = useRef<HTMLImageElement>(null)
  const touchStartX = useRef<number | null>(null)

  const count = colors.length
  const activeColor = colors[index]

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) {
        return
      }
      setIndex(((next % count) + count) % count)
    },
    [count],
  )

  const goPrevious = useCallback(() => goTo(index - 1), [goTo, index])
  const goNext = useCallback(() => goTo(index + 1), [goTo, index])

  // Animasi halus saat warna berganti. Dilewati bila pengguna meminta animasi
  // diminimalkan, dan CSS tetap menampilkan gambar aktif walau animasi gagal.
  useGSAP(
    () => {
      if (prefersReducedMotion) {
        return
      }
      const image = activeImageRef.current
      if (image === null) {
        return
      }
      gsap.fromTo(
        image,
        { autoAlpha: 0, y: MOTION.distance / 2 },
        {
          autoAlpha: 1,
          y: 0,
          duration: MOTION.duration,
          ease: 'power2.out',
          clearProps: 'transform,opacity,visibility',
        },
      )
    },
    { dependencies: [index, prefersReducedMotion], revertOnUpdate: true },
  )

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goPrevious()
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      goNext()
    }
  }

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const start = touchStartX.current
    touchStartX.current = null
    if (start === null) {
      return
    }
    const end = event.changedTouches[0]?.clientX
    if (end === undefined) {
      return
    }
    const delta = end - start
    if (Math.abs(delta) < SWIPE_THRESHOLD) {
      return
    }
    if (delta < 0) {
      goNext()
    } else {
      goPrevious()
    }
  }

  if (count === 0 || activeColor === undefined) {
    return (
      <figure className="color-gallery" data-reveal>
        <ImagePlaceholder
          label={`Foto ${unit.name}, rasio 1 banding 1`}
          alt={`Foto ${unit.name} belum tersedia`}
          ratio="1 / 1"
        />
        <figcaption className="color-gallery__note">
          Foto unit belum tersedia. Hubungi kami lewat WhatsApp bila ingin melihat kondisi unit langsung.
        </figcaption>
      </figure>
    )
  }

  return (
    <figure className="color-gallery" data-reveal>
      <div
        className="color-gallery__stage"
        ref={stageRef}
        role="group"
        aria-roledescription="galeri warna"
        aria-label={`Pilihan warna ${unit.name}`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {colors.map((color, colorIndex) => (
          <img
            key={color.slug}
            ref={colorIndex === index ? activeImageRef : undefined}
            className={`color-gallery__image${colorIndex === index ? ' is-active' : ''}`}
            src={color.url}
            alt={`${unit.name} warna ${color.label}`}
            width={1400}
            height={1400}
            loading={colorIndex === index ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
      </div>

      <p className="color-gallery__label" aria-live="polite">
        <span className="color-gallery__label-name">{activeColor.label}</span>
        <span className="color-gallery__label-count">
          {index + 1} dari {count}
        </span>
      </p>

      {count > 1 ? (
        <ul className="color-gallery__thumbs" aria-label={`Pilih warna ${unit.name}`}>
          {colors.map((color, colorIndex) => (
            <li key={color.slug}>
              <button
                type="button"
                className={`color-gallery__thumb${colorIndex === index ? ' is-active' : ''}`}
                onClick={() => goTo(colorIndex)}
                aria-pressed={colorIndex === index}
                aria-label={`Tampilkan warna ${color.label}`}
              >
                <img
                  className="color-gallery__thumb-image"
                  src={color.url}
                  alt=""
                  width={160}
                  height={120}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <figcaption className="color-gallery__note">
        Pilihan warna dapat berubah. Hubungi kami lewat WhatsApp untuk ketersediaan warna.
      </figcaption>
    </figure>
  )
}
