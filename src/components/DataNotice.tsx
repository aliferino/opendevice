/** Penanda kecil untuk membedakan antara konten asli dan data contoh. */

export interface DataNoticeProps {
  readonly children: string
}

export function DataNotice({ children }: DataNoticeProps) {
  return (
    <p className="data-notice">
      <span className="data-notice__tag">Data contoh</span>
      {children}
    </p>
  )
}
