import React from "react";
import { FormattedMessage } from "react-intl";

import { useQuery } from "@apollo/client";
import TopAlbums from "./common/TopAlbums";

import ListTopItems from "../../../shared/lists/ListTopItems";
import data from "../../../../data/top-lyrics";
import albumsData from "../../../../data/top-albums";
import ListAlbumSquare from "../../../shared/lists/ListAlbumSquare";
import { LYRIC_WEEK_TOP } from "../../../../graphql/Queries/home";

export default function IndexSectionTwo() {
   /** consultar el top 10 de las letras mas accedidas */
   const topLyricsData = useQuery(LYRIC_WEEK_TOP, { variables: { limit: 10 } });
   console.log(topLyricsData);

   return (
      <div className="bg-white w-full py-9">
         <div className="container mx-auto grid grid-cols-12 grid-rows-1">
            <div className="col-start-1 col-end-7">
               <h2 className="text-3xl mb-9">
                  <FormattedMessage id="home.topMasAccedidos" defaultMessage="Top Más Accedidos" />
               </h2>
               <ListTopItems
                  className="flex flex-wrap"
                  loading={topLyricsData.loading}
                  error={topLyricsData.error}
                  data={topLyricsData.data?.getWeekLyricTop}
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
