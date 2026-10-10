import { BadgeCheck, KeyRound, RefreshCw, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Icon } from '../components/Icon'
import { WHY_US } from '../lib/constants'

/** Ikon untuk tiap alasan, dipetakan berdasarkan urutan daftar di constants. */
const REASON_ICONS: readonly LucideIcon[] = [ShieldCheck, BadgeCheck, KeyRound, RefreshCw]

/** Alasan memilih toko, disusun sebagai daftar bernomor agar mudah dipindai. */
export function WhyUs() {
  return (
    <section className="section" aria-labelledby="alasan-title">
      <Container>
        <SectionHeading
          eyebrow="Alasan memilih kami"
          title="Yang membedakan OpenDevice"
          description="Kami menjual kejelasan: kondisi unit, tarif, dan aturan sewa disampaikan terbuka sejak percakapan pertama."
        />
        <h2 id="alasan-title" className="visually-hidden">
          Alasan memilih OpenDevice
        </h2>

        <ul className="grid grid--2" style={{ marginTop: 'var(--space-7)' }}>
          {WHY_US.map((reason, index) => (
            <li key={reason.title} data-reveal>
              <div className="reason">
                <Icon
                  icon={REASON_ICONS[index] ?? ShieldCheck}
                  size="lg"
                  className="reason__icon"
                />
                <h3 className="reason__title">{reason.title}</h3>
                <p className="reason__text">{reason.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
