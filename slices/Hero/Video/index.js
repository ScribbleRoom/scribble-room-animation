import styles from "./styles.module.scss"
import Player from "@vimeo/player"
import { Fragment, useEffect } from "react"
import { PrismicNextImage } from "@prismicio/next"

export const Video = ({ show_logo, vimeo_video_id, logo, index }) => {
  useEffect(() => {
    if (window) {
      new Player(`vimeo-player-${index}`, {
        id: vimeo_video_id,
        background: true,
        responsive: true,
        color: "ef8000",
        keyboard: false,
      })
    }
  })

  return (
    <section
      className={styles.section}
      id={`video-hero${show_logo && "-with-logo"}`}
      name="video-hero"
    >
      <div className={styles.video_container}>
        {show_logo && (
          <Fragment>
            <div className={styles.logo_container}>
              <PrismicNextImage field={logo} />
            </div>
            <div className={styles.overlay} />
          </Fragment>
        )}
        <div id={`vimeo-player-${index}`} className={styles.video} />
      </div>
    </section>
  )
}
