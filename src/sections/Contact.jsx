import { useState } from "react"
import { useTranslation } from "react-i18next"
import useFadeIn from "@/hooks/useFadeIn"
import { CONTACT_INFO, SOCIAL_LINKS } from "@/constants"

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const Contact = () => {
  const fade = useFadeIn(100)
  const { t } = useTranslation()
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("idle")

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch(CONTACT_INFO.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      if (res.ok) {
        setStatus("success")
        setFormState({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <div className="mb-16">
          <p className="text-sm font-medium text-gray-500 tracking-widest uppercase mb-2">
            {t("contact.subtitle")}
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            {t("contact.title")}
          </h2>
        </div>

        <div
          ref={fade.ref}
          style={{ transition: "opacity 0.8s ease, transform 0.8s ease", opacity: fade.visible ? 1 : 0, transform: fade.visible ? "translateY(0)" : "translateY(20px)" }}
          className="grid md:grid-cols-2 gap-16"
        >

          {/* Izquierda — Info */}
          <div className="flex flex-col gap-8">
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("contact.description")}
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <span className="text-sm font-medium">{CONTACT_INFO.email}</span>
              </a>

              <div className="flex items-center gap-4 pt-2">

               <a 
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <GithubIcon />
                </a>

                <a 
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Derecha — Formulario */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                {t("contact.form.name")}
              </label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                placeholder={t("contact.form.name_placeholder")}
                className="px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                {t("contact.form.email")}
              </label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder={t("contact.form.email_placeholder")}
                className="px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                {t("contact.form.message")}
              </label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t("contact.form.message_placeholder")}
                className="px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50"
            >
              {status === "sending" ? t("contact.form.sending") : t("contact.form.submit")}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-600 font-medium">
                ✓ {t("contact.form.success")}
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500 font-medium">
                {t("contact.form.error")}
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact