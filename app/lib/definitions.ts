// type SongType = {
//   id: string;
//   title: string;
//   artist_id: string;
//   likes: string;
//   album_id: string;
//   liked: boolean;
//   cover_img_sm: string;
//   cover_img_lg: string;
//   song_url: string;
// }

export type SongListType = {
  id: string;
  title: string;
  cover_img_sm: string;
  artist_name: string;
}

export type TopChartsType = {
  id: string;
  title: string;
  likes: string;
  liked: boolean;
  cover_img_sm: string;
  artist_name: string;
}

export type SongByIdType = {
  id: string;
  title: string;
  likes: string;
  album_id: string;
  liked: boolean;
  cover_img_sm: string;
  cover_img_lg: string;
  song_url: string;
  artist_name: string;
  album_name: string;
}

export type SongByAlbumType = {
  id: string;
  title: string;
  cover_img_sm: string;
  artist_name: string;
  song_url: string;
}

export type LikedSongsType = {
  id: string;
  title: string;
  cover_img_sm: string;
  song_url: string;
  artist_name: string;
}

export type SearchSongsType = {
  id: string;
  title: string;
  cover_img_sm: string;
  artist_name: string;
}