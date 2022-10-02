import { PrismicNextImage } from "@prismicio/next"
import styles from "./styles.module.scss"

export const TwoImages = ({ image_1, image_2 }) => (
  <section className="container">
    <div className={styles.images_container}>
      <div className={styles.image}>
        <PrismicNextImage field={image_1} layout="fill" />
      </div>
      <div className={styles.image}>
        <PrismicNextImage field={image_2} layout="fill" />
      </div>
    </div>
  </section>
)
