import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import enGB from "./locales/en-GB.json";
import ptBR from "./locales/pt-BR.json";
import deDE from "./locales/de-DE.json";

i18n
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources: {
      "en-GB": { translation: enGB },
      "pt-BR": { translation: ptBR },
      "de-DE": { translation: deDE },
    },
    lng: localStorage.getItem("lang") || "en-GB", // Default language
    fallbackLng: "en-GB",
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
