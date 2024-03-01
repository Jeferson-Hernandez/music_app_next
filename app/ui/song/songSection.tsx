import style from '@/app/ui/song/songSection.module.css'
import { SongByIdType } from '@/app/lib/definitions'
import Image from 'next/image'

type SongSectionProps = {
  song: SongByIdType
}

const SongSection = ({ song }: SongSectionProps) => {
  return (
    <div className={`${style.content}`}>
      <div className={`${style.cover_container}`}>
        <Image
          src={song.cover_img_sm}
          width={500}
          height={500}
          alt={`cover of the song ${song.title}`}
          className={`${style.song_cover}`}
        />
      </div>
      <div>
        <h1 className={`${style.song_title}`}>{song.title}</h1>
        <h2 className={`${style.song_artist}`}>{song.artist_name}</h2>
        <div>
          <p className={`${style.album_text}`}>Album</p>
          <p className={`${style.song_album}`}>{song.album_name}</p>
          <p className={`${style.song_likes}`}><span className={`${style.likes_text}`}>Likes</span> {song.likes}</p>
        </div>
      </div>
    </div>
  )
}

export default SongSection