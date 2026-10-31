
import { useState } from 'react'

function Navbar() {
  const [language, setLanguage] = useState('EN')
  const [menuOpen, setMenuOpen] = useState(false)

  const navigation = {
    EN: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Journey', href: '#journey' },
      { label: 'Contact', href: '#contact' },
    ],
    FR: [
      { label: 'Accueil', href: '#home' },
      { label: 'À propos', href: '#about' },
      { label: 'Compétences', href: '#skills' },
      { label: 'Projets', href: '#projects' },
      { label: 'Parcours', href: '#journey' },
      { label: 'Contact', href: '#contact' },
    ],
  }

  const links = navigation[language]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <nav
        className="navbar mx-auto flex min-h-20 max-w-[1280px] items-center justify-between px-5 md:px-10"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-heading text-2xl font-bold tracking-tight text-text"
          aria-label="Julien Busiho - Home"
        >
          JULIEN<span className="text-primary">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-1 text-sm font-semibold">
            <button
              type="button"
              onClick={() => setLanguage('FR')}
              className={language === 'FR' ? 'text-primary' : 'text-muted hover:text-text'}
              aria-pressed={language === 'FR'}
            >
              FR
            </button>

            <span className="text-muted">|</span>

            <button
              type="button"
              onClick={() => setLanguage('EN')}
              className={language === 'EN' ? 'text-primary' : 'text-muted hover:text-text'}
              aria-pressed={language === 'EN'}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="btn border-none bg-primary px-5 text-sm font-semibold text-background hover:bg-primary/85"
          >
            {language === 'EN' ? 'Let’s Talk' : 'Me contacter'}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="btn btn-square btn-ghost text-text lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="text-2xl">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-surface px-5 py-5 lg:hidden"
        >
          <div className="mx-auto flex max-w-[1280px] flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center gap-3 border-t border-border pt-4">
              <button
                type="button"
                onClick={() => setLanguage('FR')}
                className={language === 'FR' ? 'font-bold text-primary' : 'text-muted'}
                aria-pressed={language === 'FR'}
              >
                FR
              </button>

              <span className="text-muted">|</span>

              <button
                type="button"
                onClick={() => setLanguage('EN')}
                className={language === 'EN' ? 'font-bold text-primary' : 'text-muted'}
                aria-pressed={language === 'EN'}
              >
                EN
              </button>
            </div>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn border-none bg-primary text-background hover:bg-primary/85"
            >
              {language === 'EN' ? 'Let’s Talk' : 'Me contacter'}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
