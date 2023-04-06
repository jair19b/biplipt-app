import React from "react";

import AppProvider from "./AppContext";
import Header from "@/components/Header";

export default function AppModule({ children }: any) {
   return (
      <AppProvider>
         <Header />
         {children}
      </AppProvider>
   );
}
