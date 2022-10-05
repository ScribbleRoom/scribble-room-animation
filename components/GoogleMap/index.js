import styles from "./styles.module.scss"

export const GoogleMap = () => (
  <iframe
    className={styles.map}
    loading="lazy"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCFayxv1j7RgE6ThoxFXw7nR4fJZvVP6B8
    &q=Scribble+Room+Animation&zoom=17"
  ></iframe>
)
