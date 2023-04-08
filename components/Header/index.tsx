import React from "react";

import SearchComponent from "./Search";
import Nav from "./Nav";

export default function Header() {
   return (
      <header className="w-full bg-white text-black flex justify-between flex-nowrap items-center shadow h-14 fixed top-0 inset-x-0 z-50">
         <div className="container mx-auto flex justify-between flex-nowrap items-center">
            <div className="font-black text-2xl leading-none text-center">Biplipt</div>
            <SearchComponent />
            <Nav />
         </div>
      </header>
   );
}
