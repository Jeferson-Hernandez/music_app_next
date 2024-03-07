import { ChangeEvent, FormEvent, RefObject, useEffect, useState } from "react";
import { SongType, useSongStore } from "../store";
import { Howl, Howler } from 'howler'

export const usePlayer = () => {
  const { currentSong } = useSongStore();
  const [song, setSong] = useState<Howl>()
  const [duration, setDuration] = useState<number>()
  const [seekSliderValue, setSeekSliderValue] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)

  useEffect(() => {
    if (song) {
      song.unload()
      setSong(undefined)
      setIsPlaying(false)
      setSeekSliderValue(0)
    }

    if (currentSong) {
      const songInstance = new Howl({
        src: currentSong.song_url,
        onend: function() {
          setIsPlaying(false)
        }
      })

      songInstance.on('load', function () {
        setSong(songInstance)
        setDuration(songInstance.duration())
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong])


  const handlePlay = () => {
    const interval = setInterval(() => {
      if (song?.playing()) {
        setSeekSliderValue(song.seek())
      } else {
        clearInterval(interval)
      }
    }, 1000)

    if (song) {
      if (song.playing()) {
        song.pause()
        setIsPlaying(false)
      } else {
        song.play()
        setIsPlaying(true)
      }
    }
  }

  const handleVolume = (e: ChangeEvent<HTMLInputElement>) => {
    if (song) {
      const volumeValue = Number(e.target.value)
      Howler.volume(volumeValue)
      setVolume(volumeValue)
    }
  }

  const handleSeekSlider = (e: ChangeEvent<HTMLInputElement>) => {
    if (song) {
      song.seek(Number(e.target.value))
    }
  }

  return {
    currentSong,
    songInstance: song,
    isPlaying,
    duration,
    seekSliderValue,
    volumeValue: volume,
    handlePlay,
    handleVolume,
    handleSeekSlider
  }

}