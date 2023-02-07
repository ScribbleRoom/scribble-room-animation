import { PrismicNextImage } from "@prismicio/next"
import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"
import { StartingQuote } from "../../../components/icons/StartingQuote"
import { EndingQuote } from "../../../components/icons/EndingQuote"

export const SingleTestimonial = (props) => (
  <section className={styles.section}>
    <blockquote className={`narrow-container ${styles.testimonial_container}`}>
      {props?.show_business_logo && (
        <div className={styles.business_logo}>
          <PrismicNextImage field={props?.testimonial?.data?.business_logo} />
        </div>
      )}

      <div className={styles.testimonial}>
        <span className={styles.quote}>
          <StartingQuote />
        </span>
        <div className="flow">
          <PrismicRichText field={props?.testimonial?.data?.testimonial} />
        </div>
        <span className={styles.quote}>
          <EndingQuote />
        </span>
      </div>

      <div>
        <div className={styles.author}>
          <PrismicRichText field={props?.testimonial?.data?.author} />
        </div>
        <div className={styles.author_business_position}>
          <PrismicRichText
            field={props?.testimonial?.data?.author_business_position}
          />
        </div>
      </div>
    </blockquote>
  </section>
)
