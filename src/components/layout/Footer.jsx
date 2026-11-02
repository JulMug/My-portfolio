
import { ArrowUp, Mail, GitBranch } from 'lucide-react'
import julienPhoto from '../../assets/julien-busiho.webp'

const translations = {
  FR: {
    description:
      'Je conçois des solutions numériques grâce à la technologie, aux données et à l’innovation.',
    navigation: [
      { label: 'Accueil', href: '#home' },
      { label: 'À propos', href: '#about' },
      { label: 'Compétences', href: '#skills' },
      { label: 'Projets', href: '#projects' },
      { label: 'Parcours', href: '#journey' },
      { label: 'Contact', href: '#contact' },
    ],
    emailLabel: 'Envoyer un e-mail',
    copyright: 'Tous droits réservés.',
    backToTop: 'Retour en haut',
  },
  EN: {
    description:
      'Building digital solutions through technology, data and innovation.',
    navigation: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Journey', href: '#journey' },
      { label: 'Contact', href: '#contact' },
    ],
    emailLabel: 'Send an email',
    copyright: 'All rights reserved.',
    backToTop: 'Back to top',
  },
}

function Footer({ language = 'FR' }) {
  const currentYear = new Date().getFullYear()
  const t = translations[language] || translations.FR

  return (
    <footer className="border-t border-border bg-background px-6 py-10 transition-colors duration-300 md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1280px]">

        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <img
                src={julienPhoto}
                alt="Julien Busiho"
                className="h-11 w-11 rounded-full border-2 border-primary object-cover"
              />

              <span className="font-heading text-2xl font-bold tracking-tight text-text">
                Julien<span className="text-primary">.</span>
              </span>
            </a>

            <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
              {t.description}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {t.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">

            <a
              href="mailto:julienbusiho00243@gmail.com"
              aria-label={t.emailLabel}
              className="text-muted transition-colors hover:text-primary"
            >
              <Mail size={19} />
            </a>

            <a
              href="https://github.com/JulMug"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-primary"
            >
              <GitBranch size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/julien-busiho-b0884b199"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.56 20.452h3.56V9H3.56v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {currentYear} Julien Busiho. {t.copyright}
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            {t.backToTop}
            <ArrowUp size={14} />
          </a>

        </div>
      </div>
    </footer>
  )
}

export default Footer
