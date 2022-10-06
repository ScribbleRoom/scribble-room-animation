import { PrismicLink, PrismicRichText } from "@prismicio/react"
import { ButtonIcon } from "../../../components/ButtonIcon"
import styles from "./styles.module.scss"

export const NarrowCentered = ({
  title,
  description,
  buttonIcon,
  link,
  linkText,
}) => (
  <section className={`narrow-container ${styles.section}`}>
    <div className={styles.title}>
      <PrismicRichText field={title} />
    </div>
    <div className={`${styles.description} flow`}>
      <PrismicRichText field={description} />
    </div>
    <div className={styles.button}>
      <PrismicLink field={link} className="button primary">
        {linkText}
        <ButtonIcon iconType={buttonIcon} />
      </PrismicLink>
    </div>
  </section>
)
