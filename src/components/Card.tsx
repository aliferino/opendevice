import type { ReactNode } from 'react'
import { MOTION } from '../lib/motion'

export interface CardProps {
  readonly children: ReactNode
  readonly className?: string
  /** Ikut animasi reveal saat scroll. Nonaktif untuk item di dalam daftar panjang. */
  readonly reveal?: boolean
  readonly as?: 'div' | 'li' | 'article'
}

/** Permukaan dasar dengan garis tipis, tanpa bayangan tebal dan tanpa blur. */
export function Card({ children, className, reveal = false, as: Tag = 'div' }: CardProps) {
  const revealProps = reveal ? { [MOTION.revealAttribute]: true } : {}
  return (
    <Tag className={className === undefined ? 'card' : `card ${className}`} {...revealProps}>
      {children}
    </Tag>
  )
}
