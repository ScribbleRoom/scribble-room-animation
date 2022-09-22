import { useState } from "react"
import Link from "next/link"
import styles from "./styles.module.scss"
import { PrismicNextImage } from "@prismicio/next"
import { Megamenu } from "./Megamenu"

export const Header = ({ slices, large_logo, small_logo, socials }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const closeMenu = () => {
    setMenuIsOpen(false)
  }

  const openMenu = () => {
    setMenuIsOpen(true)
  }

  return (
    <header className={styles.container}>
      <div className={styles.large_logo}>
        <Link href="/">
          <PrismicNextImage field={large_logo} />
        </Link>
      </div>
      <div className={styles.small_logo}>
        <Link href="/">
          <PrismicNextImage field={small_logo} />
        </Link>
      </div>

      <button
        className={`${styles.menu_button} ${menuIsOpen && styles.is_open}`}
        onClick={menuIsOpen ? closeMenu : openMenu}
      >
        <div className={styles.burger_icon} />
        <div className={styles.burger_icon} />
      </button>

      {menuIsOpen && (
        <Megamenu menuIsOpen={menuIsOpen} slices={slices} socials={socials} />
      )}
    </header>
  )
}
