import type { ReactNode } from 'react'

export interface PageHeaderProps {
  readonly eyebrow?: string
  readonly title: string
  readonly description?: string
  readonly children?: ReactNode
}

/**
 * Kepala halaman dalam.
 * Tinggi tidak dipaksa penuh layar supaya konten langsung terlihat di ponsel.
 */
export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <div className="page-header" data-page-heading>
      {eyebrow !== undefined ? <span className="eyebrow">{eyebrow}</span> : null}
      <h1 className="page-header__title">{title}</h1>
      {description !== undefined ? <p className="page-header__text">{description}</p> : null}
      {children !== undefined ? <div className="page-header__extra">{children}</div> : null}
    </div>
  )
}
