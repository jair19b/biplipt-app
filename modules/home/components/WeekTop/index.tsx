import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";

import { HomeContext } from "../../HomeContext";
import { HomeContextI } from "@/interfaces/homeModule";
import OrderedStaticList from "@/components/Shared/OrderedStaticList";

export default function IndexSectionTwo() {
   const { data, loading, error } = useContext<HomeContextI>(HomeContext);

   return (
      <div className="bg-white w-full py-9">
         <div className="container mx-auto grid grid-cols-12 grid-rows-1">
            <div className="col-start-1 col-end-7">
               <h2 className="text-3xl mb-9">
                  <FormattedMessage id="home.topMasAccedidos" defaultMessage="Top Más Accedidos" />
               </h2>
               <OrderedStaticList
                  className="flex justify-between flex-wrap"
                  loading={loading}
                  data={data?.topWeekLyrics}
                  error={error}
                  prefix="lyric"
               />
            </div>
            <div className="col-start-8 col-end-13">
               <h2 className="text-lg mb-5 font-bold">
                  <FormattedMessage id="home.topMasAccedidos" defaultMessage="Álbumes Populares" />
               </h2>
               {/* <ListAlbumSquare className="my-2 flex justify-between flex-wrap" loading={false} error={false} data={albumsData.topAlbums} /> */}
            </div>
         </div>
      </div>
   );
}
