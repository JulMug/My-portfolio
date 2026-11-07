
import { ScanEye, Blocks, Handshake } from 'lucide-react'

function About({ language = 'FR' }) {
  const content = {
    FR: {
      label: 'À propos de moi',
      title: 'La technologie au service du sens.',
      tagline:
        "La précision d'un développeur. La curiosité d'un analyste. La volonté de créer un impact réel.",
      introduction:
        "Je suis Julien, développeur Frontend et analyste de données. Je m'intéresse particulièrement à la rencontre entre les expériences numériques intuitives et les décisions éclairées par les données.",
      paragraph1:
        "Mon approche associe le développement d'interfaces, la réflexion analytique et l'innovation numérique. J'aime rendre les informations plus faciles à comprendre et créer des outils qui aident les personnes à prendre des décisions et à passer à l'action.",
      paragraph2:
        "Je m'intéresse particulièrement aux technologies financières et à l'impact social : comment les produits numériques peuvent rendre les services financiers plus accessibles, faciliter leur compréhension et contribuer à des communautés plus inclusives.",
      principles: [
        'La clarté avant tout',
        'Construire avec réflexion',
        'Créer de la valeur',
      ],
      location: 'Goma, République démocratique du Congo',
    },
    EN: {
      label: 'About me',
      title: 'Technology with Purpose.',
      tagline:
        'A developer’s attention to detail. An analyst’s curiosity. A drive to make things matter.',
      introduction:
        'I’m Julien, a Frontend Developer & Data Analyst drawn to the space where intuitive experiences meet informed decisions.',
      paragraph1:
        'My approach brings together interface development, analytical thinking and digital innovation. I enjoy making information easier to understand and building the tools that help people act on it.',
      paragraph2:
        'I’m especially interested in financial technology and social impact: how digital products can make everyday finance clearer, open up access and support more inclusive communities.',
      principles: [
        'Clarity first',
        'Build thoughtfully',
        'Create value',
      ],
      location: 'Goma, Democratic Republic of Congo',
    },
  }

  const t = content[language] || content.FR

  return (
    <section
      id="about"
      className="bg-background px-6 py-20 transition-colors duration-300 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1280px]">

        {/* Section label */}
        <div className="mb-12 flex items-center gap-3 font-mono text-xs">
          <span className="text-primary">01 /</span>
          <span className="tracking-[1.5px] text-muted uppercase">
            {t.label}
          </span>
        </div>

        {/* Profile composition */}
        <div className="grid gap-12 lg:grid-cols-[432px_1fr] lg:gap-28">

          {/* Purpose */}
          <div className="flex flex-col items-start gap-8">

            <h2 className="font-heading text-4xl font-medium leading-[1.12] tracking-tight text-text md:text-[52px]">
              {t.title}
            </h2>

            <p className="text-lg leading-[1.7] text-muted">
              {t.tagline}
            </p>

            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-primary" />

              <span className="font-heading text-xl text-text">
                Julien Busiho
              </span>
            </div>
          </div>

          {/* Professional profile */}
          <div className="flex flex-col items-start gap-6">

            <p className="text-xl leading-[1.65] text-text">
              {t.introduction}
            </p>

            <p className="text-base leading-[1.8] text-muted">
              {t.paragraph1}
            </p>

            <p className="text-base leading-[1.8] text-muted">
              {t.paragraph2}
            </p>

            {/* Working principles */}
            <div className="flex w-full flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-4">

              <div className="flex items-center gap-2">
                <ScanEye size={18} strokeWidth={1.5} className="text-primary" />
                <span className="text-[13px] text-text">
                  {t.principles[0]}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Blocks size={18} strokeWidth={1.5} className="text-primary" />
                <span className="text-[13px] text-text">
                  {t.principles[1]}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Handshake size={18} strokeWidth={1.5} className="text-primary" />
                <span className="text-[13px] text-text">
                  {t.principles[2]}
                </span>
              </div>

            </div>

            {/* Location */}
            <p className="text-sm leading-[22px] text-secondary">
              {t.location}
            </p>

          </div>
        </div>
      </div>
    </section>
    
  )
}

export default About
