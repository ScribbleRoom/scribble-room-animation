import styles from "./styles.module.scss"
import { MotionImage } from "../MotionImage"

export const OneWideImage = ({ image }) => (
  <section className={`container ${styles.section}`}>
    <MotionImage index={0} image={image} wideImage />
  </section>
)
