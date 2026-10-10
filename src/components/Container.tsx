import type { ElementType, ReactNode } from 'react'

export interface ContainerProps {
  readonly as?: ElementType
  readonly children: ReactNode
  readonly className?: string
}

/** Pembungkus lebar maksimum dan padding horizontal yang konsisten. */
export function Container({ as: Tag = 'div', children, className }: ContainerProps) {
  return <Tag className={className === undefined ? 'container' : `container ${className}`}>{children}</Tag>
}
