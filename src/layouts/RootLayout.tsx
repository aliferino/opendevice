import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Container } from '../components/Container'

/**
 * Kerangka halaman.
 *
 * Urutan dokumen yang benar: tautan lompat, header, main dengan id target,
 * lalu footer. Setiap halaman merender isinya lewat Outlet.
 */
export function RootLayout() {
  return (
    <>
      <a className="skip-link" href="#konten">
        Lompat ke konten utama
      </a>
      <Navbar />
      <main id="konten" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <Container>
        <p className="visually-hidden">OpenDevice, penyewaan iPhone dengan paket 1 sampai 7 hari.</p>
      </Container>
    </>
  )
}
