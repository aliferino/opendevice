import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { Home } from './pages/Home'
import { Catalog } from './pages/Catalog'
import { DetailUnit } from './pages/DetailUnit'
import { About } from './pages/About'
import { Terms } from './pages/Terms'
import { NotFound } from './pages/NotFound'
import { useDetailUnitSlug } from './hooks/useDetailUnitSlug'

/**
 * Rute detail unit.
 *
 * Hook useParams hanya membaca parameter di dalam konteks Routes, jadi
 * pembacaan slug harus terjadi di komponen yang dirender oleh rute ini,
 * bukan di AppRoutes yang berada di atas elemen Routes.
 */
function DetailUnitRoute() {
  const slug = useDetailUnitSlug()
  return <DetailUnit slug={slug} />
}

/**
 * Akar aplikasi.
 *
 * Semua halaman berada di dalam RootLayout supaya header, footer, dan tautan
 * lompat konten hanya dirender sekali dan tidak ikut beranimasi saat pindah
 * halaman.
 */
function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Catalog />} />
        <Route path="/katalog/:slug" element={<DetailUnitRoute />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/syarat-ketentuan" element={<Terms />} />
        <Route path="/beranda" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
