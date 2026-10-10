import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'

const SERVICES: readonly { readonly title: string; readonly body: string }[] = [
  {
    title: 'Sewa harian',
    body: 'Untuk kebutuhan singkat seperti presentasi, acara, atau pengganti sementara saat ponsel utama Anda diservis.',
  },
  {
    title: 'Sewa mingguan',
    body: 'Tarif lebih hemat untuk pemakaian berkelanjutan seperti produksi konten, perjalanan kerja, atau riset lapangan.',
  },
  {
    title: 'Antar ke alamat',
    body: 'Unit bisa dikirim ke kantor, hotel, atau tempat acara di area Jakarta dan sekitarnya sesuai kesepakatan waktu.',
  },
]

/** Ringkasan layanan: tiga hal yang bisa pengguna sewa atau minta dari toko. */
export function Services() {
  return (
    <section className="section section--subtle" aria-labelledby="layanan-title">
      <Container>
        <SectionHeading
          eyebrow="Layanan"
          title="Tiga cara menyewa"
          description="Semua layanan memakai perjanjian sewa tertulis, dengan pemeriksaan kondisi unit sebelum dan sesudah pemakaian."
        />
        <h2 id="layanan-title" className="visually-hidden">
          Ringkasan layanan
        </h2>

        <ul className="grid grid--3" style={{ marginTop: 'var(--space-7)' }}>
          {SERVICES.map((service, index) => (
            <li key={service.title} className="service" data-reveal>
              <span className="service__index">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__text">{service.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
