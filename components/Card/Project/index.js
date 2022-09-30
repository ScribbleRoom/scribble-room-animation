import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, PrismicText } from "@prismicio/react"
import styles from "./styles.module.scss"

export const ProjectCard = ({ link, title, image }) => (
  <PrismicLink document={link} className={styles.card}>
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
)
