import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          Welcome: {
            LABEL_SIGN_UP: 'SIGN UP',
            LABEL_FIRST_NAME: 'First Name',
            LABEL_LAST_NAME: 'Last Name',
            LABEL_EMAIL_ID: 'email id',
            LABEL_PASSWORD: 'password'
          },
        },
      },
      nl: {
        translation: {
          Welcome: {
            text: "Bienvenue sur cette application d'internationalisation React",
          },
        },
      },
    },
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });