import style from "@/app/ui/main/musicList.module.css"
import Image from "next/image"
import { fetchSongs } from "@/app/lib/data"

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
            <div key={song.id} className={`${style.card}`}>
                <Image
                  src={song.cover_img_sm}
                  width={200}
                  height={200}
                  alt={`cover of the song ${song.title}`}
                  className={`${style.card_img}`}
                />
                <p className={`${style.card_title}`}>{song.title}</p>
                <p className={`${style.card_subtitle}`}>{song.artist_name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MusicList