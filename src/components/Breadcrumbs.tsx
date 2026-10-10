import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

export interface BreadcrumbsProps {
  readonly items: readonly { readonly label: string; readonly to?: string }[]
}

/** Jejak navigasi untuk membantu orientasi, memakai elemen nav dengan ordered list. */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Jejak navigasi" className="breadcrumbs">
      <ol className="breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          let content: ReactNode = item.label
          if (item.to !== undefined && !isLast) {
            content = (
              <Link to={item.to} className="breadcrumbs__link">
                {item.label}
              </Link>
            )
          }
          return (
            <li key={`${item.label}-${index}`} className="breadcrumbs__item">
              {content}
              {isLast ? null : (
                <span className="breadcrumbs__separator" aria-hidden="true">
                  /
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
