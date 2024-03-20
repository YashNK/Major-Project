import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en, mal, hin, tam, pu, si, sp, ja } from "./translations";

export const languageResources = {
    en: {
        translation: en,
    },
    mal: {
        translation: mal,
    },
    hin: {
        translation: hin,
    },
    tam: {
        translation: tam,
    },
    pu: {
        translation: pu,
    },
    ja: {
        translation: ja,
    },
    si: {
        translation: si,
    },
    sp: {
        translation: sp,
    }
};

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    debug:true,
    lng: 'en',
    fallbackLng: 'en',
    resources:languageResources,
    interpolation: {
        escapeValue: false,
    },
    react: { useSuspense: false },
});

export default i18next;