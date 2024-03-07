"use client"

import { LikedSongsType } from '@/app/lib/definitions'
import style from '@/app/ui/collections/collectionSongCard.module.css'
import { PlayCircleIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import Image from "next/image"
import { MouseEvent } from 'react'
import { useSongStore } from '@/app/lib/store'

type CollectionSongCard = {
  song: LikedSongsType
}

const CollectionSongCard = ({ song }: CollectionSongCard ) => {
  const router = useRouter()
  const { setSong } = useSongStore();

  const handlePlay = (e: MouseEvent<SVGSVGElement>) => {
    setSong(song)
    e.stopPropagation()
  }

  return (
    <div onClick={() => router.push(`/${song.id}`)} className={`${style.card_container}`}>
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
      <PlayCircleIcon onClick={handlePlay} className={`${style.play_icon}`} />
    </div>

  )
}

export default CollectionSongCard