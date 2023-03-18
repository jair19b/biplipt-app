import { LanguageContextI, SystemState } from "@/interfaces";

export const defaultSystemState: SystemState = {
   app: {
      name: "Biplipt",
      live: true,
      message: null,
      register: false,
      social: false,
      facebook: false,
      google: false,
      apple: false,
      locale: "es-US",
      dir: "ltr",
      version: "0.1.0"
   },
   page: {
      title: "Biplipt",
      keywords: "biplipt",
      description: "biplipt"
   },
   loggedIn: false,
   user: null,
   locales: [
      {
         name: "Español",
         locale: "es-US"
      }
   ]
};

export const defaultLanguegeContext: LanguageContextI = {
   changeLanguage: null,
   locale: "es-US",
   locales: [{ locale: "es-us", name: "Español" }]
};
