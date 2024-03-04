'use client'

import style from '@/app/ui/song/songSection.module.css'
import { SongByIdType } from '@/app/lib/definitions'
import Image from 'next/image'
import { PlayCircleIcon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/outline'
import { MouseEvent } from 'react'
import { usePathname } from 'next/navigation'
import { likedSongAction } from '@/app/lib/actions'

import { useSongStore } from '@/app/lib/store'

type SongSectionProps = {
  song: SongByIdType
}

const SongSection = ({ song }: SongSectionProps) => {

  const pathname = usePathname()
  const { setSong } = useSongStore();

  const handleLike = (e: MouseEvent<SVGSVGElement>) => {
    likedSongAction(song.id, pathname)
  }

  const handlePlay = () => {
    setSong(song)
  }

  const likedSong = song.liked ? style.heart_icon_fill : style.heart_icon_stroke

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
        <div className={`${style.song_description}`}>
          <div>
            <p className={`${style.description_text}`}>Album</p>
            <p className={`${style.description_subtext}`}>{song.album_name}</p>
          </div>
          <div>
            <p className={`${style.description_text}`}>Likes</p>
            <p className={`${style.description_subtext}`}>{Intl.NumberFormat().format(Number(song.likes))}</p>
          </div>
          <PlayCircleIcon onClick={handlePlay} className={`${style.icon_md} ${style.play_icon}`}/>
          <HeartIcon onClick={handleLike} className={`${style.icon_sm} ${style.heart_icon} ${likedSong}`} />
        </div>
      </div>
    </div>
  )
}

export default SongSection