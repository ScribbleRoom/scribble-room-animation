import { useRef } from "react"
import { m, useInView } from "framer-motion"
import { PrismicNextImage } from "@prismicio/next"
import styles from "./styles.module.scss"

export const MotionImage = ({ image, index, wideImage, priority }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: 0.5,
    once: true,
  })

  const imageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.25,
        opacity: { duration: 0.5 },
      },
    }),
  }

  return (
    <m.div
      className={wideImage ? styles.wide_image : styles.image}
      initial="initial"
      animate={isInView && "animate"}
      variants={imageVariants}
      ref={ref}
      custom={index}
    >
      <PrismicNextImage
        field={image}
        layout={!wideImage && "fill"}
        priority={priority}
      />
    </m.div>
  )
}
