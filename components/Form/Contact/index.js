import { useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "../Input"
import styles from "./styles.module.scss"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => setIsSubmitted(true))
      .catch((error) => console.log(error))
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
      method="POST"
      data-netlify="true"
      name="contact-form"
    >
      <input type="hidden" name="form-name" value="contact-form" />
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
      <Input
        name="message"
        label="Message"
        required
        type="textarea"
        register={register}
      />
      {isSubmitted ? (
        <p className={styles.submit_success_text}>
          Thank you for contacting us! We will get back to you shortly.
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
