/**
 * Tulis judul dokumen per halaman.
 *
 * Pola resmi React untuk nilai yang tidak perlu memicu render ulang
 * adalah menulisnya langsung saat render, jadi tidak ada useEffect di sini.
 */
export function useDocumentTitle(title: string, description?: string): void {
  const fullTitle = `${title} | OpenDevice`
  if (typeof document !== 'undefined' && document.title !== fullTitle) {
    document.title = fullTitle
  }

  if (typeof document === 'undefined' || description === undefined) {
    return
  }
  const meta = document.querySelector('meta[name="description"]')
  if (meta instanceof HTMLMetaElement && meta.content !== description) {
    meta.content = description
  }
}
