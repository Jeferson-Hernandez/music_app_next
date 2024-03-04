'use client'

import { likedSongAction } from '@/app/lib/actions'
import { TopChartsType } from '@/app/lib/definitions'
import style from '@/app/ui/components/topChartCard.module.css'
import { HeartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import { useRouter, usePathname } from 'next/navigation'
import { MouseEvent } from 'react'

type TopChartCardProps = {
  song: TopChartsType
}

const TopChartCard = ({ song }: TopChartCardProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleLike = (e: MouseEvent<SVGSVGElement>) => {
    likedSongAction(song.id, pathname)
    e.stopPropagation()
  }

  const likedSong = song.liked ? style.heart_icon_fill : style.heart_icon_stroke

  return (
    <div key={song.id} onClick={() => router.push(`/${song.id}`)} className={`${style.song_card}`}>
      <Image
        src={song.cover_img_sm}
        width={145}
        height={130}
        alt={`cover of the song ${song.title}`}
        className={`${style.song_card_image}`}
      />
      <div className={`${style.song_card_info}`}>
        <h3 className={`${style.song_card_title}`}>{song.title}</h3>
        <p className={`${style.song_card_artist}`}>{song.artist_name}</p>
        <span className={`${style.song_card_likes}`}>{Intl.NumberFormat().format(Number(song.likes))} likes</span>
      </div>
      <HeartIcon onClick={handleLike} className={`${style.song_card_heart_icon} ${likedSong} `} />
    </div>
  )
}

export default TopChartCard