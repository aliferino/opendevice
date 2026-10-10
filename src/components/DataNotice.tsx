/** Penanda kecil untuk membedakan antara konten asli dan data contoh. */

import { Info } from 'lucide-react'
import { Icon } from './Icon'

export interface DataNoticeProps {
  readonly children: string
}

export function DataNotice({ children }: DataNoticeProps) {
  return (
    <p className="data-notice">
      <Icon icon={Info} size="sm" className="data-notice__icon" />
      <span className="data-notice__tag">Data contoh</span>
      {children}
    </p>
  )
}
