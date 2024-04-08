import { create } from "zustand";
import { SongByIdType } from "./definitions";

export type SongType = {
  title: string;
  artist_name: string;
  cover_img_sm: string;
  song_url: string;
}

type SongStore = {
  currentSong: SongType | null,
  listSongs: SongType[],
  setSong: (song: SongType) => void 
}

export const useSongStore = create<SongStore>((set) => ({
  currentSong: null,
  listSongs: [],
  setSong: (song) => set((state) => {
    const newSong = {
      title: song.title,
      artist_name: song.artist_name,
      cover_img_sm: song.cover_img_sm,
      song_url: song.song_url
    }

    return {
      currentSong: newSong,
    }
  })
}))