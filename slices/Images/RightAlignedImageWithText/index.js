import { PrismicRichText } from "@prismicio/react"
import { MotionImage } from "../MotionImage"
import styles from "./styles.module.scss"

export const RightAlignedImageWithText = ({ image, text, text_size }) => {
  const textSize = {
    Small: "text-sm",
    Medium: "text-md",
    Large: "text-lg",
  }

  return (
    <section className={`${styles.section} container ${textSize[text_size]}`}>
      <div className={styles.image_text_container}>
        <div className="flow">
          <PrismicRichText field={text} />
        </div>
        <MotionImage image={image} index={0} />
      </div>
    </section>
  )
}
