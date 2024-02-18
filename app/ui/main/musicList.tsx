import style from "@/app/ui/main/musicList.module.css"
import { songs } from "@/app/lib/constants"
import Image from "next/image"

type MusicListProps = {
  title: string,
  // songs: SongType
}

const MusicList = ({ title }: MusicListProps) => {
  return (
    <div className={`${style.content}`}>
      <h1 className={`${style.title}`}>{title}</h1>
      <div className={`${style.flex}`}>
        {
          songs.map((song) => (
            <div key={song.id} className={`${style.card}`}>
                <Image
                  src={song.coverImg}
                  width={200}
                  height={200}
                  alt={`cover of the song ${song.title}`}
                  className={`${style.card_img}`}
                />
                <p className={`${style.card_title}`}>{song.title}</p>
                <p className={`${style.card_subtitle}`}>{song.artist}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MusicList