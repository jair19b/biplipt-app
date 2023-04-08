import Image from "next/image";
import React from "react";

export default function RandomArtist(): JSX.Element {
   return (
      <div className="col-start-8 col-end-13 text-white flex flex-col justify-center text-center">
         <Image
            src="/storage/artists/robleis.jpg"
            width={130}
            height={130}
            alt="Robleis Youtu"
            className="w-[8.125rem] h-[8.125rem] rounded-full border-solid border-4 border-white mx-auto"
         />
         <div>
            <h3 className="font-bold text-2xl leading-none my-7">Robleis</h3>
            <p className="text-justify font-normal">
               Tomás Arbillaga, mejor conocido como RobleisIUTU, Robledo o simplemente Robleis, es un Youtuber, streamer y cantante argentino.
               Actualmente cuenta con más de 14 millones de suscriptores en Youtube y más de 571k oyentes en Spotify.
            </p>
         </div>
         <div className="w-3/4 mx-auto flex justify-around items-center flex-nowrap mt-7 text-xl">
            <span className="fa-spotify"></span>
            <span className="fa-twitter"></span>
            <span className="fa-youtube-play"></span>
            <span className="fa-instagram"></span>
            <span className="fa-eyes"></span>
         </div>
      </div>
   );
}
