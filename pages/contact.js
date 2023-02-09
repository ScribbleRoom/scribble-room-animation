import { createClient } from "../prismicio"
import { Layout } from "../components/Layout"
import { ContactForm } from "../components/Form/Contact"
import { Map } from "../components/GoogleMap"
import styles from "../sass/pages/contact-page.module.scss"
import { PrismicRichText } from "@prismicio/react"
import { MotionImage } from "../slices/Images/MotionImage"
import { Fragment } from "react"
import { AtSymbolIcon } from "@heroicons/react/24/outline"
import { Faqs } from "../components/Accordion/Faqs"
import { m } from "framer-motion"

const Contact = ({ data, url, lang, ...layout }) => {
  const seo = {
    metaTitle: data?.metaTitle,
    metaDescription: data?.metaDescription,
    metaImage: data?.metaImage,
    url,
    article: false,
    lang,
  }

  const titleCharacters = data?.title[0].text.split("")

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
    },
  }

  const characterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        type: "spring",
        stiffness: 250,
        opacity: { type: "tween" },
      },
    }),
  }

  return (
    <Layout seo={seo} {...layout}>
      <section className={`container ${styles.section}`}>
        <div>
          <m.h1
            className={styles.title}
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
          >
            {titleCharacters.map((char, index) => (
              <m.span
                key={index}
                custom={index}
                variants={characterVariants}
                initial="hidden"
                animate="visible"
              >
                {char}
              </m.span>
            ))}
          </m.h1>
        </div>
        <div className={styles.flex_container}>
          <div>
            <MotionImage image={data?.contact_image} priority />
            <h2>Contact</h2>
            <div>
              {data?.contact_information.map(
                ({ contact_type, email_address }, index) => (
                  <Fragment key={index}>
                    <p className={styles.contact_type}>{contact_type}</p>
                    <p className={styles.email_address}>
                      <AtSymbolIcon />
                      <a href={`mailto:contact@scribbleroomanimation.com`}>
                        {email_address}
                      </a>
                    </p>
                  </Fragment>
                )
              )}
            </div>
          </div>
          <div>
            <MotionImage image={data?.address_image} priority />
            <h2>Address</h2>
            <div>
              <PrismicRichText field={data?.address_information} />
            </div>
          </div>
        </div>
      </section>
      <section className={`container ${styles.section}`}>
        <h2>Let&apos;s Get Things Started</h2>
        <p className={styles.contact_form_subtext}>
          If you&apos;d rather contact us directly, email us at{" "}
          <a href="mailto:contact@scribbleroomanimation.com">
            contact@scribbleroomanimation.com
          </a>
        </p>
        <ContactForm />
      </section>
      <section className={`container ${styles.section}`}>
        <h2 className={styles.google_map_heading}>Here&apos;s our Location</h2>
        <Map />
      </section>
      {data?.faqs.length > 0 && (
        <section className={`container ${styles.section}`}>
          <h2>Frequently Asked Questions</h2>
          <Faqs faqs={data?.faqs} />
        </section>
      )}
    </Layout>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle("contact")
  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")
  const socials = await client.getSingle("socials")

  return {
    props: { header, footer, socials, ...page },
  }
}

export default Contact
