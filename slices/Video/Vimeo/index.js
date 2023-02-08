import styles from "./styles.module.scss"
import Player from "@vimeo/player"
import { useEffect } from "react"

export const Vimeo = ({ vimeo_video_id, index }) => {
  useEffect(() => {
    if (window) {
      new Player(`vimeo-player-${index}`, {
        id: vimeo_video_id,
        responsive: true,
        color: "ef8000",
        dnt: true,
        controls: true,
      })
    }
  })

  return (
    <section className={`container ${styles.section}`}>
      <div id={`vimeo-player-${index}`} className={styles.video} />
    </section>
  )
}
