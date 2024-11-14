import { PrismicRichText } from "@prismicio/react"
import { MotionImage } from "../MotionImage"
import styles from "./styles.module.scss"

export const RightAlignedImageWithText = ({
  image,
  text,
  text_size,
  text_alignment,
}) => {
  const textSize = {
    Small: "text-sm",
    Medium: "text-md",
    Large: "text-lg",
  }

  const textAlignment = {
    Top: "text-top",
    Middle: "text-middle",
    Bottom: "text-bottom",
  }

  return (
    <section className={`${styles.section} container ${textSize[text_size]}`}>
      <div
        className={`${styles.image_text_container} ${
          styles[textAlignment[text_alignment]]
        }`}
      >
        <div className="flow">
          <PrismicRichText field={text} />
        </div>
        <MotionImage image={image} index={0} />
      </div>
    </section>
  )
}
