'use client'

import { SongListType } from '@/app/lib/definitions'
import style from '@/app/ui/components/songCard.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type SongCardProps = {
  song: SongListType
}

const SongCard = ({ song }: SongCardProps) => {
  const router = useRouter()

  return (
    <div key={song.id} onClick={() => router.push(`/${song.id}`)} className={`${style.card}`}>
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
  )
}

export default SongCard