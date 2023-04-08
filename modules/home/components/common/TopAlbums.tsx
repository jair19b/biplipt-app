import Image from "next/image";
import React from "react";

import Anchor from "../../../../shared/links/Anchor";

interface TopAlbumsProps {
  data: any[];
  loading: boolean;
  error: boolean;
  className: string;
}

export default function TopAlbums(props: TopAlbumsProps) {
  /* Extraer propiedades */
  const { loading, error, data } = props;

  /*Componente de carga y error en caso de existir */
  // if (loading || error || !data) return <SkeletonAlbums />;

  return <div className={props.className}></div>;
}
