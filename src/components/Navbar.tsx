import { useEffect, useId, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Smartphone, X } from 'lucide-react'
import { NAV_ITEMS, SITE } from '../lib/constants'
import { useRefreshOnUpdate } from '../hooks/useScrollRefresh'
import { Container } from './Container'
import { Icon } from './Icon'

/**
 * Navbar minimalis dengan panel menu untuk layar kecil.
 *
 * Catatan aksesibilitas:
 * - Tombol menu memakai aria-expanded dan aria-controls.
 * - Panel ditutup dengan tombol Escape.
 * - Fokus dipindahkan kembali ke tombol menu setelah panel ditutup.
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const panelId = useId()
  const buttonId = useId()

  // Segarkan posisi ScrollTrigger setelah tinggi halaman berubah.
  useRefreshOnUpdate(isOpen)

  useEffect(() => {
    if (!isOpen) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        document.getElementById(buttonId)?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, buttonId])

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link to="/" className="site-header__brand" aria-label={`${SITE.name} beranda`}>
          <Icon icon={Smartphone} size="md" className="site-header__mark" />
          <span className="site-header__word">{SITE.name}</span>
        </Link>

        <nav className="site-header__nav" aria-label="Navigasi utama">
          <ul className="site-header__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    isActive ? 'site-header__link site-header__link--active' : 'site-header__link'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__action">
          <Link to="/katalog" className="button button--primary button--small">
            Lihat katalog
          </Link>
        </div>

        <button
          id={buttonId}
          type="button"
          className="site-header__toggle"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <Icon icon={isOpen ? X : Menu} size="md" />
          <span className="visually-hidden">{isOpen ? 'Tutup menu' : 'Buka menu'}</span>
        </button>
      </Container>

      <div id={panelId} className="site-header__panel" hidden={!isOpen}>
        <Container>
          <ul className="site-header__panel-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className="site-header__panel-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/katalog" className="button button--primary button--block" onClick={() => setIsOpen(false)}>
                Lihat katalog
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  )
}
