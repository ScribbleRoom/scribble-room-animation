import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "./styles.module.scss"
import { PrismicNextImage } from "@prismicio/next"
import { Megamenu } from "./Megamenu"

export const Header = ({ slices, large_logo, small_logo, socials }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [showLogo, setShowLogo] = useState(true)

  const handleMenuState = () => {
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true)
  }

  useEffect(() => {
    if (window) {
      if (document.getElementById("video-hero-with-logo") && !menuIsOpen) {
        return setShowLogo(false)
      }

      setShowLogo(true)
    }
  }, [menuIsOpen])

  return (
    <header className={styles.container}>
      <div className={showLogo === false ? styles.hide_logo : null}>
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
      </div>

      <button
        className={`${styles.menu_button} ${menuIsOpen && styles.is_open}`}
        onClick={handleMenuState}
      >
        <div className={styles.burger_icon} />
        <div className={styles.burger_icon} />
      </button>

      <Megamenu menuIsOpen={menuIsOpen} slices={slices} socials={socials} />
    </header>
  )
}
