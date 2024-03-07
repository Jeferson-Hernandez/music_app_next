import style from "@/app/collections/page.module.css"
import { fetchLikedSongs } from "../lib/data"
import CollectionSongCard from "../ui/collections/collectionSongCard"

const Collection = async() => {
  const data = await fetchLikedSongs()
  return (
    <div className={`${style.content}`}>
      {
        data.map((song) => (
          <CollectionSongCard key={song.id} song={song} />
        ))
      }
    </div>
  )
}

export default Collection
