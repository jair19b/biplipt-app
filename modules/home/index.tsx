import React from "react";
// import dynamic from "next/dynamic";
import HomeProvider from "./HomeContext";
import Landing from "./components/Landing";
import WeekTop from "./components/WeekTop";

// const Landing = dynamic(() => import("./components/Landing"), { loading: () => <b>cargando</b> });

export default function IndexModule() {
   return (
      <HomeProvider>
         <main className="mt-12">
            <Landing />
            <WeekTop />
         </main>
      </HomeProvider>
   );
}
