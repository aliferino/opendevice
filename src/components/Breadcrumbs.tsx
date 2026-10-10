import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Icon } from './Icon'

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
              {isLast ? null : <Icon icon={ChevronRight} size="sm" className="breadcrumbs__separator" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
