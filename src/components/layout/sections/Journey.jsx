
const milestones = [
  {
    date: 'Since October 2026',
    organization: "Africa's Talking",
    discipline: "Community Lead — Africa's Talking, Goma, DRC",
    description:
      "My role focuses on building an engaged developer community, introducing members to Africa's Talking APIs and communication technologies, and creating opportunities for learning, collaboration, and practical experimentation.",
    status: 'PROFESSIONAL EXPERIENCE',
    translations: {
      date: 'Depuis octobre 2026',
      discipline: "Community Lead — Africa's Talking, Goma, RDC",
      description:
        "Mon rôle consiste à développer une communauté de développeurs engagée, à faire découvrir les API et les technologies de communication d'Africa's Talking, et à créer des opportunités d'apprentissage, de collaboration et d'expérimentation pratique.",
      status: 'EXPÉRIENCE PROFESSIONNELLE',
    },
  },
  {
    date: '2026 — 2029',
    organization: 'ISSNT',
    discipline: 'Statistics · Academic studies',
    description:
      'Building a strong foundation in statistics and quantitative analysis.',
    status: 'IN PROGRESS',
    translations: {
      date: '2026 — 2029',
      discipline: 'Statistiques · Études académiques',
      description:
        'Développement de solides bases en statistique et en analyse quantitative.',
      status: 'EN COURS',
    },
  },
  {
    date: '2025 — 2026',
    organization: 'PrimeTek Academy',
    discipline: 'Frontend Development',
    description:
      'Practical training in modern web development, JavaScript and frontend technologies.',
    status: 'TRAINING',
    translations: {
      date: '2025 — 2026',
      discipline: 'Développement Frontend',
      description:
        'Formation pratique en développement web moderne, JavaScript et technologies Frontend.',
      status: 'FORMATION',
    },
  },
  {
    date: '2025 — 2026',
    organization: 'ALX',
    discipline: 'Data Analytics, Python & Machine Learning',
    description:
      'Completed Data Analytics and Python training; currently developing skills in Machine Learning.',
    status: 'LEARNING',
    translations: {
      date: '2025 — 2026',
      discipline: 'Analyse de données, Python et Machine Learning',
      description:
        "Formation en analyse de données et Python terminée ; développement actuel de compétences en Machine Learning.",
      status: 'APPRENTISSAGE',
    },
  },
  {
    date: '2023 — 2025',
    organization: 'MALI YETU IMF',
    discipline: 'Commercial Operations & Credit Risk Analysis',
    description:
      'Worked on client acquisition, credit analysis, portfolio monitoring and recovery.',
    status: 'PROFESSIONAL EXPERIENCE',
    translations: {
      date: '2023 — 2025',
      discipline: 'Opérations commerciales et analyse du risque de crédit',
      description:
        'Participation à l’acquisition de clients, à l’analyse de crédit, au suivi du portefeuille et au recouvrement.',
      status: 'EXPÉRIENCE PROFESSIONNELLE',
    },
  },
]

function Journey({ language = 'FR' }) {
  const isFrench = language === 'FR'

  return (
    <section
      id="journey"
      className="border-t border-border bg-background px-6 py-20 transition-colors duration-300 md:px-10 md:py-24 lg:px-20"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">

        {/* Section label */}
        <p className="text-xs font-medium text-secondary">
          04 / {isFrench ? 'PARCOURS' : 'JOURNEY'}
        </p>

        {/* Introduction */}
        <div className="grid gap-6 lg:grid-cols-[736px_1fr] lg:gap-16">
          <h2 className="font-heading text-3xl font-medium leading-tight text-text md:text-5xl md:leading-[56px]">
            {isFrench
              ? 'Un parcours de croissance continue.'
              : 'A journey of continuous growth.'}
          </h2>

          <p className="text-base leading-[26px] text-muted">
            {isFrench
              ? "Apprendre, construire et acquérir de l'expérience à l'intersection de la technologie, des données et de la finance."
              : 'Learning, building and gaining experience at the intersection of technology, data and finance.'}
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col">
          {milestones.map((item, index) => {
            const translated = isFrench ? item.translations : item

            return (
              <article
                key={item.organization}
                className="grid grid-cols-[1fr_24px] gap-x-4 border-b border-border py-7 md:grid-cols-[192px_24px_1fr] md:gap-x-8"
              >
                {/* Date */}
                <p className="col-start-1 row-start-1 pt-1 text-xs font-medium text-muted md:text-sm">
                  {translated.date}
                </p>

                {/* Timeline rail */}
                <div className="col-start-2 row-start-1 flex h-full flex-col items-center">
                  <span className="z-10 h-3 w-3 rounded-full border-2 border-primary bg-background" />

                  {index !== milestones.length - 1 && (
                    <span className="mt-2 min-h-20 w-px flex-1 bg-border" />
                  )}
                </div>

                {/* Content */}
                <div className="col-span-2 col-start-1 row-start-2 mt-4 flex flex-col gap-3 md:col-span-1 md:col-start-3 md:row-start-1 md:mt-0">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-heading text-xl font-medium text-text md:text-2xl">
                      {item.organization}
                    </h3>

                    <span className="text-[10px] font-medium tracking-wider text-primary">
                      {translated.status}
                    </span>
                  </div>

                  <p className="text-base font-medium text-secondary">
                    {translated.discipline}
                  </p>

                  <p className="max-w-3xl text-sm leading-6 text-muted">
                    {translated.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Journey
