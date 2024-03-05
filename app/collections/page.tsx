import style from "@/app/collections/page.module.css"
import { fetchLikedSongs } from "../lib/data"
import { PlayCircleIcon } from '@heroicons/react/24/solid'
import Image from "next/image"

const Collection = async() => {
  const data = await fetchLikedSongs()
  return (
    <div className={`${style.content}`}>
      {
        data.map((song) => (
          <div key={song.id} className={`${style.card_container}`}>
            <Image
              src={song.cover_img_sm}
              height={310}
              width={370}
              alt={`cover img of the song ${song.title}`}
              className={`${style.cover_img}`}
            />
            <div className={`${style.text_container}`}>
              <h2 className={`${style.title}`} >{song.title}</h2>
              <p className={`${style.subtitle}`} >{song.artist_name}</p>
            </div>
            <PlayCircleIcon className={`${style.play_icon}`} />
          </div>
        ))
      }
    </div>
  )
}

export default Collection
