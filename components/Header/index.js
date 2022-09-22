import { useState } from "react"
import Link from "next/link"
import { SliceZone } from "@prismicio/react"
import { components } from "../../slices"
import styles from "./styles.module.scss"
import { Dialog } from "@headlessui/react"
import { PrismicNextImage } from "@prismicio/next"
import { motion } from "framer-motion"
import { SocialLinks } from "../SocialLinks"

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
        <Dialog open={menuIsOpen} onClose={() => {}} className={styles.dialog}>
          <div className={styles.scrollable_container}>
            <Dialog.Panel className={styles.dialog_panel}>
              <div className={styles.dialog_panel_contents}>
                <nav>
                  <ul className={styles.nav_list}>
                    <SliceZone slices={slices} components={components} />
                  </ul>
                </nav>
                <div className={styles.social_links}>
                  <SocialLinks socials={socials} />
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </header>
  )
}
