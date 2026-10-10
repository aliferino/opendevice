import type { ReactNode } from 'react'

export interface BadgeProps {
  readonly children: ReactNode
  readonly tone?: 'default' | 'accent' | 'muted' | 'danger'
}

/** Label kecil untuk status ketersediaan atau penanda seri. */
export function Badge({ children, tone = 'default' }: BadgeProps) {
  const className = tone === 'default' ? 'tag' : `tag tag--${tone}`
  return <span className={className}>{children}</span>
}
