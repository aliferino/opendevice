import { Hero } from '../sections/Hero'
import { Services } from '../sections/Services'
import { FeaturedUnits } from '../sections/FeaturedUnits'
import { WhyUs } from '../sections/WhyUs'
import { HowItWorks } from '../sections/HowItWorks'
import { CtaBanner } from '../sections/CtaBanner'
import { DataNotice } from '../components/DataNotice'
import { Container } from '../components/Container'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { usePageTransition } from '../hooks/usePageTransition'
import { useRefreshOnLoad } from '../hooks/useScrollRefresh'
import { gsap, MOTION, useGSAP } from '../lib/motion'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

/**
 * Halaman beranda.
 *
 * Dua pekerjaan GSAP di halaman ini:
 * 1. Animasi masuk hero dengan stagger, langsung saat halaman dibuka.
 * 2. Reveal saat scroll untuk bagian lainnya, ditangani useScrollReveal.
 */
export function Home() {
  useDocumentTitle('Sewa iPhone harian dan mingguan')
  const pageRef = usePageTransition<HTMLDivElement>()
  const prefersReducedMotion = usePrefersReducedMotion()

  // Reveal saat scroll untuk seluruh bagian di halaman ini.
  const revealRef = useScrollReveal<HTMLDivElement>({ once: true })
  useRefreshOnLoad('home')

  // Animasi masuk hero. Dijalankan sekali saat mount dan tidak diulang.
  useGSAP(
    () => {
      if (prefersReducedMotion) {
        return
      }
      gsap.from('[data-hero] [data-reveal]', {
        autoAlpha: 0,
        y: MOTION.distance,
        duration: MOTION.duration,
        ease: 'power2.out',
        stagger: MOTION.heroStagger,
      })
    },
    { scope: pageRef, dependencies: [prefersReducedMotion] },
  )

  return (
    <div ref={pageRef}>
      <div ref={revealRef}>
        <Hero />
        <Services />
        <FeaturedUnits />

        <Container>
          <DataNotice>
            harga, stok, dan spesifikasi di halaman ini adalah contoh. Ganti dengan data toko Anda di
            src/data/iphone.ts sebelum website dipublikasikan.
          </DataNotice>
        </Container>

        <WhyUs />
        <HowItWorks />
        <CtaBanner />
      </div>
    </div>
  )
}
