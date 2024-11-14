import { PrismicNextImage } from "@prismicio/next"
import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"

export const NarrowImageWithText = ({
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
    <section className={`container ${styles.section} ${textSize[text_size]}`}>
      <div
        className={`${styles.flex_container} ${
          styles[textAlignment[text_alignment]]
        }`}
      >
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
