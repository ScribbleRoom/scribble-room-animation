import { useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "../Input"
import styles from "./styles.module.scss"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit } = useForm()

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }

  const handleFormSubmission = async (data) => {
    console.log(data)

    console.log(data)

    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...data,
      }),
    })
      .then()
      .catch((error) => console.log(error))
  }

  const onSubmit = async (data) => {
    await handleFormSubmission(data)

    setIsSubmitted(true)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
      name="contact"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
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
          <button type="submit" className={`button primary ${styles.button}`}>
            Submit
            <PaperAirplaneIcon />
          </button>
        </div>
      )}
    </form>
  )
}
