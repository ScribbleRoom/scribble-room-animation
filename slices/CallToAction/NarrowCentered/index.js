import { PrismicLink, PrismicRichText } from "@prismicio/react"
import { ButtonIcon } from "../../../components/ButtonIcon"
import styles from "./styles.module.scss"

export const NarrowCentered = ({
  title,
  description,
  buttonIcon,
  link,
  linkText,
  text_size,
}) => {
  const textSize = {
    Small: "text-sm",
    Medium: "text-md",
    Large: "text-lg",
  }

  return (
    <section
      className={`narrow-container ${styles.section} ${textSize[text_size]}`}
    >
      <div className={styles.title}>
        <PrismicRichText field={title} />
      </div>
      <div className={`${styles.description} flow`}>
        <PrismicRichText field={description} />
      </div>
      {link?.id && (
        <div className={styles.button}>
          <PrismicLink field={link} className="button primary">
            {linkText}
            <ButtonIcon iconType={buttonIcon} />
          </PrismicLink>
        </div>
      )}
    </section>
  )
}
