import React from "react";

import { FormattedMessage } from "react-intl";
import Anchor from "@/components/Shared/Anchor";
import UserOptions from "./UserOptions";

/** Barra de navegacion de usuario, tiene los links de navegacion principal */
export default function NavComponent() {
   const styles =
      "text-sm font-bold transition duration-200 cursor-pointer leanding-none hover:text-black inline-block px-3 py-1 text-gray-300";

   return (
      <React.Fragment>
         <nav className="flex items-center justify-between">
            <Anchor href="/" className={styles} activeClass="text-slate-900">
               <FormattedMessage id="header.inicio" defaultMessage="Inicio" />
            </Anchor>
            <Anchor href="/albums" className={styles} activeClass="text-slate-900">
               <FormattedMessage id="header.albumes" defaultMessage="Álbumes" />
            </Anchor>
            <Anchor href="/artists" className={styles} activeClass="text-slate-900">
               <FormattedMessage id="header.artistas" defaultMessage="Artistas" />
            </Anchor>
            <Anchor href="/genres" className={styles} activeClass="text-slate-900">
               <FormattedMessage id="header.generos" defaultMessage="Generos" />
            </Anchor>
            <Anchor href="/lyrics" className={styles} activeClass="text-slate-900">
               <FormattedMessage id="header.contribuir" defaultMessage="Contribuir" />
            </Anchor>
         </nav>
         <UserOptions />
      </React.Fragment>
   );
}
