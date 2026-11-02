
const skillGroups = [
  {
    number: '01 /',
    color: 'text-primary',
    label: {
      FR: 'DES INTERFACES BIEN PENSÉES',
      EN: 'INTERFACES WITH INTENTION',
    },
    title: {
      FR: 'Développement Frontend',
      EN: 'Frontend Development',
    },
    description: {
      FR: 'Des expériences web modernes, responsives et conçues avec soin.',
      EN: 'Responsive, thoughtful experiences built for the modern web.',
    },
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Vue.js',
      'Next.js',
      'Nuxt',
      'Tailwind CSS',
      'Git',
      'GitHub',
    ],
  },
  {
    number: '02 /',
    color: 'text-secondary',
    label: {
      FR: 'DE L’INFORMATION À LA DÉCISION',
      EN: 'FROM INFORMATION TO INSIGHT',
    },
    title: {
      FR: 'Analyse de données',
      EN: 'Data Analytics',
    },
    description: {
      FR: 'Explorer les données, identifier les tendances et faciliter la prise de décision.',
      EN: 'Exploring patterns and turning data into clearer decisions.',
    },
    skills: [
      'Excel',
      'SQL',
      'Python',
      'Pandas',
      'NumPy',
      'Power BI',
      'Statistiques',
    ],
  },
  {
    number: '03 /',
    color: 'text-primary',
    label: {
      FR: 'LA TECHNOLOGIE AU SERVICE DU SENS',
      EN: 'TECHNOLOGY WITH PURPOSE',
    },
    title: {
      FR: 'Innovation numérique & financière',
      EN: 'Digital & Financial Innovation',
    },
    description: {
      FR: 'Connecter les solutions numériques, la finance et l’innovation à impact social.',
      EN: 'Connecting digital products with finance and meaningful social impact.',
    },
    skills: [
      'Finance numérique',
      'Marketing digital',
      'Microfinance',
      'Analyse financière',
      'Product Thinking',
      'Impact social',
    ],
  },
]

const translations = {
  FR: {
    section: '02 / COMPÉTENCES',
    title: 'Trois domaines. Une même vision.',
    description:
      'Développement, analyse de données et innovation financière, réunis autour de la création de solutions numériques utiles.',
  },
  EN: {
    section: '02 / SKILLS',
    title: 'Three disciplines. One purpose.',
    description:
      'Development, analytics and financial innovation — connected by a focus on useful digital experiences.',
  },
}

function SkillCard({ group, language }) {
  return (
    <article className="flex min-w-0 flex-col gap-6 rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 md:p-8">

      <div className="flex flex-col gap-2">
        <span className={`text-xs font-medium ${group.color}`}>
          {group.number}
        </span>

        <span className={`text-xs font-medium tracking-wide ${group.color}`}>
          {group.label[language] || group.label.FR}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-heading text-2xl font-medium leading-8 text-text">
          {group.title[language] || group.title.FR}
        </h3>

        <p className="text-sm leading-[22px] text-muted">
          {group.description[language] || group.description.FR}
        </p>
      </div>

      <div className="flex min-h-[100px] flex-wrap content-start gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-background px-[10px] py-[6px] text-xs font-medium text-muted transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>

    </article>
  )
}

function Skills({ language = 'FR' }) {
  const t = translations[language] || translations.FR

  return (
    <section
      id="skills"
      className="border-t border-border bg-background px-6 py-20 transition-colors duration-300 md:px-10 md:py-24 lg:px-20"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">

        {/* Section label */}
        <p className="text-xs font-medium tracking-wide text-secondary">
          {t.section}
        </p>

        {/* Section introduction */}
        <div className="grid gap-6 lg:grid-cols-[736px_1fr] lg:gap-16">

          <h2 className="font-heading text-3xl font-medium leading-tight text-text md:text-5xl md:leading-[56px]">
            {t.title}
          </h2>

          <p className="text-base leading-[26px] text-muted">
            {t.description}
          </p>

        </div>

        {/* Skill cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillCard
              key={group.number}
              group={group}
              language={language}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
