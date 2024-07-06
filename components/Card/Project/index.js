import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, PrismicText } from "@prismicio/react"
import { useInView, m } from "framer-motion"
import { useRef } from "react"
import styles from "./styles.module.scss"

export const ProjectCard = ({ link, title, image, index }) => {
  const cardElem = useRef(null)
  const isInView = useInView(cardElem)

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: () => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    }),
  }

  return (
    <m.li
      variants={cardVariants}
      ref={cardElem}
      custom={index}
      initial="initial"
      animate={isInView && "animate"}
      className={styles.card}
    >
      <PrismicLink document={link}>
        <div className={styles.content}>
          <div className={styles.overlay} />
          <h3 className={styles.title}>
            <PrismicText field={title} />
          </h3>
          <div className={styles.image}>
            <PrismicNextImage field={image} layout="fill" />
          </div>
        </div>
      </PrismicLink>
    </m.li>
  )
}
