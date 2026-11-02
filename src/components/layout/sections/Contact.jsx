
import { useState } from 'react'
import { Mail, MapPin, GitBranch, Send } from 'lucide-react'

const translations = {
  FR: {
    section: '05 / CONTACT',
    title: 'Construisons quelque chose qui a du sens.',
    intro:
      'Vous avez un projet, une opportunité ou une idée à explorer ? Je serais ravi d’échanger avec vous. Entamons la conversation.',
    email: 'E-mail',
    location: 'Localisation',
    city: 'Goma, RDC',
    formTitle: 'Envoyez-moi un message',
    name: 'Votre nom',
    emailLabel: 'Votre adresse e-mail',
    subject: 'Objet',
    message: 'Message',
    namePlaceholder: 'Jean Dupont',
    emailPlaceholder: 'jean@example.com',
    subjectPlaceholder: 'Comment puis-je vous aider ?',
    messagePlaceholder: 'Écrivez votre message ici...',
    button: 'Envoyer le message',
  },

  EN: {
    section: '05 / CONTACT',
    title: "Let's build something meaningful.",
    intro:
      "Have a project, an opportunity or an idea worth exploring? I'd be glad to hear from you. Let's start a conversation.",
    email: 'Email',
    location: 'Location',
    city: 'Goma, DRC',
    formTitle: 'Send me a message',
    name: 'Your name',
    emailLabel: 'Your email',
    subject: 'Subject',
    message: 'Message',
    namePlaceholder: 'John Doe',
    emailPlaceholder: 'john@example.com',
    subjectPlaceholder: 'How can I help?',
    messagePlaceholder: 'Write your message here...',
    button: 'Send Message',
  },
}

function Contact({ language = 'FR' }) {
  const t = translations[language] || translations.FR

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const recipient = 'julienbusiho00243@gmail.com'

    const subject = encodeURIComponent(formData.subject)

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
  }

  return (
    <section
      id="contact"
      className="border-t border-border bg-background px-6 py-20 transition-colors duration-300 md:px-10 md:py-24 lg:px-20"
    >
      <div className="mx-auto max-w-[1280px]">

        {/* Section label */}
        <p className="mb-10 text-xs font-medium text-secondary">
          {t.section}
        </p>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Contact introduction */}
          <div className="flex flex-col gap-7">

            <h2 className="font-heading text-4xl font-medium leading-tight text-text md:text-5xl">
              {t.title}
            </h2>

            <p className="max-w-lg text-base leading-7 text-muted">
              {t.intro}
            </p>

            {/* Contact information */}
            <div className="mt-4 flex flex-col gap-6">

              {/* Email addresses */}
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-surface p-3 text-primary">
                  <Mail size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-muted">
                    {t.email}
                  </p>

                  <a
                    href="mailto:julienbusiho00243@gmail.com"
                    className="block break-all text-sm text-text transition-colors hover:text-primary"
                  >
                    julienbusiho00243@gmail.com
                  </a>

                  <a
                    href="mailto:julienb.gomadrc@community.africastalking.com"
                    className="block break-all text-sm text-text transition-colors hover:text-primary"
                  >
                    julienb.gomadrc@community.africastalking.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-surface p-3 text-primary">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs text-muted">
                    {t.location}
                  </p>

                  <p className="text-sm text-text">
                    {t.city}
                  </p>
                </div>
              </div>

            </div>

            {/* Social links */}
            <div className="mt-4 flex items-center gap-4">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/julien-busiho-b0884b199"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted transition-colors hover:text-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.56 20.452h3.56V9H3.56v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/JulMug"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-lg border border-border p-3 text-muted transition-colors hover:text-primary"
              >
                <GitBranch size={20} />
              </a>

            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 md:p-8"
          >

            <h3 className="font-heading text-2xl font-medium text-text">
              {t.formTitle}
            </h3>

            {/* Name and email */}
            <div className="grid gap-5 sm:grid-cols-2">

              <label className="flex flex-col gap-2">
                <span className="text-sm text-muted">
                  {t.name}
                </span>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.namePlaceholder}
                  className="input w-full border-border bg-background text-text placeholder:text-muted"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm text-muted">
                  {t.emailLabel}
                </span>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.emailPlaceholder}
                  className="input w-full border-border bg-background text-text placeholder:text-muted"
                />
              </label>

            </div>

            {/* Subject */}
            <label className="flex flex-col gap-2">
              <span className="text-sm text-muted">
                {t.subject}
              </span>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder={t.subjectPlaceholder}
                className="input w-full border-border bg-background text-text placeholder:text-muted"
              />
            </label>

            {/* Message */}
            <label className="flex flex-col gap-2">
              <span className="text-sm text-muted">
                {t.message}
              </span>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder={t.messagePlaceholder}
                className="textarea w-full border-border bg-background text-text placeholder:text-muted"
              />
            </label>

            {/* Submit button */}
            <button
              type="submit"
              className="btn border-0 bg-primary text-white hover:opacity-90"
            >
              {t.button}
              <Send size={16} />
            </button>

          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact
