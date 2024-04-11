import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import ptTranslations from "../locale/pt.json";
import enTranslations from "../locale/en.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector/cjs";

i18n.use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
  resources: {
    pt: {
      ...ptTranslations,
    },
    en: {
      ...enTranslations,
    },
  },
});
