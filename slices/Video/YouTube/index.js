import styles from "./styles.module.scss"

export const YouTube = ({ youtube_video_id }) => (
  <section className={`container ${styles.section}`}>
    <iframe
      className={styles.video}
      width="560"
      height="315"
      src={`https://www.youtube-nocookie.com/embed/${youtube_video_id}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      frameborder={0}
    ></iframe>
  </section>
)
