import i18n from 'i18next';
import languagedetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translations from './locales'

const i18nConfig = {
    resources: translations,  // resources são as nossas traduções
    fallbackLng: 'pt-BR',     // fallbackLng é o idioma padrão caso o browser não consiga detectar sozinho
    defaultNS: 'translations'
}

i18n
    .use(languagedetector)
    .use(initReactI18next)
    .init(i18nConfig);

export default i18n