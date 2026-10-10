import { Container } from '../components/Container'
import { ButtonLink } from '../components/Button'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { usePageTransition } from '../hooks/usePageTransition'

/**
 * Halaman 404.
 *
 * Dipakai sebagai rute cadangan, dan juga dipanggil langsung oleh halaman
 * detail bila slug unit tidak dikenal, supaya alamat yang salah tetap
 * terlihat salah bagi pengguna.
 */
export function NotFound() {
  useDocumentTitle('Halaman tidak ditemukan')
  const pageRef = usePageTransition<HTMLDivElement>()

  return (
    <div ref={pageRef}>
      <Container>
        <div className="not-found">
          <p className="not-found__code">404</p>
          <h1 className="not-found__title">Halaman tidak ditemukan</h1>
          <p className="not-found__text">
            Alamat yang Anda buka tidak tersedia. Mungkin tautannya salah ketik, atau halamannya sudah dipindahkan.
            Silakan kembali ke beranda atau lihat daftar unit yang bisa disewa.
          </p>
          <div className="not-found__actions">
            <ButtonLink to="/">Kembali ke beranda</ButtonLink>
            <ButtonLink to="/katalog" variant="secondary">
              Lihat katalog unit
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  )
}
