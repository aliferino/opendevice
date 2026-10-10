import { CalendarDays, CalendarRange, Truck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Icon } from '../components/Icon'

const SERVICES: readonly { readonly title: string; readonly body: string; readonly icon: LucideIcon }[] = [
  {
    title: 'Sewa harian',
    body: 'Untuk kebutuhan singkat seperti presentasi, acara, atau pengganti sementara saat ponsel utama Anda diservis.',
    icon: CalendarDays,
  },
  {
    title: 'Sewa mingguan',
    body: 'Tarif lebih hemat untuk pemakaian berkelanjutan seperti produksi konten, perjalanan kerja, atau riset lapangan.',
    icon: CalendarRange,
  },
  {
    title: 'Antar ke alamat',
    body: 'Unit bisa dikirim ke kantor, hotel, atau tempat acara di area Jakarta dan sekitarnya sesuai kesepakatan waktu.',
    icon: Truck,
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
          {SERVICES.map((service) => (
            <li key={service.title} className="service" data-reveal>
              <Icon icon={service.icon} size="lg" className="service__icon" />
              <h3 className="service__title">{service.title}</h3>
              <p className="service__text">{service.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
