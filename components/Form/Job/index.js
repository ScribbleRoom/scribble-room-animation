import { useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "../Input"
import styles from "./styles.module.scss"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"

export const JobApplicationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit } = useForm()

  const handleFormSubmission = async (data) => {
    fetch(`https://formcarry.com/s/6QX_HQ96ch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...data }),
    }).catch((error) => console.log(error))
  }

  const onSubmit = async (data) => {
    await handleFormSubmission(data)

    setIsSubmitted(true)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.flex_container}>
        <Input
          name="full_name"
          label="Full Name"
          type="text"
          autoComplete="name"
          required
          register={register}
        />
        <Input
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          required
          register={register}
        />
      </div>
      <div className={styles.flex_container}>
        <Input
          name="cv"
          label="Upload Your CV"
          type="file"
          required
          register={register}
        />
        <Input
          name="linkedin_url"
          label="LinkedIn Profile URL"
          type="text"
          register={register}
        />
      </div>
      {isSubmitted ? (
        <p className={styles.submit_success_text}>
          Thank you for submitting an job application form!
          <br />
          We will get back to you shortly.
        </p>
      ) : (
        <div className={styles.button_container}>
          <button className={`button primary ${styles.button}`}>
            Submit
            <PaperAirplaneIcon />
          </button>
        </div>
      )}
    </form>
  )
}
