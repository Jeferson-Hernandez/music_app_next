import style from "@/app/ui/main/musicPlayer.module.css"
import Image from "next/image"
import {
  PlayCircleIcon,
  ForwardIcon,
  BackwardIcon,
  SpeakerWaveIcon
} from '@heroicons/react/24/solid'

import { song_playing } from "@/app/lib/constants"

const MusicPlayer = () => {
  return (
    <footer className={`${style.container} ${style.glass_effect} ${style.flex}`}>
      <div className={`${style.song_card}`}>
        <Image
          src={song_playing.coverImg}
          height={80}
          width={80}
          alt={`cover of the song ${song_playing.title}`}
          className={`${style.song_card_img}`}
        />
        <div className={`${style.song_card_info}`}>
          <p className={`${style.song_card_title}`}>{song_playing.title}</p>
          <p className={`${style.song_card_subtitle}`}>{song_playing.artist}</p>
        </div>
      </div>
      <div className={`${style.player_controls_container}`}>
        <div className={`${style.player_controls}`}>
          <BackwardIcon className={`${style.icon}`}/>
          <PlayCircleIcon className={`${style.icon} ${style.play_icon}`}/>
          <ForwardIcon className={`${style.icon}`}/>
        </div>
        <div className={`${style.song_length}`}>
          length of the song
        </div>
      </div>
      <div className={`${style.volume_container}`}>
        <SpeakerWaveIcon className={`${style.icon} ${style.volume_icon}`}/>
        <div>length of the volume</div>
      </div>
    </footer>
  )
}

export default MusicPlayer