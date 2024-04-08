'use client'

import styles from '@/app/ui/app/navbar.module.css'
import { Bars2Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useState } from 'react'
import NavbarMenu from '../components/navbarMenu'

const Navbar = () => {

  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

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
      <div onClick={handleMenu}>
        <Bars2Icon className={`${styles.icon_size}`} />
      </div>
      <NavbarMenu menuState={menu} handleMenu={handleMenu} />
    </nav>
  )
}

export default Navbar