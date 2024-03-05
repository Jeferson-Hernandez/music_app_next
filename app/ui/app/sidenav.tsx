'use client'

import styles from '@/app/ui/app/sidenav.module.css'
import { HomeIcon, UserIcon, ArchiveBoxIcon, ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SideNav = () => {
  const router = useRouter()
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
              <li><HomeIcon onClick={() => router.push('/')} className={`${styles.filter_secondary} ${styles.icon_size}`}/></li>
              <li><ArchiveBoxIcon onClick={() => router.push('/collections')} className={`${styles.filter_secondary} ${styles.icon_size}`}/></li>
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