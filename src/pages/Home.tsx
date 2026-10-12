import { Hero } from '../sections/Hero'
import { Services } from '../sections/Services'
import { FeaturedUnits } from '../sections/FeaturedUnits'
import { WhyUs } from '../sections/WhyUs'
import { HowItWorks } from '../sections/HowItWorks'
import { CtaBanner } from '../sections/CtaBanner'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { usePageTransition } from '../hooks/usePageTransition'
import { useRefreshOnLoad } from '../hooks/useScrollRefresh'
import { gsap, MOTION, useGSAP } from '../lib/motion'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

/**
 * Halaman beranda.
 *
 * Dua pekerjaan GSAP di halaman ini, dengan cakupan yang sengaja dipisah:
 * 1. Animasi masuk hero dengan stagger, dikelola blok ini lewat [data-hero].
 * 2. Reveal saat scroll untuk bagian lainnya, ditangani useScrollReveal.
 *
 * Hero berada di luar wadah revealRef supaya useScrollReveal tidak menyetel
 * opacity pada elemen hero. Kalau keduanya menyentuh elemen yang sama,
 * animasi hero berjalan dari 0 ke 0 dan hero tidak pernah tampil.
 */
export function Home() {
  useDocumentTitle('Sewa iPhone paket 1 sampai 7 hari')
  const pageRef = usePageTransition<HTMLDivElement>()
  const prefersReducedMotion = usePrefersReducedMotion()

  // Reveal saat scroll untuk bagian di bawah hero.
  const revealRef = useScrollReveal<HTMLDivElement>()
  useRefreshOnLoad('home')

  // Animasi masuk hero. Dijalankan sekali saat mount dan tidak diulang.
  // Memakai fromTo dengan keadaan akhir eksplisit supaya elemen dipastikan
  // terlihat walau animasi tidak sempat berjalan.
  useGSAP(
    () => {
      const targets = gsap.utils.toArray<HTMLElement>('[data-hero] [data-reveal]')
      // Lewati bila tidak ada elemen hero. Tanpa penjaga ini, GSAP mencatat
      // peringatan "target not found" ke konsol padahal tidak ada yang perlu
      // dianimasikan.
      if (targets.length === 0) {
        return
      }
      if (prefersReducedMotion) {
        gsap.set(targets, { opacity: 1, y: 0 })
        return
      }
      gsap.fromTo(
        targets,
        { opacity: 0, y: MOTION.distance },
        {
          opacity: 1,
          y: 0,
          duration: MOTION.duration,
          ease: 'power2.out',
          stagger: MOTION.heroStagger,
          clearProps: 'transform,opacity',
        },
      )
    },
    { scope: pageRef, dependencies: [prefersReducedMotion] },
  )

  return (
    <div ref={pageRef}>
      <Hero />

      <div ref={revealRef}>
        <Services />
        <FeaturedUnits />

        <WhyUs />
        <HowItWorks />
        <CtaBanner />
      </div>
    </div>
  )
}
