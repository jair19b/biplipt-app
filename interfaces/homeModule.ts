import { StaticsDataStandar } from "./graphQL";

interface HomeInfo {
   topWeekLyrics: StaticsDataStandar[];
   topWeekAlbums: StaticsDataStandar[];
   topWeekArtists: StaticsDataStandar[];
   topPopularGenres: StaticsDataStandar[];
}

export interface HomeContextI {
   data: HomeInfo | null;
   loading: boolean;
   error: any;
}
