import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

import Anchor from "@/components/Shared/Anchor";
import { UserState, SystemState } from "@/interfaces";
import type { StoreState } from "@/redux/storage";

/** Componente de usuario en barra de navegacion del header */
export default function UserOptions() {
   const [open, setOpen] = useState(false);
   const { loggedIn } = useSelector<StoreState, SystemState>((state) => state.system);
   const user = useSelector<StoreState, UserState>((state) => state.system.user!);

   return (
      <div className="w-64 ml-4">
         {loggedIn ? (
            <div className="relative w-full flex flex-nowrap items-center justify-start border-l border-solid border-gray-150">
               <img src={user.photo} alt={user.name} className="w-12 h-12 rounded-full shadow-sm mx-3" />
               <strong className="cursor-pointer select-none" onClick={() => setOpen(!open)}>
                  {user.name}
               </strong>
               {/* {open && <HeaderMenu />} */}
            </div>
         ) : (
            <div className="flex items-center flex-nowrap justify-end">
               <Anchor
                  href="/signup"
                  className="inline-block px-4 py-3 mr-1 leading-none outline-none rounded-xl text-center text-sm transition border border-zinc-400 text-zinc-400 hover:bg-zinc-400 hover:text-white"
               >
                  <FormattedMessage id="header.crearCuenta" defaultMessage="Crear Cuenta" />
               </Anchor>
               <Anchor
                  href="/signin"
                  className="inline-block px-4 py-3 leading-none outline-none rounded-xl text-center text-sm transition bg-sky-400 text-white hover:bg-sky-500"
               >
                  <FormattedMessage id="header.iniciarSesion" defaultMessage="Iniciar Sesión" />
               </Anchor>
            </div>
         )}
      </div>
   );
}
