import styles from '@/app/ui/app/sidenav.module.css'
import { HomeIcon, UserIcon, ArchiveBoxIcon, ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const SideNav = () => {
  return (
    <>
      <nav className={`${styles.content}`}>
          <Image
            src="logo.svg"
            width={40}
            height={40}
            alt="App logo"
          />
          <div>
            <ul className={`${styles.menu_content} ${styles.menu_icons}`}>
              <li><HomeIcon className={`${styles.filter_secondary} ${styles.icon_size}`}/></li>
              <li><ArchiveBoxIcon className={`${styles.filter_secondary} ${styles.icon_size}`}/></li>
            </ul>
          </div>
          <div>
            <ul className={`${styles.menu_content} ${styles.menu_icons}`}>
              <li><UserIcon className={`${styles.filter_secondary} ${styles.icon_size}`}/></li>
              <li><ArrowLeftEndOnRectangleIcon className={`${styles.filter_secondary} ${styles.icon_size}`}/></li>
            </ul>
          </div>
      </nav>
    </>
  )
}

export default SideNav