import style from "@/app/ui/main/musicList.module.css"
import Image from "next/image"
import { fetchSongs } from "@/app/lib/data"
import SongCard from "../components/songCard"

type MusicListProps = {
  title: string,
}

const MusicList = async({ title }: MusicListProps) => {

  const songs = await fetchSongs()

  return (
    <div className={`${style.content}`}>
      <h1 className={`${style.title}`}>{title}</h1>
      <div className={`${style.flex}`}>
        {
          songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))
        }
      </div>
    </div>
  )
}

export default MusicList