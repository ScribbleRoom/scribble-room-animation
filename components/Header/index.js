import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "./styles.module.scss"
import { PrismicNextImage } from "@prismicio/next"
import { Megamenu } from "./Megamenu"

export const Header = ({ slices, large_logo, small_logo, socials }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [showLogo, setShowLogo] = useState(true)
  const [fixedMenu, setFixedMenu] = useState(false)

  const handleMenuState = () => {
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true)
  }

  useEffect(() => {
    if (window) {
      /* If there is a video hero slice present, it will turn the header into a fixed element that overlaps the video */
      if (document.getElementsByName("video-hero").length > 0) {
        setFixedMenu(true)
      }

      if (document.getElementById("video-hero-with-logo") && !menuIsOpen) {
        return setShowLogo(false)
      }

      setShowLogo(true)
    }
  }, [menuIsOpen])

  return (
    <header className={`${styles.container} ${fixedMenu && styles.fixed_menu}`}>
      <div className={showLogo === false ? styles.hide_logo : null}>
        <div className={styles.large_logo}>
          <Link href="/">
            <div>
              <PrismicNextImage field={large_logo} />
            </div>
          </Link>
        </div>
        <div className={styles.small_logo}>
          <Link href="/">
            <div>
              <PrismicNextImage field={small_logo} />
            </div>
          </Link>
        </div>
      </div>

      <button
        className={`${styles.menu_button} ${menuIsOpen && styles.is_open}`}
        onClick={handleMenuState}
        aria-label={menuIsOpen ? "close megamenu" : "open megamenu"}
      >
        <div className={styles.burger_icon} />
        <div className={styles.burger_icon} />
      </button>

      <Megamenu
        menuIsOpen={menuIsOpen}
        slices={slices}
        socials={socials}
        setMenuIsOpen={setMenuIsOpen}
      />
    </header>
  )
}
