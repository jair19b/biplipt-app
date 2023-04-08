import React from "react";

import Anchor from "@/components/Shared/Anchor";
import { StaticListProps } from "@/interfaces";
import { setOrder } from "@/functions/sort";

/** Lista ordenada con estilo de Biplipt */
export default function OrderedStaticList(props: StaticListProps) {
   /** controldar estados de carga y los errores de consulta */
   if (props.loading) return <div className={props.className}>Cargando los datos...</div>;
   if (props.error || !props.data || props.data.length == 0) return <div className={props.className}>No hay datos para mostrat</div>;

   return (
      <div className={props.className}>
         {props.data.map((item, index) => (
            <Anchor
               href={`/${props.prefix}/${item.lyric?.dns}`}
               title={item.lyric?.title}
               className="flex items-center flex-nowrap rounded-md p-1 pl-5 hover:bg-gray-100 transition duration-150 cursor-pointer mb-1 w-1/2"
               style={{ order: setOrder(index, props.data!.length) }}
               key={item.lyric?.dns}
            >
               <div className="flex items-center justify-center">
                  <span className="text-3xl font-extralight text-gray-500">{index < 9 ? `0${index + 1}` : index + 1}</span>
               </div>
               <div className="ml-6 w-3/4">
                  <strong className="block w-full overflow-hidden whitespace-nowrap overflow-ellipsis">{item.lyric?.title}</strong>
                  <small className="block text-gray-500 w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
                     {item.lyric?.artist?.name}
                  </small>
               </div>
            </Anchor>
         ))}
      </div>
   );
}
