'use client'

import style from "@/app/ui/main/musicPlayer.module.css"
import Image from "next/image"
import {
  PlayCircleIcon,
  ForwardIcon,
  BackwardIcon,
  SpeakerWaveIcon
} from '@heroicons/react/24/solid'
import { SongType, useSongStore } from "@/app/lib/store"
import { useEffect, useRef, useState} from "react"
import { usePlayer } from "@/app/lib/hooks/usePlayer"

const MusicPlayer = () => {
  const { currentSong } = useSongStore();
  const playerRef = useRef<HTMLAudioElement>(null);
    
  const { seekSlideValue, handlePlayState, handleSeekSlider, handleVolume } = usePlayer(playerRef);
  
  if (!currentSong) {
    return
  }

  console.log(playerRef)

  return (
    <footer className={`${style.container} ${style.glass_effect} ${style.flex}`}>
      <div className={`${style.song_card}`}>
        <Image
          src={currentSong.cover_img_sm}
          height={80}
          width={80}
          alt={`cover of the song ${currentSong.title}`}
          className={`${style.song_card_img}`}
        />
        <div className={`${style.song_card_info}`}>
          <p className={`${style.song_card_title}`}>{currentSong.title}</p>
          <p className={`${style.song_card_subtitle}`}>{currentSong.artist_name}</p>
        </div>
      </div>
      <div className={`${style.player_controls_container}`}>
        <audio onTimeUpdate={handleSeekSlider} ref={playerRef} src={`${currentSong.song_url}`} preload="metadata"></audio>
        <div className={`${style.player_controls}`}>
          <BackwardIcon className={`${style.icon}`}/>
          <PlayCircleIcon onClick={handlePlayState}  className={`${style.icon} ${style.play_icon}`}/>
          <ForwardIcon className={`${style.icon}`}/>
        </div>
        <input type="range" readOnly value={seekSlideValue} max={playerRef.current?.duration} min={0} className={`${style.seek_slider}`} />
      </div>
      <div className={`${style.volume_container}`}>
        <SpeakerWaveIcon className={`${style.icon} ${style.volume_icon}`}/>
        <input onChange={handleVolume} defaultValue={100} type="range" max={100} min={0} className={`${style.volume_slider}`} />
      </div>
    </footer>
  )
}

export default MusicPlayer