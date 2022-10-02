import { useRef } from "react"
import { PrismicNextImage } from "@prismicio/next"
import styles from "./styles.module.scss"
import { m, useInView } from "framer-motion"

export const OneWideImage = ({ image }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })

  const imageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className={`container ${styles.section}`}>
      <m.div
        className={styles.image}
        ref={ref}
        initial="initial"
        animate={isInView && "animate"}
        variants={imageVariants}
      >
        <PrismicNextImage as={m.img} field={image} />
      </m.div>
    </section>
  )
}
