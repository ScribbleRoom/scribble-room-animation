import { PrismicNextImage } from "@prismicio/next"
import { useInView } from "framer-motion"
import { useRef } from "react"
import styles from "./styles.module.scss"
import { m } from "framer-motion"

export const ThreeImages = ({ image_1, image_2, image_3 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: 0.3,
    once: true,
  })

  const imageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.25,
      },
    }),
  }

  return (
    <section className="container">
      <div className={styles.images_container} ref={ref}>
        <m.div
          className={styles.image}
          initial="initial"
          animate={isInView && "animate"}
          variants={imageVariants}
          custom={1}
        >
          <PrismicNextImage field={image_1} layout="fill" />
        </m.div>
        <m.div
          className={styles.image}
          initial="initial"
          animate={isInView && "animate"}
          variants={imageVariants}
          custom={2}
        >
          <PrismicNextImage field={image_2} layout="fill" />
        </m.div>
        <m.div
          className={styles.image}
          initial="initial"
          animate={isInView && "animate"}
          variants={imageVariants}
          custom={3}
        >
          <PrismicNextImage field={image_3} layout="fill" />
        </m.div>
      </div>
    </section>
  )
}
