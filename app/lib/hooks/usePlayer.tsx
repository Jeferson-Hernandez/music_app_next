import { ChangeEvent, FormEvent, RefObject, useState } from "react";

export const usePlayer = (playerRef: RefObject<HTMLAudioElement>) => {
  const [playState, setPlayState] = useState('pause')
  const [seekSlideValue, setSeekSlideValue] = useState(0)

  const handlePlayState = () => {
    if (playState == 'play') {
      playerRef.current?.pause()
      setPlayState('pause')
    } else {
      playerRef.current?.play()
      setPlayState('play')
    }
  }

  const handleVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const volumeValue = e.target.value;
    if (playerRef.current?.volume) {
      playerRef.current.volume = Math.floor(Number(volumeValue) / 100)
    }
  }

  const handleSeekSlider = (e: FormEvent<HTMLAudioElement>) => {
    console.log(playerRef.current?.currentTime)
    setSeekSlideValue(() => Number(playerRef.current?.currentTime))
  }

  return {
    seekSlideValue,
    handlePlayState,
    handleVolume,
    handleSeekSlider
  }
}