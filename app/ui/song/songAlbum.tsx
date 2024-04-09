import { fetchSongsByAlbum } from '@/app/lib/data'
import styles from '@/app/ui/song/songAlbum.module.css'
import { HeartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import AlbumSongOptions from '../components/albumSongOptions'

type SongAlbumProps = {
  albumId: string
}

const SongAlbum = async({ albumId }: SongAlbumProps) => {
  const data = await fetchSongsByAlbum(albumId)

  return (
    <div className={`${styles.content}`}>
      <h1>Album Songs</h1>
      {
        data.map((song) => (
          <div key={song.id} className={`${styles.song_container}`}>
            <Image
              src={song.cover_img_sm}
              height={45}
              width={45}
              alt={`cover img of the song ${song.title}`}
              className={`${styles.cover_img}`}
            />
            <HeartIcon className={`${styles.icon} ${styles.heart_icon}`} />
            <h2 className={`${styles.song_title}`}>{song.title} ~ {song.artist_name}</h2>
            <AlbumSongOptions song={song} />
          </div>
        ))
      }
    </div>
  )
}

export default SongAlbum