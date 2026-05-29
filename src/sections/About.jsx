import { useTranslation } from "react-i18next"
import useFadeIn from "@/hooks/useFadeIn"
import { ABOUT_INFO } from "@/constants"

const About = () => {
  const left = useFadeIn(100)
  const right = useFadeIn(300)
  const { t } = useTranslation()

  const stats = [
    { key: "stats.years", value: "2+" },
    { key: "stats.projects", value: "2+" },
    { key: "stats.technologies", value: "15+" },
    { key: "stats.coffee", value: "∞" },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <div className="mb-16">
          <p className="text-sm font-medium text-gray-500 tracking-widest uppercase mb-2">
            {t("about.subtitle")}
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            {t("about.title")}
          </h2>
        </div>

        {/* Dos columnas */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Izquierda — Texto */}
          <div
            ref={left.ref}
            style={{ transition: "opacity 0.8s ease, transform 0.8s ease", opacity: left.visible ? 1 : 0, transform: left.visible ? "translateY(0)" : "translateY(20px)" }}
            className="flex flex-col gap-6"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("about.description")}
            </p>

            <div>
              <h3 className="text-gray-900 font-semibold mb-2">
                {t("about.passion_title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("about.passion")}
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">
                {t("about.education_label")}
              </p>
              <p className="text-gray-900 font-medium">
                {t("about.education_degree")}
              </p>
              <p className="text-gray-500 text-sm">
                {ABOUT_INFO.education.institution} · {t("about.education_year")}
              </p>
            </div>
          </div>

          {/* Derecha — Stats */}
          <div
            ref={right.ref}
            style={{ transition: "opacity 0.8s ease, transform 0.8s ease", opacity: right.visible ? 1 : 0, transform: right.visible ? "translateY(0)" : "translateY(20px)" }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.key}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-2"
              >
                <span className="text-4xl font-bold text-gray-900">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500">
                  {t(`about.${stat.key}`)}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About