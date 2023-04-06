import React, { useEffect } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";

import type { StoreState } from "@/redux/store";
import { SystemState } from "@/interfaces";

export default function HtmlHead() {
   const { dir, locale, page } = useSelector<StoreState, SystemState>((state) => state.system);

   /** Establece los valores de metadatos de la etiqueta html tales como la direccion y el idioma configurado */
   useEffect(() => {
      document.dir = dir;
      document.querySelector("html")!.lang = locale;
   }, [dir, locale, page]);

   return (
      <Head>
         <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
         <meta name="keywords" content={page.keywords} />
         <meta name="description" content={page.description} />
         <meta name="theme-color" content="#ffffff" />
         <title>{page.title}</title>
      </Head>
   );
}
