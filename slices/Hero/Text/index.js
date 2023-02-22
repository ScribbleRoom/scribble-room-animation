import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"
import { m } from "framer-motion"

export const Text = ({ title, description }) => {
  const titleCharacters = title[0].text.split("")

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
    },
  }

  const characterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        type: "spring",
        stiffness: 250,
        opacity: { type: "tween" },
      },
    }),
  }

  return (
    <section className={`container ${styles.section}`}>
      <div>
        <m.h1
          className={styles.title}
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
          aria-label={title[0].text}
        >
          {titleCharacters.map((char, index) => (
            <m.span
              key={index}
              custom={index}
              variants={characterVariants}
              initial="hidden"
              animate="visible"
            >
              {char}
            </m.span>
          ))}
        </m.h1>
      </div>
      {description.length > 0 && (
        <div className={`${styles.description} flow`}>
          <PrismicRichText field={description} />
        </div>
      )}
    </section>
  )
}
