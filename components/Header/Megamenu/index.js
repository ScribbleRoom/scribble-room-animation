import { Dialog } from "@headlessui/react"
import { SliceZone } from "@prismicio/react"
import { SocialLinks } from "../../SocialLinks"
import { components } from "../../../slices"
import styles from "./styles.module.scss"
import { AnimatePresence, m } from "framer-motion"

export const Megamenu = ({ setMenuIsOpen, menuIsOpen, slices, socials }) => {
  const dialogAnimations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  }

  const listAnimations = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <AnimatePresence>
      {menuIsOpen && (
        <Dialog
          open={menuIsOpen}
          onClose={() => {}}
          className={styles.dialog}
          as={m.div}
          {...dialogAnimations}
        >
          <div className={styles.scrollable_container}>
            <Dialog.Panel as={m.div} className={styles.dialog_panel}>
              <div className={styles.dialog_panel_contents}>
                <nav>
                  <m.ul className={styles.nav_list} {...listAnimations}>
                    <SliceZone
                      slices={slices}
                      components={components}
                      context={{ setMenuIsOpen: setMenuIsOpen }}
                    />
                  </m.ul>
                </nav>
                <div className={styles.social_links}>
                  <SocialLinks socials={socials} />
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
