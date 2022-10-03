import { PrismicNextImage } from "@prismicio/next"
import { PrismicRichText } from "@prismicio/react"
import { m, useInView } from "framer-motion"
import { useRef } from "react"
import styles from "./styles.module.scss"

export const RightAlignedImageWithText = ({ image, text }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: 0.3,
    once: true,
  })

  const imageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className={`${styles.section} container`}>
      <div className={styles.image_text_container}>
        <div>
          <PrismicRichText field={text} />
        </div>
        <m.div
          className={styles.image}
          initial="initial"
          animate={isInView && "animate"}
          variants={imageVariants}
          ref={ref}
        >
          <PrismicNextImage field={image} layout="fill" />
        </m.div>
      </div>
    </section>
  )
}
