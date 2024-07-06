import { PrismicNextImage } from "@prismicio/next"
import { PrismicRichText } from "@prismicio/react"
import { MotionImage } from "../MotionImage"
import styles from "./styles.module.scss"

export const NarrowImageWithText = ({ image, text, text_size }) => {
  const textSize = {
    Small: "text-sm",
    Medium: "text-md",
    Large: "text-lg",
  }

  return (
    <section className={`container ${styles.section} ${textSize[text_size]}`}>
      <div className={styles.flex_container}>
        <div className={styles.image}>
          <PrismicNextImage field={image} layout="fill" />
        </div>
        <div className={`${styles.text} flow`}>
          <PrismicRichText field={text} />
        </div>
      </div>
    </section>
  )
}
