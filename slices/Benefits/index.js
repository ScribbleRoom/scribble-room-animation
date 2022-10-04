import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"

const Benefits = ({
  slice: {
    primary: { title },
    items,
  },
}) => (
  <section className={`container ${styles.section}`}>
    <div className={styles.title}>
      <PrismicRichText field={title} />
    </div>
    <ul className={styles.list}>
      {items.map(({ benefit_title, benefit_description }, index) => (
        <li key={index} className={styles.list_item}>
          <div className={styles.index}>
            <p>0{index + 1}.</p>
          </div>
          <div>
            <div className={styles.benefit_title}>
              <PrismicRichText field={benefit_title} />
            </div>
            <div className={styles.benefit_description}>
              <PrismicRichText field={benefit_description} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  </section>
)

export default Benefits
