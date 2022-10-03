import styles from "./styles.module.scss"
import { MotionImage } from "../MotionImage"

export const ThreeImages = ({ image_1, image_2, image_3 }) => (
  <section className="container">
    <div className={styles.images_container}>
      <MotionImage index={0} image={image_1} />
      <MotionImage index={1} image={image_2} />
      <MotionImage index={2} image={image_3} />
    </div>
  </section>
)
