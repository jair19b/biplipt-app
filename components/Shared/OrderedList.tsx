import React from "react";

import Anchor from "./Anchor";
import { OrderedListProps } from "@/interfaces";

/** Lista ordenada con estilo de Biplipt */
export default function OrderedLinkList(props: OrderedListProps) {
   /** Calcula la posicion de los items en dos columnas usando flexbox-order */
   function setOrder(position: number, total: number): number {
      const control = Math.ceil(total / 2);
      const mul = position + 1;

      if (!total || total < 10) return 1;
      if (position < control) return position + (position + 1);
      if (position >= control) return (mul - control) * 2;
      return 1;
   }

   /** controldar estados de carga y los errored de consulta */
   if (props.loading) return <div className={props.className}>Cargando los datos...</div>;
   if (props.error) return <div className={props.className}>No hay datos para mostrat</div>;

   return (
      <div className={props.className}>
         {props.data.map((item, index) => (
            <Anchor
               href={props.prefix ? `/${props.prefix}/${item.dns}` : `/${item.dns}`}
               title={item.title}
               className="flex items-center flex-nowrap rounded-md p-1 pl-5 hover:bg-gray-100 transition duration-150 cursor-pointer mb-1 w-1/2"
               style={{ order: setOrder(index, props.data.length) }}
               key={`lti-${index}`}
            >
               <div className="flex items-center justify-center">
                  <span className="text-3xl font-extralight text-gray-500">{index < 9 ? `0${index + 1}` : index + 1}</span>
               </div>
               <div className="ml-6 w-3/4">
                  <strong className="block w-full overflow-hidden whitespace-nowrap overflow-ellipsis">{item.title}</strong>
                  <small className="block text-gray-500 w-full overflow-hidden whitespace-nowrap overflow-ellipsis">{item.subtitle}</small>
               </div>
            </Anchor>
         ))}
      </div>
   );
}
