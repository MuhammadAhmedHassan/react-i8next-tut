import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import "bootstrap/dist/js/bootstrap.min.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icon-css/css/flag-icons.min.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fr", "ar"],
    fallbackLng: "en",
    detection: {
      order: [
        "path",
        "cookie",
        "htmlTag",
        "localStorage",
        "subdomain",
        "querystring",
        "sessionStorage",
        "navigator",
        "htmlTag",
      ],
      caches: ["cookie"],
    },
    backend: {
      // can use s3 or backend api path as well
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    // react: { useSuspense: false },

    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)

    // resources: {
    //   en: {
    //     translation:
    //   }
    // },
    // lng: document.querySelector('html').lang,
    // lng: "en", // if you're using a language detector, do not define the lng option
    // interpolation: {
    //   escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    // },
  });

ReactDOM.render(
  <Suspense fallback='Loading'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
