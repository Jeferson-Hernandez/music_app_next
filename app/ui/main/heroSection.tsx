import style from '@/app/ui/main/heroSection.module.css'
import Image from 'next/image'

import { most_liked_playlist } from '@/app/lib/constants'
import { fetchTopSongs } from '@/app/lib/data'
import TopChartCard from '../components/topChartCard'

const HeroSection = async() => {

  const top_charts = await fetchTopSongs()

  return (
    <section className={`${style.container}`}>
      <div className={`${style.new_song_container}`}>
        <Image
          src={most_liked_playlist.image}
          width={1000}
          height={1000}
          alt='Playlist'
          className={`${style.hero_image}`}
        />
        <div className={`${style.new_song_info}`}>
          <h2>{most_liked_playlist.title}</h2>
          <p>{most_liked_playlist.description}</p>
          <span>{most_liked_playlist.likes} likes</span>
        </div>
      </div>
      <div className={`${style.charts_container}`}>
        <h1 className={`${style.top_charts_text}`}>Top charts</h1>
        <div className={`${style.top_charts_container}`}>
          {
            top_charts.map((song) => (
              <TopChartCard key={song.id} song={song} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default HeroSection