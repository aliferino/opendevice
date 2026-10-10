import { Container } from '../components/Container'
import { ButtonLink } from '../components/Button'
import { SITE } from '../lib/constants'

export interface CtaBannerProps {
  readonly title?: string
  readonly text?: string
}

/** Ajakan penutup di bawah halaman. Bukan formulir, hanya arah ke katalog dan kontak. */
export function CtaBanner({
  title = 'Butuh iPhone untuk pekan ini?',
  text = 'Cek ketersediaan unit, lalu hubungi kami dengan tanggal mulai dan tanggal selesai. Kami balas dengan total biaya lengkap, tanpa biaya kejutan.',
}: CtaBannerProps) {
  return (
    <section className="section" aria-labelledby="cta-title">
      <Container>
        <div className="cta-banner" data-reveal>
          <div>
            <h2 className="cta-banner__title" id="cta-title">
              {title}
            </h2>
            <p className="cta-banner__text">{text}</p>
          </div>
          <div className="cta-banner__actions">
            <ButtonLink to="/katalog" variant="primary">
              Lihat katalog
            </ButtonLink>
            <ButtonLink to="/syarat-ketentuan" variant="secondary">
              Baca syarat sewa
            </ButtonLink>
          </div>
        </div>
        <p className="note" style={{ marginTop: 'var(--space-4)' }}>
          WhatsApp {SITE.whatsapp}, telepon {SITE.phone}, atau surel {SITE.email}.
        </p>
      </Container>
    </section>
  )
}
