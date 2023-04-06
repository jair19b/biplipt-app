import React, { useEffect, createContext, useContext } from "react";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

import AppError from "./components/AppError";
import HtmlHead from "./components/HtmlHead";
import { LanguageContext } from "@/language/languageContext";
import { LanguageContextI, SystemState, UserState, AppContextI } from "@/interfaces";
import { login, logout, setSystem } from "@/redux/slices/appSlice";
import type { StoreState } from "@/redux/store";
import { GET_SYSTEM } from "@/graphql/queries/system";
import ProgressBar from "./components/ProgressBar";

/** Contexto del modulo principal de la aplicación */
export const AppContext = createContext<AppContextI | null>(null);

/** Proovedor de contexto de modulo */
const AppProvider = ({ children }: any) => {
   // Estados del contexto
   const { locale } = useContext<LanguageContextI>(LanguageContext);
   const { loggedIn } = useSelector<StoreState, SystemState>((state) => state.system);
   const dispatch = useDispatch();

   /** Consulta automatica a la API GraphQL, para obtner la informacion del sistema */
   const { data, error, loading, refetch } = useQuery(GET_SYSTEM, { pollInterval: 10000 });

   /** Inicia una session en el sistema y cambia el estado Redux global de la aplicación */
   const signin = (session: UserState) => {
      localStorage.setItem(process.env.NEXT_PUBLIC_SESSION_NAME || "SSID", session.token);
      dispatch(login(session));
      refetch();
   };

   /** Termina la sesión actual y actualiza el estado global de la aplicación */
   const closeSession = () => {
      localStorage.removeItem(process.env.NEXT_PUBLIC_SESSION_NAME || "SSID");
      dispatch(logout(null));
   };

   /** Manejador del estato Redux */
   useEffect(() => {
      const ssid = localStorage.getItem(process.env.NEXT_PUBLIC_SESSION_NAME || "SSID");

      // setea el estado recivido del servidor
      if (data) {
         dispatch(setSystem(data._));
      }

      // setea la informacion de la session actual
      if (data && !loggedIn && data._.loggedIn && ssid) {
         dispatch(login(data._.user));
      }

      // destruye la session actual si esta no es válida
      if (data && loggedIn && !data._.loggedIn && !ssid) {
         dispatch(logout(false));
      }
   }, [data]);

   /** Establece y actualiza el idioma de la aplicacion */
   useEffect(() => {
      if (data && data._.app.locale != locale) {
         refetch();
      }
   }, [locale]);

   /** Componente que se renderizará si ha ocurrido algun error en la comunicación con el backend */
   if (error) return <AppError />;
   if (data && !data?._?.app.live) return <AppError />;

   return (
      <AppContext.Provider
         value={{
            systemRoot: data?._,
            systemLoading: loading,
            systemError: error,
            systemRefetch: refetch,
            login: signin,
            logout: closeSession
         }}
      >
         <ProgressBar />
         <HtmlHead />
         {children}
      </AppContext.Provider>
   );
};

export default AppProvider;
