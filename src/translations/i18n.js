import i18n from "./node_modules/i18next";
import { reactI18nextModule } from "./node_modules/react-i18next";
import translationEN from './locales/en.json.js';
import translationPT from './locales/pt_br.json.js'


const resources = {
    en: { translation: translationEN },
    pt: { translation: translationPT }
};

i18n
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
