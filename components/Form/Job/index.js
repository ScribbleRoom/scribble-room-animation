import styles from "./styles.module.scss"
import inputStyles from "../styles.module.scss"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"

export const JobApplicationForm = () => (
  <form
    className={styles.form}
    name="job-application"
    data-netlify="true"
    id="job-application"
    encType="multipart/form-data"
    method="POST"
  >
    <input type="hidden" name="form-name" value="job-application" />
    <div className={styles.flex_container}>
      <div>
        <label className={inputStyles.label} htmlFor="full_name">
          Full Name*
        </label>
        <input
          name="full_name"
          id="full_name"
          type="text"
          required
          className={inputStyles.input}
        />
      </div>
      <div>
        <label className={inputStyles.label} htmlFor="email">
          Email*
        </label>
        <input
          name="email"
          id="email"
          type="email"
          required
          autoComplete="email"
          className={inputStyles.input}
        />
      </div>
    </div>
    <div className={styles.flex_container}>
      <div>
        <label className={inputStyles.label} htmlFor="cv">
          Upload CV*
        </label>
        <input
          name="cv"
          id="cv"
          type="file"
          required
          className={inputStyles.input}
        />
      </div>
      <div>
        <label className={inputStyles.label} htmlFor="linkedin_url">
          LinkedIn URL
        </label>
        <input
          name="linkedin_url"
          id="linkedin_url"
          type="text"
          className={inputStyles.input}
        />
      </div>
    </div>

    <div className={styles.button_container}>
      <button className={`button primary ${styles.button}`}>
        Submit
        <PaperAirplaneIcon />
      </button>
    </div>
  </form>
)
