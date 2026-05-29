import { useTranslation } from "react-i18next"
import useFadeIn from "@/hooks/useFadeIn"
import ProjectCard from "@/components/ui/ProjectCard"
import { PROJECTS } from "@/constants"

const Projects = () => {
  const fade = useFadeIn(100)
  const { t } = useTranslation()

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <div className="mb-16">
          <p className="text-sm font-medium text-gray-500 tracking-widest uppercase mb-2">
            {t("projects.subtitle")}
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            {t("projects.title")}
          </h2>
        </div>

        {/* Grid */}
        <div
          ref={fade.ref}
          style={{ transition: "opacity 0.8s ease, transform 0.8s ease", opacity: fade.visible ? 1 : 0, transform: fade.visible ? "translateY(0)" : "translateY(20px)" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects