import Image from "next/image"
import styles from "./styles.module.scss"

export const Video = ({ show_logo, video, logo }) => {
  return (
    <section
      className={styles.section}
      id={`video-hero${show_logo && "-with-logo"}`}
    >
      <div className={styles.video_container}>
        <video autoPlay loop muted disablePictureInPicture src={video?.url} />
      </div>
      <div className={styles.logo_container}>
        <div className={styles.logo}>
          <Image src={logo.url} alt={logo.alt} layout="fill" />
        </div>
      </div>
    </section>
  )
}
