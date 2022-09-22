import { Dialog } from "@headlessui/react"
import { SliceZone } from "@prismicio/react"
import { SocialLinks } from "../../SocialLinks"
import { components } from "../../../slices"
import styles from "./styles.module.scss"

export const Megamenu = ({ menuIsOpen, slices, socials }) => (
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
)
