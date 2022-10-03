import { MotionImage } from "../MotionImage"
import styles from "./styles.module.scss"

export const TwoImages = ({ image_1, image_2 }) => (
  <section className="container">
    <div className={styles.images_container}>
      <MotionImage image={image_1} index={0} />
      <MotionImage image={image_2} index={1} />
    </div>
  </section>
)
