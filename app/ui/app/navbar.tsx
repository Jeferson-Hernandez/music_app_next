import styles from '@/app/ui/app/navbar.module.css'
import { Bars2Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const Navbar = () => {
 return (
      <nav className={`${styles.content}`}>
        <div>
          <Image
            src="logo.svg"
            width={40}
            height={40}
            alt="App logo"
          />
        </div>
        <div>
          <Bars2Icon className={`${styles.iconSize}`} />
        </div>
      </nav>
 ) 
}

export default Navbar