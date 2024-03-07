import {
  PlayCircleIcon,
  PauseCircleIcon,
  ForwardIcon,
  BackwardIcon,
  SpeakerWaveIcon
} from '@heroicons/react/24/solid'
import style from '@/app/ui/app/skeletons.module.css'

type MusicPlayerSkeletonProps = {
  volume: number
}

export const MusicPlayerSkeleton = ({ volume }: MusicPlayerSkeletonProps) => {
  return (
    <footer className={`${style.container} ${style.glass_effect} ${style.flex}`}>
      <div className={`${style.song_card}`}>
        <div
          className={`${style.song_card_img}`}
        />
        <div className={`${style.song_card_info}`}>
          <p className={`${style.song_card_title}`}></p>
          <p className={`${style.song_card_subtitle}`}></p>
        </div>
      </div>
      <div className={`${style.player_controls_container}`}>
        <div className={`${style.player_controls}`}>
          <BackwardIcon className={`${style.icon}`} />
          <PlayCircleIcon className={`${style.icon} ${style.play_icon}`} />
          <ForwardIcon className={`${style.icon}`} />
        </div>
        <input type="range" defaultValue={0}  max={100} min={0} className={`${style.seek_slider}`} />
      </div>
      <div className={`${style.volume_container}`}>
        <SpeakerWaveIcon className={`${style.icon} ${style.volume_icon}`} />
        <input readOnly value={volume} type="range" max={1} min={0} step={.05} className={`${style.volume_slider}`} />
      </div>
    </footer>
  )
}