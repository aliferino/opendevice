import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { ButtonLink } from '../components/Button'
import { DataNotice } from '../components/DataNotice'
import { Icon } from '../components/Icon'
import { Check } from 'lucide-react'
import { SITE, TERMS_SECTIONS } from '../lib/constants'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { usePageTransition } from '../hooks/usePageTransition'
import { useScrollReveal } from '../hooks/useScrollReveal'

/** Ubah judul bagian jadi id yang aman dipakai sebagai jangkar tautan. */
function toAnchor(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Halaman Syarat dan Ketentuan.
 *
 * Daftar isi di sisi kiri memakai jangkar biasa supaya tetap bekerja tanpa
 * JavaScript, dan membantu pembaca melompat ke pasal yang dicari.
 */
export function Terms() {
  useDocumentTitle('Syarat dan ketentuan sewa', 'Ketentuan penyewaan unit iPhone di OpenDevice.')
  const pageRef = usePageTransition<HTMLDivElement>()
  const revealRef = useScrollReveal<HTMLDivElement>({ once: true })

  return (
    <div ref={pageRef}>
      <Container>
        <PageHeader
          eyebrow="Syarat dan ketentuan"
          title="Ketentuan sewa unit iPhone"
          description="Dokumen ini menjelaskan hak dan kewajiban kedua pihak selama masa sewa. Bacalah sebelum menandatangani perjanjian, dan tanyakan kepada kami bila ada bagian yang belum jelas."
        />
      </Container>

      <Container>
        <div ref={revealRef}>
          <DataNotice>
            isi di halaman ini adalah contoh untuk keperluan tampilan. Sebelum website dipublikasikan, ganti dengan
            pasal yang sudah diperiksa dan disetujui pemilik toko di src/lib/constants.ts
          </DataNotice>

          <div className="terms__layout">
            <nav className="terms__nav" aria-labelledby="terms-nav-title">
              <h2 className="terms__nav-title" id="terms-nav-title">
                Daftar isi
              </h2>
              <ol className="terms__nav-list">
                {TERMS_SECTIONS.map((section) => (
                  <li key={section.title}>
                    <a className="terms__nav-link" href={`#${toAnchor(section.title)}`}>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="terms__body">
              {TERMS_SECTIONS.map((section) => (
                <section className="terms__section" id={toAnchor(section.title)} key={section.title}>
                  <h2 className="terms__section-title">{section.title}</h2>
                  <ol className="terms__list">
                    {section.items.map((item) => (
                      <li className="terms__item" key={item}>
                        <Icon icon={Check} size="sm" className="terms__item-marker" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>
          </div>

          <section className="terms__section" aria-labelledby="terms-contact">
            <h2 className="terms__section-title" id="terms-contact">
              Menghubungi kami
            </h2>
            <p className="text-muted">
              Pertanyaan soal perjanjian, deposit, atau perpanjangan masa sewa bisa disampaikan lewat saluran berikut
              pada jam layanan {SITE.hours}.
            </p>
            <dl className="terms__contact">
              <div>
                <dt>WhatsApp</dt>
                <dd>{SITE.whatsapp}</dd>
              </div>
              <div>
                <dt>Telepon</dt>
                <dd>{SITE.phone}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>{SITE.email}</dd>
              </div>
              <div>
                <dt>Alamat</dt>
                <dd>{SITE.address}</dd>
              </div>
            </dl>
          </section>

          <div className="terms__actions">
            <ButtonLink to="/katalog">Kembali ke katalog</ButtonLink>
            <ButtonLink to="/tentang" variant="secondary">
              Tentang kami
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  )
}
