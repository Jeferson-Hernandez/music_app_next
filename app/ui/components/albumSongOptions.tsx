'use client'

import styles from '@/app/ui/components/albumSongOptions.module.css'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const AlbumSongOptions = () => {
  const [menuState, setMenuState] = useState(false)

  return (
    <>
      <EllipsisVerticalIcon onClick={() => setMenuState(!menuState)} className={`${styles.icon} ${styles.ellipsis_icon}`} />
      {
        menuState && (
          <div className={`${styles.menu_container}`}>
            <ul className={`${styles.menu}`}>
              <li className={`${styles.menu_item}`}>Add to queue</li>
            </ul>
          </div>
        )
      }
    </>
  )
}

export default AlbumSongOptions