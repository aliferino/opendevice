import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { WHY_US } from '../lib/constants'

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
                <span className="reason__index">{String(index + 1).padStart(2, '0')}</span>
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
