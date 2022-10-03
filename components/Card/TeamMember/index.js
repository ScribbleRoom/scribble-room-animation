import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, PrismicRichText } from "@prismicio/react"
import { Linkedin } from "../../icons/Linkedin"
import { InstagramLogo } from "../../icons/InstagramLogo"
import styles from "./styles.module.scss"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { m } from "framer-motion"

export const TeamMemberCard = ({
  team_member_name,
  image,
  position,
  description,
  linkedin_link,
  instagram_link,
  index,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.2,
      },
    }),
  }

  return (
    <m.div
      ref={ref}
      variants={cardVariants}
      custom={index}
      initial="initial"
      animate={isInView && "animate"}
    >
      <div className={styles.image}>
        <PrismicNextImage field={image} />
      </div>
      <div className={styles.name}>
        <PrismicRichText field={team_member_name} />
      </div>
      <div className={styles.position}>
        <PrismicRichText field={position} />
      </div>
      <div className={styles.description}>
        <PrismicRichText field={description} />
      </div>
      {(instagram_link || linkedin_link) && (
        <div className={styles.social_icons}>
          {instagram_link && (
            <PrismicLink field={instagram_link}>
              <InstagramLogo />
            </PrismicLink>
          )}
          {linkedin_link && (
            <PrismicLink field={linkedin_link}>
              <Linkedin />
            </PrismicLink>
          )}
        </div>
      )}
    </m.div>
  )
}
