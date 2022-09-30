import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"

export const Text = ({ title, description }) => (
  <section className={`container ${styles.section}`}>
    <div className={styles.title}>
      <PrismicRichText field={title} />
    </div>
    <div className={styles.description}>
      <PrismicRichText field={description} />
    </div>
  </section>
)
