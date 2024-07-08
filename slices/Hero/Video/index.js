import styles from "./styles.module.scss"
import Player from "@vimeo/player"
import { Fragment, useEffect } from "react"
import { PrismicNextImage } from "@prismicio/next"

export const Video = ({
  full_screen,
  show_logo,
  logo_size,
  vimeo_video_id,
  logo,
  index,
}) => {
  useEffect(() => {
    if (window) {
      const player = new Player(`vimeo-player-${index}`, {
        id: vimeo_video_id,
        background: true,
        color: "ef8000",
        keyboard: false,
        dnt: true,
        quality: "auto",
      })

      return () => {
        player.destroy()
      }
    }
  })

  const scrollDown = () => {
    const nextSection = document.querySelector(`.video-hero + section`)

    if (nextSection) {
      nextSection.scrollIntoView()
    }
  }

  return (
    <section
      className={`video-hero ${show_logo && "video-hero--with-logo"} ${
        styles.section
      } ${full_screen && styles.full_screen}`}
    >
      <div className={styles.video_container}>
        {show_logo && (
          <Fragment>
            <div className={styles.logo_container}>
              <div className={`${styles.logo} ${styles[logo_size]}`}>
                <PrismicNextImage field={logo} objectFit="fill" />
              </div>
            </div>
            <div className={styles.overlay} />
          </Fragment>
        )}
        <div id={`vimeo-player-${index}`} className={styles.video} />
        {full_screen && (
          <button
            className={styles.scroll_down_button}
            onClick={() => scrollDown()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </button>
        )}
      </div>
    </section>
  )
}
