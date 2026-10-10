import { MOTION } from '../lib/motion'

export interface SectionHeadingProps {
  readonly eyebrow?: string
  readonly title: string
  readonly description?: string
  readonly align?: 'start' | 'center'
  readonly level?: 2 | 3
  /** Ikut animasi reveal saat scroll. Aktif secara bawaan. */
  readonly reveal?: boolean
}

/**
 * Judul bagian yang dipakai berulang di banyak halaman.
 * Heading level dijaga agar hierarki dokumen tetap runtut.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
  level = 2,
  reveal = true,
}: SectionHeadingProps) {
  const Heading = level === 2 ? 'h2' : 'h3'
  const revealProps = reveal ? { [MOTION.revealAttribute]: true } : {}

  return (
    <header className={`section-heading section-heading--${align}`} {...revealProps}>
      {eyebrow !== undefined ? <span className="eyebrow">{eyebrow}</span> : null}
      <Heading className="section-heading__title">{title}</Heading>
      {description !== undefined ? <p className="section-heading__text">{description}</p> : null}
    </header>
  )
}
