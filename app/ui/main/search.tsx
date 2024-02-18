import style from "@/app/ui/main/search.module.css"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Search = () => {
  return (
    <div className={`${style.container}`}>
      <MagnifyingGlassIcon className={`${style.input_icon}`}/>
      <input type="text" placeholder="Search" className={`${style.input}`} />
    </div>
  )
}

export default Search