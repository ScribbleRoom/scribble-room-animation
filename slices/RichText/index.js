import React from "react"
import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"

const RichText = ({
  slice: {
    primary: { content },
    variation,
  },
}) => (
  <section
    className={`container ${styles.section}
      ${variation === "narrowContent" && "narrow-container"}`}
  >
    <div className="flow">
      <PrismicRichText field={content} />
    </div>
  </section>
)

export default RichText
