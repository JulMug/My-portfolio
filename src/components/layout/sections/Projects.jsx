
import { GitBranch } from 'lucide-react'

import fikiriImage from '../../../assets/FikiriID.jpeg'
import quizzyImage from '../../../assets/Quizzy.png'
import smartRestoImage from '../../../assets/SmartResto.png'
import taskflowImage from '../../../assets/Taskflow.png'

const projects = [
  {
    number: '01',
    name: 'Fikiri ID',
    image: fikiriImage,
    category: {
      FR: 'Projet d’identité numérique.',
      EN: 'Digital identity project.',
    },
    description: {
      FR: 'Découvrez le projet Fikiri ID et son implémentation à travers son dépôt de code.',
      EN: 'Explore the Fikiri ID project and its implementation through its source code repository.',
    },
    stack: ['TypeScript', 'Python', 'JavaScript', 'Tailwind CSS', 'Makefile', 'Dockerfile', 'HTML'],
    github: 'https://github.com/UNDP-FIKIRI-APPS/fikiri_id',
    featured: true,
  },
  {
    number: '02',
    name: 'Quizzy',
    image: quizzyImage,
    category: {
      FR: 'Application de quiz interactifs.',
      EN: 'Interactive quiz application.',
    },
    description: {
      FR: 'Une expérience de quiz conçue pour rendre les questionnaires clairs, interactifs et engageants.',
      EN: 'A focused quiz experience designed to make answering questions clear and engaging.',
    },
    stack: ['JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/shammah-lab/Quizzy-Application-PrimeTek-26',
  },
  {
    number: '03',
    name: 'TaskFlow',
    image: taskflowImage,
    category: {
      FR: 'Application de gestion des tâches.',
      EN: 'Task management application.',
    },
    description: {
      FR: 'Un espace de travail organisé pour gérer les tâches et suivre les priorités quotidiennes.',
      EN: 'A clear workspace for organizing tasks and keeping everyday priorities in view.',
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'CSS', 'HTML'],
    github: 'https://github.com/JulMug/taskflow-react-app',
  },
  {
    number: '04',
    name: 'SmartResto',
    image: smartRestoImage,
    category: {
      FR: 'Application de gestion de restaurant.',
      EN: 'Restaurant management application.',
    },
    description: {
      FR: 'Une solution qui centralise les opérations d’un restaurant, la gestion des ingrédients et le suivi du stock.',
      EN: 'Bringing restaurant operations, ingredients and stock into one organized experience.',
    },
    stack: ['Nuxt 4', 'Vue.js', 'Tailwind CSS', 'JSON Server'],
    github: 'https://github.com/traorenfamory095-star/smartresto',
  },
]

const translations = {
  FR: {
    section: '03 / PROJETS',
    title: 'Projets sélectionnés',
    intro: 'Quatre projets développés autour de besoins concrets et de solutions numériques.',
    featured: 'PROJET À LA UNE',
    selected: 'PROJET SÉLECTIONNÉ',
    viewCode: 'Voir le code',
  },
  EN: {
    section: '03 / PROJECTS',
    title: 'Selected Projects',
    intro: 'Four projects built around real needs and digital solutions.',
    featured: 'FEATURED PROJECT',
    selected: 'SELECTED PROJECT',
    viewCode: 'View source code',
  },
}

function Projects({ language = 'FR' }) {
  const t = translations[language] || translations.FR

  return (
    <section
      id="projects"
      className="border-t border-border bg-background px-6 py-20 transition-colors duration-300 md:px-10 md:py-24 lg:px-20"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <p className="text-xs font-medium text-secondary">
          {t.section}
        </p>

        <div className="grid gap-6 lg:grid-cols-[736px_1fr] lg:gap-16">
          <h2 className="font-heading text-3xl font-medium leading-tight text-text md:text-5xl md:leading-[56px]">
            {t.title}
          </h2>

          <p className="text-base leading-[26px] text-muted">
            {t.intro}
          </p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`flex min-w-0 flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
                project.featured
                  ? 'border-primary bg-surface shadow-lg shadow-primary/10 md:col-span-2'
                  : 'border-border bg-surface hover:border-primary/50'
              }`}
            >
              <div
                className={`relative flex items-center justify-center overflow-hidden bg-background p-4 ${
                  project.featured ? 'h-[240px] md:h-[320px]' : 'h-[200px] md:h-[220px]'
                }`}
              >
                <img
                  src={project.image}
                  alt={`${project.name} - ${language === 'FR' ? 'Capture d’écran du projet' : 'Project screenshot'}`}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />

                {project.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                    {t.featured}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col items-start gap-4 p-6 md:p-8">
                <span className="text-xs font-medium text-primary">
                  {project.featured
                    ? t.featured
                    : `${t.selected} / ${project.number}`}
                </span>

                <h3 className="font-heading text-[28px] font-medium text-text">
                  {project.name}
                </h3>

                <p className="text-base text-text">
                  {project.category[language] || project.category.FR}
                </p>

                <p className="text-sm leading-[22px] text-muted">
                  {project.description[language] || project.description.FR}
                </p>

                {project.stack.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-background px-[10px] py-[6px] text-xs text-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-medium text-secondary transition-colors hover:text-primary"
                >
                  <GitBranch size={16} />
                  {t.viewCode}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
