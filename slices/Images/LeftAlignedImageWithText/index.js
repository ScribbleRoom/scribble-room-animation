import { PrismicRichText } from "@prismicio/react"
import { MotionImage } from "../MotionImage"
import styles from "./styles.module.scss"

export const LeftAlignedImageWithText = ({ image, text }) => (
  <section className={`${styles.section} container`}>
    <div className={styles.image_text_container}>
      <MotionImage image={image} index={0} />
      <div className="flow">
        <PrismicRichText field={text} />
      </div>
    </div>
  </section>
)
