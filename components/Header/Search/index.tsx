import React, { useState } from "react";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";

import { SearchSuggestItemI } from "@/interfaces";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_RESOURCE } from "@/graphql/queries/components";
import CustomInput from "@/components/Shared/CustomInput";
import SearchItem from "./SearchItem";

/** Componente de busqueda para la barra de navegacion principal */
export default function SearchComponent(props: any): JSX.Element {
   const [inputValue, setInputValue] = useState("");
   const [suggestsView, setSuggestsView] = useState(false);
   const [results, setResults] = useState<SearchSuggestItemI[]>([]);
   const router = useRouter();
   const intl = useIntl();

   // Preparacion de la consulta de busqueda
   const [searchData, { data, loading, error }] = useLazyQuery(SEARCH_RESOURCE);

   /** Copia query de la busqueda en url para aseguar permanecia de informacion o recarga por navegador */
   function setQueryUrl(query: string): void {
      if (query.length > 0) {
         window.history.pushState(null, "", `/search/${query}`);
      } else {
         window.history.pushState(null, "", "");
      }
   }

   /** Mustra, oculta y controla el input y el menu de sugerencias de busqueda */
   function handleSearch(event: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>): void {
      setQueryUrl(event.target.value);
      setInputValue(event.target.value);

      // detectar evento y cantidad de caracteres para determinar si realizar busqueda o no
      if (event.target.name === "onFocus" && event.target.value.length >= 3) {
         setSuggestsView(true);
      } else if (event.target.value.length >= 3) {
         searchData({ variables: { input: event.target.value } });
         setResults(data);
         setSuggestsView(true);
      } else {
         setSuggestsView(false);
         setResults([]);
      }
   }

   /** Cierra el dropdown de sugerencias */
   function closeListResults(): void {
      setTimeout(function () {
         setSuggestsView(false);
      }, 250);
   }

   /** generar busqueda mas extensa con vista independiente */
   function sendSearchPage(event: React.FormEvent<HTMLFormElement>): void {
      event.preventDefault();
      router.push(`/search/${inputValue}`);
   }

   return (
      <div className="w-1/3 hidden lg:flex items-center justify-between flex-nowrap relative">
         <form
            action="/search"
            method="get"
            autoComplete="off"
            onSubmit={(e) => sendSearchPage(e)}
            className="flex justify-between items-center relative w-full z-10"
         >
            <CustomInput
               type="search"
               name="search"
               placeholder={intl.formatMessage({ id: "app.buscarEnBiplipt", defaultMessage: "Buscar en Biplipt" })}
               icon="fa-search"
               value={inputValue}
               handleChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)}
               handleFocus={(e: React.FocusEvent<HTMLInputElement>) => handleSearch(e)}
               handleBlur={() => closeListResults()}
               parentClass="block relative w-5/6 lg:w-full"
               className="w-full appearance-none outline-none bg-zinc-100 text-zinc-600 rounded-2xl px-3 pr-14 leading-none h-11 transition focus:bg-white focus:border focus:text-zinc-400"
               iconClass="flex justify-center items-center w-14 absolute top-0 right-0 bottom-0"
            />
            <button type="reset" className="hidden">
               <span className="bi-trash-fill"></span>
            </button>
         </form>
         <div
            className={`bg-white w-[102%] inset-x-[-1%] absolute top-[-0.15rem] px-2 pb-3 pt-11 shadow z-0 rounded-lg${
               suggestsView ? " block" : " hidden"
            }`}
         >
            <div className="max-h-72 overflow-y-auto pt-4 scrollbar-none">
               {loading && !error && <div>Cargando ....</div>}
               {error && <div>Error ups</div>}
               {results &&
                  results.map((item, index) => <SearchItem title={item.title} subtitle={item.subtitle} type={item.type} dns={item.dns} />)}
            </div>
         </div>
      </div>
   );
}
