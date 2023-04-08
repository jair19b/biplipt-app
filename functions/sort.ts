/**
 * Retorna un número para ser utlizado con la propiedad order de CSS Flexbox,
 * se usa para visualizar listas en varias columnas
 */
export function setOrder(position: number, total: number): number {
   const control = Math.ceil(total / 2);
   const mul = position + 1;

   if (!total || total < 10) return 1;
   if (position < control) return position + (position + 1);
   if (position >= control) return (mul - control) * 2;
   return 1;
}
