export interface AdminType {
   id?: number;
   group?: string;
   status?: string;
   verify?: boolean;
   name?: string;
   lastName?: string;
   country?: string;
   cellphone?: string;
   gender?: string;
   birthdate?: string;
   email?: string;
   lastSeen?: string;
   ip?: string;
   registeredAt?: string;
   updatedAt?: string;
   genresAdded?: GenreType[];
   artistsAdded?: ArtistType[];
   // imagesAdded?: ArtistImagesType[];
   albumsAdded?: AlbumType[];
   // albumsModified?: AlbumModificationsType[];
   lyrics?: LyricType[];
   // lyricModified?: LyricModificationsType[];
   // lyricVersions?: LyricVersionType[];
   // lyricVersionsModified?: LyricVersionModificationsType[];
}

export interface GenreType {
   id?: number;
   dns?: string;
   visibility?: string;
   name?: string;
   addedBy?: AdminType;
   addedAt?: string;
   updatedAt?: string;
   artists?: ArtistType[];
   albums?: AlbumType[];
   lyrics?: LyricType[];
   lyricVersions?: LyricType[];
}

export interface ArtistType {
   id?: number;
   dns?: string;
   visibility?: string;
   verify?: boolean;
   tags?: string;
   name?: string;
   nativeName?: string;
   type?: string;
   country?: string;
   year?: number;
   appleMusicID?: string;
   deezerID?: string;
   spotifyID?: string;
   youTubeID?: string;
   youTubeMusicID?: string;
   facebookID?: string;
   instagramID?: string;
   twitterID?: string;
   web?: string;
   photo?: string;
   cover?: string;
   color?: string;
   vibrantColor?: string;
   views?: number;
   info?: string;
   addedAt?: string;
   updatedAt?: string;
   genre?: GenreType;
   addedBy?: AdminType;
   // images?: ArtistImagesType[];
   albums?: AlbumType[];
   lyrics?: LyricType[];
   lyricVersions?: LyricType[];
}

export interface AlbumType {
   id?: number;
   dns?: string;
   visibility?: string;
   verify?: boolean;
   tags?: string;
   name?: string;
   nativeName?: string;
   type?: string;
   country?: string;
   year?: number;
   number?: number;
   language?: string;
   appleMusicID?: string;
   deezerID?: string;
   spotifyID?: string;
   youTubeID?: string;
   youTubeMusicID?: string;
   cover?: string;
   coverSD?: string;
   color?: string;
   vibrantColor?: string;
   views?: number;
   addedAt?: string;
   updatedAt?: string;
   genres?: GenreType[];
   artist?: ArtistType;
   addedBy?: AdminType;
   // ft?: AlbumFeaturingType[];
   // modifications?: AlbumModificationsType[];
   lyrics?: LyricType[];
   lyricVersions?: LyricType[];
}

export interface LyricType {
   id?: number;
   dns?: string;
   visibility?: string;
   verify?: boolean;
   tags?: string;
   title?: string;
   nativeTitle?: string;
   track?: number;
   duraction?: number;
   country?: string;
   language?: string;
   year?: number;
   composers?: string;
   writers?: string;
   copyright?: string;
   lyric?: string;
   nativeLyric?: string;
   appleMusicID?: string;
   deezerID?: string;
   spotifyID?: string;
   youTubeID?: string;
   youTubeMusicID?: string;
   views?: number;
   origin?: LyricType;
   addedAt?: string;
   updatedAt?: string;
   artist?: ArtistType;
   album?: AlbumType;
   genres?: GenreType[];
   approvedBy?: AdminType;
   // sentBy?: UserType;
   // ft?: LyricFeaturingType[];
   // modifications?: LyricModificationsType[];
   // likes?: LyricLikesType[];
   versions?: LyricType[];
}

export interface StaticsDataStandar {
   id?: string;
   lyric?: LyricType;
   album?: AlbumType;
   genre?: GenreType;
   artist?: ArtistType;
   views?: number;
}
