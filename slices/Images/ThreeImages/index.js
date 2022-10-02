import { PrismicNextImage } from "@prismicio/next"
import styles from "./styles.module.scss"

export const ThreeImages = ({ image_1, image_2, image_3 }) => (
  <section className="container">
    <div className={styles.images_container}>
      <div className={styles.image}>
        <PrismicNextImage field={image_1} layout="fill" />
      </div>
      <div className={styles.image}>
        <PrismicNextImage field={image_2} layout="fill" />
      </div>
      <div className={styles.image}>
        <PrismicNextImage field={image_3} layout="fill" />
      </div>
    </div>
  </section>
)
