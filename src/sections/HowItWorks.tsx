import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { RENTAL_STEPS } from '../lib/constants'

/** Langkah penyewaan dari memilih unit sampai serah terima. */
export function HowItWorks() {
  return (
    <section className="section section--subtle" aria-labelledby="cara-sewa-title">
      <Container>
        <SectionHeading
          eyebrow="Cara sewa"
          title="Empat langkah, selesai hari itu juga"
          description="Proses paling cepat sekitar 30 menit bila unit tersedia dan data sudah lengkap."
        />
        <h2 id="cara-sewa-title" className="visually-hidden">
          Cara menyewa
        </h2>

        <ol className="steps" style={{ marginTop: 'var(--space-7)' }}>
          {RENTAL_STEPS.map((item) => (
            <li className="step" key={item.step} data-reveal>
              <span className="step__number" aria-hidden="true">
                {String(item.step).padStart(2, '0')}
              </span>
              <h3 className="step__title">{item.title}</h3>
              <p className="step__text">{item.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
