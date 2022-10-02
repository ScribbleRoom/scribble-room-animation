import { PrismicNextImage } from "@prismicio/next"
import styles from "./styles.module.scss"

export const OneWideImage = ({ image }) => (
  <section className={`container ${styles.section}`}>
    <div className={styles.image}>
      <PrismicNextImage field={image} />
    </div>
  </section>
)
