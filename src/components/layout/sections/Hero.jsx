
import julienPhoto from '../../../assets/julien-busiho.webp'

function Hero({ language = 'EN' }) {
  const content = {
  EN: {
      availability: 'Open to opportunities',
      greeting: "Hello, I'm",
      role: 'Frontend Developer',
      and: ' & ',
      analyst: 'Data Analyst',
      description:
        'Building digital solutions through technology, data and innovation. Passionate about creating useful experiences and transforming ideas into meaningful solutions.',
      projects: 'Explore My Projects',
      contact: 'Contact Me',
      connect: 'Connect',
      based: 'Based in',
      location: 'Goma, DRC',
      focus: 'Current focus',
      currentFocus: 'Building & Learning',
      tagline: 'Technology · Data · Innovation',
      focusValue: 'Technology & Data',
      mindset: 'Always Learning',
      hireMe: 'Hire Me',
    },
    FR: {
      availability: 'Ouvert aux opportunités',
      greeting: 'Bonjour, je suis',
      role: 'Développeur Frontend',
      and: ' & ',
      analyst: 'Analyste de données',
      description:
        "Je conçois des solutions numériques grâce à la technologie, aux données et à l'innovation. Passionné par la création d'expériences utiles et la transformation des idées en solutions concrètes.",
      projects: 'Découvrir mes projets',
      contact: 'Me contacter',
      connect: 'Retrouvez-moi',
      based: 'Basé à',
      location: 'Goma, RDC',
      focus: 'Objectif actuel',
      currentFocus: 'Construire et apprendre',
      tagline: 'Technologie · Données · Innovation',
      focusValue: 'Technology & Data',
      mindset: 'Toujours apprendre',
      hireMe: 'Engagez-moi',
    },
  }

  const t = content[language] || content.EN

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background px-5 py-20 md:px-10 md:py-28"
    >
     <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 min-[768px]:grid-cols-2 min-[768px]:gap-8 lg:gap-16">

        {/* LEFT: Introduction */}
        <div className="relative z-10">

          {/* Availability badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-xs font-medium text-muted">
              {t.availability}
            </span>
          </div>

          <p className="mb-3 text-lg font-medium text-secondary">
            {t.greeting}
          </p>

          <h1 className="font-heading text-5xl font-bold leading-tight text-text md:text-6xl xl:text-7xl">
            Julien
            <br />
            Busiho<span className="text-primary">.</span>
          </h1>

          <h2 className="mt-6 font-heading text-xl font-semibold text-text md:text-2xl">
            {t.role}
            <span className="text-primary">{t.and}</span>
            {t.analyst}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-muted md:text-lg">
            {t.description}
          </p>

          {/* Call to action */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="btn border-none bg-primary px-6 text-background hover:bg-primary/85"
            >
              {t.projects}
              <span aria-hidden="true">↗</span>
            </a>

            <a
               href="#contact"
                className="btn btn-outline border-primary px-6 text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-background"
>
                  {t.hireMe}
  <span aria-hidden="true">↗</span>
</a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">
              {t.connect}
            </span>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* RIGHT: Visual composition */}
        <div className="relative mx-auto w-full max-w-[520px]">

          {/* Decorative background */}
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative rounded-3xl border border-border bg-surface p-4 shadow-2xl md:p-6">

            {/* Image placeholder */}
            <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-background md:min-h-[410px]">

              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-[linear-gradient(rgba(56,189,248,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.15)_1px,transparent_1px)] bg-[size:32px_32px]" />
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <img
                src={julienPhoto}
                alt="Julien Busiho"
                className="h-36 w-36 rounded-full border-2 border-primary/50 object-cover shadow-lg shadow-primary/10 md:h-44 md:w-44"
                />

                <p className="mt-5 font-heading text-lg font-semibold text-text">
                  Julien Busiho
                </p>

                <p className="mt-1 text-sm text-muted">
                  {t.tagline}
                </p>
              </div>

              <span className="absolute right-5 top-5 h-3 w-3 rounded-full bg-secondary shadow-lg shadow-secondary/50" />
              <span className="absolute bottom-6 left-6 h-3 w-3 rounded-full bg-primary" />
            </div>

            {/* Code window */}
            <div className="mt-4 rounded-xl border border-border bg-background p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-muted">
                  julien.js
                </span>
              </div>

              <div className="space-y-2 font-mono text-xs leading-relaxed md:text-sm">
                <p>
                  <span className="text-secondary">const</span>{' '}
                  <span className="text-primary">developer</span> = {'{'}
                </p>
                <p className="pl-5 text-muted">
                  name: <span className="text-green-300">'Julien Busiho'</span>,
                </p>
                <p className="pl-5 text-muted">
                  focus: <span className="text-green-300">'{t.focusValue}'</span>,
                </p>
                <p className="pl-5 text-muted">
                  mindset: <span className="text-green-300">'{t.mindset}'</span>
                </p>
                <p>{'}'}</p>
              </div>
            </div>
          </div>

          {/* Floating information cards */}
          <div className="absolute -left-5 top-16 hidden rounded-xl border border-border bg-surface p-4 shadow-xl sm:block">
            <p className="text-xs text-muted">{t.based}</p>
            <p className="mt-1 font-heading text-sm font-semibold text-text">
              {t.location}
            </p>
          </div>

          <div className="absolute -bottom-5 -right-3 rounded-xl border border-border bg-surface p-4 shadow-xl">
            <p className="text-xs text-muted">{t.focus}</p>
            <p className="mt-1 font-heading text-sm font-semibold text-secondary">
              {t.currentFocus}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
