import { ChangeEvent, useEffect, useState } from "react";
import { useSongStore } from "../store";
import { Howl, Howler } from 'howler'

export const usePlayer = () => {
  const { currentSong, nextSong, prevSong } = useSongStore();
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
        autoplay: true,
        onend: function () {
          setIsPlaying(false)
          nextSong()
        }
      })

      songInstance.on('load', function () {
        setSong(songInstance)
        setDuration(songInstance.duration())
        setIsPlaying(true)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong])

  useEffect(() => {
    const interval = setInterval(() => {
      if (song?.playing()) {
        setSeekSliderValue(song.seek())
      } else {
        clearInterval(interval)
      }
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying])


  const handlePlay = () => {
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
      setSeekSliderValue(song.seek())
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
    handleSeekSlider,
    nextSong,
    prevSong
  }

}