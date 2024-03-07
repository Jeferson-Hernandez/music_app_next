'use client'

import style from "@/app/ui/main/musicPlayer.module.css"
import Image from "next/image"
import {
  PlayCircleIcon,
  PauseCircleIcon,
  ForwardIcon,
  BackwardIcon,
  SpeakerWaveIcon
} from '@heroicons/react/24/solid'
import { usePlayer } from "@/app/lib/hooks/usePlayer"
import { MusicPlayerSkeleton } from "../app/skeletons"

const MusicPlayer = () => {

  const { 
    currentSong,
    songInstance,
    isPlaying,
    duration,
    seekSliderValue,
    volumeValue,
    handleSeekSlider,
    handlePlay,
    handleVolume
   } = usePlayer()

  
  if (!currentSong) {
    return
  }

  if (!songInstance) {
    return <MusicPlayerSkeleton volume={volumeValue}/>
  }

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
        <div className={`${style.player_controls}`}>
          <BackwardIcon className={`${style.icon}`}/>
          {
            isPlaying
              ? <PauseCircleIcon onClick={handlePlay}  className={`${style.icon} ${style.play_icon}`}/>
              : <PlayCircleIcon onClick={handlePlay}  className={`${style.icon} ${style.play_icon}`}/>
          }
          <ForwardIcon className={`${style.icon}`}/>
        </div>
        <input type="range" onChange={handleSeekSlider} value={seekSliderValue} max={duration} min={0} className={`${style.seek_slider}`} />
      </div>
      <div className={`${style.volume_container}`}>
        <SpeakerWaveIcon className={`${style.icon} ${style.volume_icon}`}/>
        <input onChange={handleVolume} value={volumeValue} type="range" max={1} min={0} step={.05} className={`${style.volume_slider}`} />
      </div>
    </footer>
  )
}

export default MusicPlayer