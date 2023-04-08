import React from "react";
import RandomArtist from "./RandonArtist";

export default function Landing(): JSX.Element {
   return (
      <div className="w-full h-[29.6875rem] gradient-home">
         <div className="container mx-auto h-full grid grid-cols-12 items-center">
            <div className="col-start-1 col-end-7 text-white">
               <h2 className="text-5xl mb-7">¡Bienvenido a Biplipt!</h2>
               <p className="text-left font-light w-2/3">
                  Estas en la biblioteca de letras más grande del mundo 🌎 Has parte de nustra comunidad, crear una cuenta y empiza a acumular
                  puntos 🎖 entre más puntos tengas podrás convertirte en uno de nuestros moderadores
               </p>
            </div>
            <RandomArtist />
         </div>
      </div>
   );
}
