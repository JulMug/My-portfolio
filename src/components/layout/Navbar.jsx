
import julienPhoto from '../../assets/julien-busiho.webp'
import { useEffect, useState } from 'react'

function Navbar({ language, setLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => current === 'dark' ? 'light' : 'dark')
  }

  const translations = {
    FR: {
      links: ['Accueil', 'À propos', 'Compétences', 'Projets', 'Parcours', 'Contact'],
      connect: 'Me contacter',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      light: 'Activer le thème clair',
      dark: 'Activer le thème sombre',
    },
    EN: {
      links: ['Home', 'About', 'Skills', 'Projects', 'Journey', 'Contact'],
      connect: "Let's Connect",
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      light: 'Enable light theme',
      dark: 'Enable dark theme',
    },
  }

  const t = translations[language]

  const links = [
    { label: t.links[0], href: '#home' },
    { label: t.links[1], href: '#about' },
    { label: t.links[2], href: '#skills' },
    { label: t.links[3], href: '#projects' },
    { label: t.links[4], href: '#journey' },
    { label: t.links[5], href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="navbar mx-auto max-w-7xl px-6">

        <a href="#home" className="flex items-center gap-2">
        <img
          src={julienPhoto}
           alt="Julien Busiho"
           className="h-10 w-10 rounded-full border-2 border-primary object-cover"
             />
             <span className="text-xl font-bold text-text">
           Julien<span className="text-primary">.</span>
            </span>
        </a>

        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle"
            aria-label={theme === 'dark' ? t.light : t.dark}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            onClick={() => setLanguage(language === 'FR' ? 'EN' : 'FR')}
            className="btn btn-ghost btn-sm"
            aria-label={language === 'FR' ? 'Switch to English' : 'Passer en français'}
          >
            {language === 'FR' ? 'EN' : 'FR'}
          </button>

          <a
            href="#contact"
            className="btn hidden border-0 bg-primary px-5 text-white hover:opacity-90 md:inline-flex"
          >
            {t.connect}
          </a>

          <button
            className="btn btn-ghost btn-circle md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? t.closeMenu : t.openMenu}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="flex flex-col gap-4 border-t border-border bg-background px-6 py-5 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-muted hover:text-primary"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="btn border-0 bg-primary text-white"
          >
            {t.connect}
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
