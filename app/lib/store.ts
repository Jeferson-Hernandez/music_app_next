import { create } from "zustand";

export type SongType = {
  title: string;
  artist_name: string;
  cover_img_sm: string;
  song_url: string;
}

type SongStore = {
  currentSong: SongType | null,
  currentQueue: number,
  listSongs: SongType[],
  setSong: (song: SongType) => void,
  addSongQueue: (song: SongType) => void,
  nextSong: () => void,
  prevSong: () => void
}

export const useSongStore = create<SongStore>((set) => ({
  currentSong: null,
  currentQueue: 0,
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
      listSongs: [newSong]
    }
  }),
  addSongQueue: (song) => set((state) => {
    const songExists = state.listSongs.find((e) => e.title === song.title)

    if (!state.currentSong) {
      return {}
    }

    if (!songExists) {
      const newSong = {
        title: song.title,
        artist_name: song.artist_name,
        cover_img_sm: song.cover_img_sm,
        song_url: song.song_url
      }

      const newListSongs = [...state.listSongs, newSong]

      return {
        listSongs: newListSongs
      }
    }

    return {
      listSongs: [...state.listSongs]
    }
  }),
  nextSong: () => set((state) => {
    if (state.listSongs.length == state.currentQueue + 1) {
      return {}
    }

    return {
      currentSong: state.listSongs[state.currentQueue + 1],
      currentQueue: state.currentQueue + 1
    }
  }),
  prevSong: () => set((state) => {
    if (state.currentQueue == 0) {
      return {}
    }

    return {
      currentSong: state.listSongs[state.currentQueue - 1],
      currentQueue: state.currentQueue - 1
    }
  })
}))