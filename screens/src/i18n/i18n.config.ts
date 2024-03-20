import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en, mal } from "./translations";

const resources = {
    en: {
        translation: en,
    },
    mal: {
        translation: mal,
    }
}

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    debug:true,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    resources,
    react: { useSuspense: false },
});

export default i18next;