type SongType = {
  id: string;
  title: string;
  artist_id: string;
  likes: string;
  album_id: string;
  liked: boolean;
  cover_img_sm: string;
  cover_img_lg: string;
  song_url: string;
}

type ArtistType = {
  id: string;
  name: string;
  follows: number;
}

type AlbumType = {
  id: string;
  title: string;
}

interface SongList extends SongType {
  artist_name: string;
}

interface SongById extends SongList {
  artist_follows: number;
  album_name: string
}

export type SongListType = Omit<SongList, 'artist_id' | 'likes' | 'album_id' | 'liked' | 'cover_img_lg' | 'song_url'>
export type TopChartsType = Omit<SongList, 'artist_id' | 'album_id' | 'cover_img_lg' | 'song_url'>
export type SongByIdType = Omit<SongById, 'artist_id' | 'album_id'>
