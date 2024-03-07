'use client'

import style from "@/app/ui/main/search.module.css"
import Image from "next/image"
import { searchSongs } from "@/app/lib/actions"
import { SearchSongsType } from "@/app/lib/definitions"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ChangeEvent, FocusEvent, useState } from "react"
import { useDebouncedCallback } from "use-debounce"
import { useRouter } from "next/navigation"

const Search = () => {
  const router = useRouter()

  const [filteredSongs, setFilteredSongs] = useState<SearchSongsType[] | null>()

  const handleSearch = useDebouncedCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    const data = await searchSongs(e.target.value)
    setFilteredSongs(data)
  }, 500)

  const handleNavigation = (id: string) => {
    setFilteredSongs(null)
    router.push(`/${id}`)
  }

  return (
    <div className={`${style.container}`}>
      <MagnifyingGlassIcon className={`${style.input_icon}`} />
      <input type="text" onChange={handleSearch} onFocus={(e) => e.target.value = ''} placeholder="Search" className={`${style.input}`} />
      <div className={`${style.search_songs_container}`}>
        {
          filteredSongs?.map((song) => (
            <div key={song.id} onClick={() => handleNavigation(song.id)} className={`${style.song_card}`}>
              <Image
                src={song.cover_img_sm}
                width={40}
                height={40}
                alt={`cover img of the song ${song.title}`}
                className={`${style.song_card_img}`}
              />
              <h2 className={`${style.title}`}>{song.title}</h2>
              <p className={`${style.artist}`}>{song.artist_name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Search