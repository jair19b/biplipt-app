import { gql } from "@apollo/client";

export const GET_SYSTEM = gql`
   query {
      _ {
         app {
            name
            live
            message
            register
            social
            facebook
            google
            apple
            version
         }
         page {
            title
            keywords
            description
         }
         loggedIn
         user {
            id
            name
            group
            photo
            ssid
            id
            adminHash
         }
         locale
         dir
         locales {
            name
            locale
         }
      }
   }
`;

export const GET_HOME = gql`
   query getIndexData {
      topWeekLyrics: getWeekLyricTop(limit: 10) {
         lyric {
            dns
            title
            artist {
               name
            }
         }
      }
      topWeekAlbums: getWeekAlbumTop(limit: 6) {
         album {
            dns
            name
            cover
            artist {
               name
            }
         }
      }
   }
`;
