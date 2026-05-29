import { useTranslation } from "react-i18next"
import useFadeIn from "@/hooks/useFadeIn"
import SkillCard from "@/components/ui/SkillCard"
import { SKILLS } from "@/constants"

const Skills = () => {
  const fade = useFadeIn(100)
  const { t } = useTranslation()

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <div className="mb-16">
          <p className="text-sm font-medium text-gray-500 tracking-widest uppercase mb-2">
            {t("skills.subtitle")}
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            {t("skills.title")}
          </h2>
        </div>

        {/* Categorías */}
        <div
          ref={fade.ref}
          style={{ transition: "opacity 0.8s ease, transform 0.8s ease", opacity: fade.visible ? 1 : 0, transform: fade.visible ? "translateY(0)" : "translateY(20px)" }}
          className="flex flex-col gap-12"
        >
          {SKILLS.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
                {group.category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {group.items.map((skill) => (
                  <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills