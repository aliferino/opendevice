import { Link } from 'react-router-dom'
import { AtSign, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { NAV_ITEMS, SITE } from '../lib/constants'
import { Container } from './Container'
import { Icon } from './Icon'

/** Footer memuat identitas toko, navigasi singkat, dan kanal kontak. */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <p className="site-footer__name">{SITE.name}</p>
            <p className="site-footer__text">{SITE.description}</p>
          </div>

          <nav className="site-footer__column" aria-label="Navigasi footer">
            <h2 className="site-footer__heading">Navigasi</h2>
            <ul className="site-footer__list">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="site-footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__column">
            <h2 className="site-footer__heading">Kontak</h2>
            <ul className="site-footer__list">
              <li className="site-footer__item">
                <Icon icon={Phone} size="sm" />
                <a className="site-footer__link" href={`tel:${SITE.phone.replace(/[^+\d]/g, '')}`}>
                  Telepon {SITE.phone}
                </a>
              </li>
              <li className="site-footer__item">
                <Icon icon={Mail} size="sm" />
                <a className="site-footer__link" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </li>
              <li className="site-footer__item">
                <Icon icon={MessageCircle} size="sm" />
                <span>WhatsApp {SITE.whatsapp}</span>
              </li>
              <li className="site-footer__item">
                <Icon icon={AtSign} size="sm" />
                <span>Instagram {SITE.instagram}</span>
              </li>
            </ul>
          </div>

          <div className="site-footer__column">
            <h2 className="site-footer__heading">Alamat</h2>
            <address className="site-footer__address">
              <span className="site-footer__item">
                <Icon icon={MapPin} size="sm" />
                <span>{SITE.address}</span>
              </span>
              <span className="site-footer__hours">{SITE.hours}</span>
            </address>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="note">
            Hak cipta {year} {SITE.name}. Harga dan ketersediaan unit dapat berubah tanpa pemberitahuan.
          </p>
          <p className="note">Website ini adalah katalog dan pengenalan toko, bukan toko daring.</p>
        </div>
      </Container>
    </footer>
  )
}
