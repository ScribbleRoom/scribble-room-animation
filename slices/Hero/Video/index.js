import Image from "next/image"
import styles from "./styles.module.scss"

export const Video = ({ show_logo, video, logo }) => {
  return (
    <section
      className={styles.section}
      id={`video-hero${show_logo && "-with-logo"}`}
    >
      <div className={styles.video_container}></div>
    </section>
  )
}
