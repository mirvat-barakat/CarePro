import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import common_ar from '../src/translations/ar.json';
import common_en from '../src/translations/en.json';


const resources = {
    en: {
        translation : common_en
    },
    ar: {
        translation : common_ar
    }
}

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lang: 'en',
    keySeperator: false,
    interpolation: {
        escapeValue: false
    }
  })

  export default i18n;