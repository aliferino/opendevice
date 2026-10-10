import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { SectionHeading } from '../components/SectionHeading'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { ButtonLink } from '../components/Button'
import { SITE, WHY_US } from '../lib/constants'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { usePageTransition } from '../hooks/usePageTransition'
import { useScrollReveal } from '../hooks/useScrollReveal'

/** Angka ringkas tentang toko. Nilai contoh, ganti sesuai keadaan nyata. */
const FACTS: readonly { readonly label: string; readonly value: string }[] = [
  { label: 'Berdiri sejak', value: '2019' },
  { label: 'Unit aktif', value: '12 unit' },
  { label: 'Lokasi', value: SITE.city },
  { label: 'Jam layanan', value: '08.00 sampai 21.00' },
]

/** Prinsip kerja yang dipegang toko. */
const PRINCIPLES: readonly { readonly title: string; readonly body: string }[] = [
  {
    title: 'Transparan sejak awal',
    body: 'Tarif, deposit, dan syarat kami sampaikan sebelum Anda memutuskan. Tidak ada biaya yang muncul di tengah masa sewa tanpa persetujuan Anda.',
  },
  {
    title: 'Perangkat siap pakai',
    body: 'Unit diserahkan dalam keadaan bersih, terisi daya, dan sudah melewati pemeriksaan fungsi. Anda tidak perlu menyiapkan apa pun selain Apple ID sendiri.',
  },
  {
    title: 'Manusia yang menjawab',
    body: 'Semua pertanyaan dijawab langsung oleh tim toko, bukan bot. Kalau ada kendala di tengah masa sewa, Anda bisa menghubungi kami di jam layanan.',
  },
]

/**
 * Halaman Tentang Kami.
 *
 * Berisi cerita singkat toko, angka ringkas, dan prinsip kerja. Tidak ada
 * klaim berlebihan, supaya halaman ini tetap dapat dipercaya pembaca.
 */
export function About() {
  useDocumentTitle('Tentang kami', 'Cerita, prinsip, dan cara kerja OpenDevice dalam menyewakan iPhone.')
  const pageRef = usePageTransition<HTMLDivElement>()
  const revealRef = useScrollReveal<HTMLDivElement>({ once: true })

  return (
    <div ref={pageRef}>
      <Container>
        <PageHeader
          eyebrow="Tentang kami"
          title="Toko sewa iPhone yang mengutamakan kejelasan"
          description="OpenDevice berawal dari satu masalah sederhana: menyewa perangkat seharusnya tidak membingungkan. Kami membangun toko ini agar harga, syarat, dan kondisi unit terbuka sejak percakapan pertama."
        />
      </Container>

      <Container>
        <div ref={revealRef}>
          <div className="about__grid">
            <div className="about__prose" data-reveal>
              <SectionHeading
                eyebrow="Cerita kami"
                title="Dimulai dari kebutuhan yang tidak terlayani"
                reveal={false}
              />
              <p>
                Kami mulai tahun 2019 dengan tiga unit dan satu keyakinan: penyewa berhak tahu persis apa yang
                mereka bayar. Banyak penyewa sebelumnya merasa dirugikan karena biaya yang tidak disebut di awal,
                atau karena perangkat yang ternyata tidak sesuai deskripsi.
              </p>
              <p>
                Karena itu kami membalik urutannya. Kami tulis tarif harian dan mingguan secara terbuka, kami catat
                kondisi unit bersama penyewa pada berita acara, dan kami tidak mengunci perangkat dengan akun toko.
                Anda memakai Apple ID sendiri, seperti memakai perangkat milik sendiri.
              </p>
              <p>
                Sampai hari ini jumlah unit kami memang tidak banyak, dan itu disengaja. Kami lebih memilih merawat
                sedikit unit dengan benar daripada menyewakan banyak unit yang tidak layak pakai.
              </p>
            </div>

            <figure className="about__figure" data-reveal>
              <ImagePlaceholder
                label="Foto toko atau tim, rasio 1 banding 1"
                alt="Placeholder foto toko atau tim OpenDevice, siap diganti foto asli"
                ratio="1 / 1"
              />
            </figure>
          </div>

          <dl className="about__facts" data-reveal>
            {FACTS.map((fact) => (
              <div className="about__fact" key={fact.label}>
                <dt className="about__fact-label">{fact.label}</dt>
                <dd className="about__fact-value">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <SectionHeading
            eyebrow="Prinsip kerja"
            title="Tiga hal yang tidak kami tawar"
            description="Prinsip ini yang menentukan keputusan kami sehari hari, termasuk saat harus menolak penyewa."
          />

          <div className="about__grid">
            {PRINCIPLES.map((item, index) => (
              <article className="about__principle" key={item.title} data-reveal>
                <span className="reason__index">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="about__principle-title">{item.title}</h3>
                <p className="about__principle-text">{item.body}</p>
              </article>
            ))}
          </div>

          <SectionHeading
            eyebrow="Alasan memilih kami"
            title="Yang membedakan layanan kami"
            description="Empat hal yang paling sering disebut penyewa saat memperpanjang masa sewa."
          />

          <ul className="grid grid--2">
            {WHY_US.map((item) => (
              <li className="reason" key={item.title} data-reveal>
                <h3 className="reason__title">{item.title}</h3>
                <p className="reason__text">{item.body}</p>
              </li>
            ))}
          </ul>

          <div className="about__cta">
            <ButtonLink to="/katalog">Lihat unit yang tersedia</ButtonLink>
            <ButtonLink to="/syarat-ketentuan" variant="secondary">
              Baca syarat dan ketentuan
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  )
}
