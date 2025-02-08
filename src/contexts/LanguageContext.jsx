/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { languages } from "../utils/portfolioData";

const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const languageCodes = languages.map((l) => l.title);

  const getInitialLanguage = () => {
    const storedLanguage = localStorage.getItem("lang");
    if (storedLanguage && languageCodes.includes(storedLanguage)) {
      return storedLanguage;
    }

    const browserLanguage = navigator.language;
    if (languageCodes.includes(browserLanguage)) {
      localStorage.setItem("lang", browserLanguage);
      return browserLanguage;
    }

    localStorage.setItem("lang", languages[0].title); // Default to English
    return languages[0].title;
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const toggleLanguage = (lang) => {
    if (languageCodes.includes(lang)) {
      localStorage.setItem("lang", lang);
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};

export { LanguageProvider, useLanguage };
