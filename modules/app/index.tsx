import React from "react";
import AppProvider from "./contexts/AppContext";

export default function AppModule({ children }: any) {
   return <AppProvider>{children}</AppProvider>;
}
