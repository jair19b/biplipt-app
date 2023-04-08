import React, { createContext } from "react";
import { useQuery } from "@apollo/client";

import { HomeContextI } from "../../interfaces/homeModule";
import { GET_HOME } from "@/graphql/queries/system";

/** Contexto por defecto */
const defaultContext: HomeContextI = {
   data: null,
   loading: true,
   error: false
};

/** Contexto de home */
export const HomeContext = createContext<HomeContextI>(defaultContext);

export default function HomeProvider({ children }: any) {
   const { data, loading, error } = useQuery(GET_HOME);
   return <HomeContext.Provider value={{ data, loading, error }}>{children}</HomeContext.Provider>;
}
