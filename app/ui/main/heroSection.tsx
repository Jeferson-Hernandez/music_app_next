import style from '@/app/ui/main/heroSection.module.css'
import Image from 'next/image'

import { most_liked_playlist } from '@/app/lib/constants'
import { top_charts } from '@/app/lib/constants'
import { HeartIcon } from '@heroicons/react/24/outline'

const HeroSection = () => {
  return (
    <section className={`${style.container}`}>
      <div className={`${style.new_song_container}`}>
        <Image
          src={most_liked_playlist.image}
          width={300}
          height={300}
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
              <div key={song.id} className={`${style.song_card}`}>
                <Image
                  src={song.coverImg}
                  width={120}
                  height={120}
                  alt={`cover of the song ${song.title}`}
                  className={`${style.song_card_image}`}
                />
                <div className={`${style.song_card_info}`}>
                  <h3 className={`${style.song_card_title}`}>{song.title}</h3>
                  <p className={`${style.song_card_artist}`}>{song.artist}</p>
                  <span className={`${style.song_card_length}`}>{song.length}</span>
                </div>
                <HeartIcon className={`${style.song_card_heart_icon}`} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default HeroSection