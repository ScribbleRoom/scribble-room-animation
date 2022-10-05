import { createClient } from "../prismicio"
import { Layout } from "../components/Layout"
import { ContactForm } from "../components/Form/Contact"
import { GoogleMap } from "../components/GoogleMap"
import styles from "../sass/pages/contact-page.module.scss"

const Contact = ({ data, url, lang, ...layout }) => {
  const seo = {
    metaTitle: data?.metaTitle,
    metaDescription: data?.metaDescription,
    metaImage: data?.metaImage,
    url,
    article: false,
    lang,
  }

  console.log(data)

  return (
    <Layout seo={seo} {...layout}>
      <section></section>
      <section className={`container ${styles.section}`}>
        <ContactForm />
      </section>
      <section className={`container ${styles.section}`}>
        <h2 className={styles.google_map_heading}>Here&apos;s our Location</h2>
        <GoogleMap />
      </section>
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
    revalidate: 60,
  }
}

export default Contact
