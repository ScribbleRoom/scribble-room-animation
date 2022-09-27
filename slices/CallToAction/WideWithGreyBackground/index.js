import { PrismicLink, PrismicRichText } from "@prismicio/react"
import { ButtonIcon } from "../../../components/ButtonIcon"
import styles from "./styles.module.scss"

export const WideWithGreyBackground = ({
  title,
  description,
  primaryLink,
  primaryLinkText,
  primaryLinkIcon,
  secondaryLink,
  secondaryLinkText,
  secondaryLinkIcon,
}) => (
  <section className={styles.section}>
    <div className="container">
      <div className={styles.title}>
        <PrismicRichText field={title} />
      </div>
      <div className={styles.description}>
        <PrismicRichText field={description} />
      </div>
      <div className={styles.buttons}>
        <PrismicLink field={primaryLink} className="button primary">
          {primaryLinkText}
          <ButtonIcon iconType={primaryLinkIcon} />
        </PrismicLink>
        <PrismicLink field={secondaryLink} className="button secondary">
          {secondaryLinkText}
          <ButtonIcon iconType={secondaryLinkIcon} />
        </PrismicLink>
      </div>
    </div>
  </section>
)
