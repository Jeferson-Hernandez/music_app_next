import style from '@/app/[id]/page.module.css'
import Image from 'next/image'
import { fetchSongById } from '../lib/data'
import SongSection from '../ui/song/songSection'
import SongAlbum from '../ui/song/songAlbum'

type SongDetailProps = {
  params: {
    id: string
  }
}

const SongDetail = async({ params }: SongDetailProps) => {
  const data = await fetchSongById(params.id)
  return (
    <div className={`${style.container}`}>
      <Image
        src={data.cover_img_lg}
        width={1500}
        height={1500}
        alt='test'
        className={`${style.fixed} ${style.opacity}`}
      />
      <SongSection song={data} />
      <SongAlbum albumId={data.album_id} />
    </div>
  )
}

export default SongDetail