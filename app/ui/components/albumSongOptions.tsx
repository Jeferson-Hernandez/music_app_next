'use client'

import { SongByAlbumType } from '@/app/lib/definitions'
import { useSongStore } from '@/app/lib/store'
import styles from '@/app/ui/components/albumSongOptions.module.css'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

type AlbumSongOptionsProps = {
  song: SongByAlbumType
}

const AlbumSongOptions = ({ song }: AlbumSongOptionsProps) => {
  const [menuState, setMenuState] = useState(false)
  const { addSongQueue } = useSongStore()

  const handleAddSongQueue = () => {
    addSongQueue(song)
    setMenuState(false)
  }

  return (
    <>
      <EllipsisVerticalIcon onClick={() => setMenuState(!menuState)} className={`${styles.icon} ${styles.ellipsis_icon}`} />
      {
        menuState && (
          <div className={`${styles.menu_container}`}>
            <ul className={`${styles.menu}`}>
              <li onClick={ handleAddSongQueue } className={`${styles.menu_item}`}>Add to queue</li>
            </ul>
          </div>
        )
      }
    </>
  )
}

export default AlbumSongOptions