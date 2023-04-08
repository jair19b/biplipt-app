import React, { useState, useEffect, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IntlProvider } from "react-intl";
import axios from "axios";
import { now } from "moment";

import { LanguageContextI, Locale } from "../interfaces";
import { defaultLanguegeContext } from "../redux/states/system";
import { updateLocale } from "../redux/slices/appSlice";
import defaultMessagesFile from "../language/messages/es-US.json";
import type { StoreState } from "../redux/store";

/** Creacion del contexto global del idioma de la aplicación */
export const LanguageContext = createContext<LanguageContextI>(defaultLanguegeContext);

/** Proveedor de contexto de lenguaje */
const LanguageProvider = ({ children }: any) => {
   // configuración predeterminada
   const defaultLocale = "es-US";
   const defaultMessages = defaultMessagesFile;

   const [locale, setLocale] = useState(defaultLocale);
   const [langMessages, setLangMessages] = useState(defaultMessages);

   // Validacion del estado de la  aplicación global
   const lang = useSelector<StoreState, string>((state) => state.system.locale);
   const locales = useSelector<StoreState, Locale[]>((state) => state.system.locales);
   const dispatch = useDispatch();

   /** Cambia el idioma de la aplicación */
   const changeLanguage = (nuevoLang: string) => {
      if (nuevoLang !== lang && nuevoLang !== defaultLocale) {
         const cache = localStorage.getItem(nuevoLang) || "";
         // const time = JSON.parse(cache)?.date;
         if (!cache || 10909 - now() > 86400) {
            axios
               .get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/data/language/?locale=${nuevoLang}`)
               .then((res) => {
                  const messages = JSON.parse(res.data);
                  localStorage.setItem("locale", nuevoLang);
                  dispatch(updateLocale({ locale: nuevoLang }));
                  setLangMessages(messages);
                  setLocale(nuevoLang);
                  /* actuaizar el registro en almacenamiento local */
                  localStorage.setItem(nuevoLang, JSON.stringify({ date: now(), messages: messages }));
               })
               .catch(() => {
                  localStorage.setItem("locale", defaultLocale);
                  dispatch(updateLocale({ locale: defaultLocale }));
                  setLangMessages(defaultMessages);
                  setLocale(defaultLocale);
               });
         } else {
            const textCache = JSON.parse(cache);
            dispatch(updateLocale({ locale: nuevoLang }));
            setLangMessages(textCache.messages);
            setLocale(nuevoLang);
         }
      } else if (nuevoLang === defaultLocale) {
         localStorage.setItem("locale", defaultLocale);
         dispatch(updateLocale({ locale: defaultLocale }));
         setLangMessages(defaultMessages);
         setLocale(defaultLocale);
      }
   };

   /** Manejador automatico del estado del languaje */
   useEffect(() => {
      const localLang = localStorage.getItem("locale");
      if (!localLang) {
         localStorage.setItem("locale", lang);
      } else if (lang != localLang) {
         changeLanguage(localLang);
      }
   }, []);

   return (
      <LanguageContext.Provider value={{ changeLanguage: changeLanguage, locale: locale, locales: locales }}>
         <IntlProvider locale={locale} messages={langMessages}>
            {children}
         </IntlProvider>
      </LanguageContext.Provider>
   );
};

export default LanguageProvider;
