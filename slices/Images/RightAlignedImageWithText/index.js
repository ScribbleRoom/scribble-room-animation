import { PrismicRichText } from "@prismicio/react"
import { MotionImage } from "../MotionImage"
import styles from "./styles.module.scss"

export const RightAlignedImageWithText = ({ image, text }) => (
  <section className={`${styles.section} container`}>
    <div className={styles.image_text_container}>
      <div className="flow">
        <PrismicRichText field={text} />
      </div>
      <MotionImage image={image} index={0} />
    </div>
  </section>
)
