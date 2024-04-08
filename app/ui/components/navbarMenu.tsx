import styles from '@/app/ui/components/navbarMenu.module.css'
import { HomeIcon, ArchiveBoxIcon, ArrowLeftEndOnRectangleIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'

type NavbarMenuProps = {
  menuState: Boolean,
  handleMenu: () => void
}

const NavbarMenu = ({ menuState, handleMenu }: NavbarMenuProps) => {
  const router = useRouter()

  if (!menuState) {
    return
  }

  return (
    <div className={`${styles.container}`}>
      <XMarkIcon onClick={handleMenu} className={` ${styles.close_icon}`} />
      <ul className={`${styles.menu}`}>
        <li onClick={() => (
          handleMenu(),
          router.push('/')
        )} className={`${styles.menu_link}`}>
          <HomeIcon className={`${styles.filter_secondary} ${styles.icon_size}`} />
          <p> Home</p>
        </li>
        <li onClick={() => (
          handleMenu(),
          router.push('/collections')
        )} className={`${styles.menu_link}`}>
          <ArchiveBoxIcon className={`${styles.filter_secondary} ${styles.icon_size}`} />
          <p>Collection</p>
        </li>
        <li className={`${styles.menu_link}`}>
          <UserIcon className={`${styles.filter_secondary} ${styles.icon_size}`} />
          <p>Profile</p>
        </li>
        <li className={`${styles.menu_link}`}>
          <ArrowLeftEndOnRectangleIcon className={`${styles.filter_secondary} ${styles.icon_size}`} />
          <p>Log out</p>
        </li>
      </ul>
    </div>
  )
}

export default NavbarMenu