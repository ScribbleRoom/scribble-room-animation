import { PrismicNextImage } from "@prismicio/next"
import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"
import { StartingQuote } from "../../../components/icons/StartingQuote"
import { EndingQuote } from "../../../components/icons/EndingQuote"

export const SingleTestimonial = (props) => {
  const { business_logo, testimonial, author, author_business_position } =
    props.testimonial.data

  return (
    <section className={styles.section}>
      <blockquote
        className={`narrow-container ${styles.testimonial_container}`}
      >
        {props.show_business_logo && (
          <div className={styles.business_logo}>
            <PrismicNextImage field={business_logo} />
          </div>
        )}

        <div className={styles.testimonial}>
          <span className={styles.quote}>
            <StartingQuote />
          </span>
          <PrismicRichText field={testimonial} />
          <span className={styles.quote}>
            <EndingQuote />
          </span>
        </div>

        <div>
          <div className={styles.author}>
            <PrismicRichText field={author} />
          </div>
          <div className={styles.author_business_position}>
            <PrismicRichText field={author_business_position} />
          </div>
        </div>
      </blockquote>
    </section>
  )
}
