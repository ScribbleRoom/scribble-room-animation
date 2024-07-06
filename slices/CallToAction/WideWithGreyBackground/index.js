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
  text_size,
}) => {
  const textSize = {
    Small: "text-sm",
    Medium: "text-md",
    Large: "text-lg",
  }

  return (
    <section className={`${styles.section} ${textSize[text_size]}`}>
      <div className="container">
        <div className={styles.title}>
          <PrismicRichText field={title} />
        </div>
        <div className={`${styles.description} flow`}>
          <PrismicRichText field={description} />
        </div>
        {(primaryLink?.id || secondaryLink?.id) && (
          <div className={styles.buttons}>
            {primaryLink?.id && (
              <PrismicLink field={primaryLink} className="button primary">
                {primaryLinkText}
                <ButtonIcon iconType={primaryLinkIcon} />
              </PrismicLink>
            )}
            {secondaryLink?.id && (
              <PrismicLink field={secondaryLink} className="button secondary">
                {secondaryLinkText}
                <ButtonIcon iconType={secondaryLinkIcon} />
              </PrismicLink>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
