import { fetchSongsByAlbum } from '@/app/lib/data'
import style from '@/app/ui/song/songAlbum.module.css'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

type SongAlbumProps = {
  songId: string,
  albumId: string
}

const SongAlbum = async({ songId, albumId }: SongAlbumProps) => {
  const data = await fetchSongsByAlbum(songId, albumId)

  if (data.length == 0) {
    <div>no data</div>
  }

  return (
    <div className={`${style.content}`}>
      <h1>Album Songs</h1>
      {
        data.map((song) => (
          <div key={song.id} className={`${style.song_container}`}>
            <Image
              src={song.cover_img_sm}
              height={45}
              width={45}
              alt={`cover img of the song ${song.title}`}
              className={`${style.cover_img}`}
            />
            <HeartIcon className={`${style.icon} ${style.heart_icon}`} />
            <h2 className={`${style.song_title}`}>{song.title} ~ {song.artist_name}</h2>
            <EllipsisVerticalIcon className={`${style.icon} ${style.ellipsis_icon}`} />
          </div>
        ))
      }
    </div>
  )
}

export default SongAlbum