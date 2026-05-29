import { useState } from "react";
import { useTranslation } from "react-i18next"
import { NAV_LINKS, PERSONAL_INFO } from "@/constants";
import LanguageToggle from "@/components/ui/LanguageToggle"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation()

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold text-gray-900">
          {PERSONAL_INFO.name}
        </a>


        {/* Links desktop + LanguageToggle */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
                >
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle />
        </div>

        {/* Burger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-white border-t border-gray-100">
          <ul className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle />
        </div>
      )}
    </header>
  );
};

export default Navbar;
