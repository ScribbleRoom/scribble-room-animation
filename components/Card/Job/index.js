import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react"
import {
  ClockIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline"
import styles from "./styles.module.scss"

export const JobCard = ({
  title,
  description,
  location,
  employment_type,
  link,
}) => (
  <PrismicLink document={link} className={styles.link}>
    <div className={styles.container}>
      <p className={styles.title}>
        <PrismicText field={title} />
      </p>
      <div className={styles.flex_container}>
        <div className={styles.icon_and_text}>
          <ClockIcon />
          <p>{employment_type}</p>
        </div>
        <div className={styles.icon_and_text}>
          <MapPinIcon />
          <PrismicRichText field={location} />
        </div>
      </div>
      <div>
        <PrismicRichText field={description} />
      </div>
      <div className={styles.apply}>
        Apply
        <ArrowRightIcon />
      </div>
    </div>
  </PrismicLink>
)
