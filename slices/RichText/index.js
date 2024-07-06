import React from "react"
import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"

const RichText = ({
  slice: {
    primary: { content, text_size },
    variation,
  },
}) => {
  const textSize = {
    Small: "text-sm",
    Medium: "text-md",
    Large: "text-lg",
  }

  return (
    <section
      className={`container ${styles.section} ${textSize[text_size]} ${
        variation === "narrowContent" && "narrow-container"
      }`}
    >
      <div className="flow">
        <PrismicRichText field={content} />
      </div>
    </section>
  )
}

export default RichText
