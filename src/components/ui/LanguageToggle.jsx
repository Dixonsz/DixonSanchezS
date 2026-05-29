import { useTranslation } from "react-i18next"

const LanguageToggle = () => {
  const { i18n } = useTranslation()
  const isEN = i18n.language === "en"

  const toggle = () => {
    i18n.changeLanguage(isEN ? "es" : "en")
  }

  return (
    <button
      onClick={toggle}
      className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200 border border-gray-200 rounded-lg px-3 py-1"
    >
      {isEN ? "ES" : "EN"}
    </button>
  )
}

export default LanguageToggle