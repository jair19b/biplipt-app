import React from "react";
import Anchor from "@/components/Shared/Anchor";

interface HeaderSearchItemProps {
   dns: string;
   title: string;
   subtitle: string;
   type: string;
}

export default function SearchItem(props: HeaderSearchItemProps) {
   return (
      <Anchor href={props.dns} className="flex items-center justify-between flex-nowrap w-full rounded p-1 mb-1 transition hover:bg-zinc-50">
         <div className="w-[10%] flex items-center justify-center">
            {props.type == "lyric" && (
               <span className="bi-lyric">
                  <i className="bi-music-note"></i>
               </span>
            )}
            {props.type == "album" && (
               <span className="bi-lyric">
                  <i className="bi-disc-fill"></i>
               </span>
            )}
            {props.type == "genre" && (
               <span className="bi-lyric">
                  <i className="bi-grid-fill"></i>
               </span>
            )}
            {props.type == "artist" && (
               <span className="bi-lyric">
                  <i className="bi-grid-star-fill"></i>
               </span>
            )}
         </div>
         <div className="w-[90%]">
            <strong className="block mb-1 font-bold text-sm">{props.title}</strong>
            <small className="block font-light text-black text-xs">{props.subtitle}</small>
         </div>
      </Anchor>
   );
}
