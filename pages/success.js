import Link from "next/link"
import { Layout } from "../components/Layout"
import styles from "../sass/pages/success.module.scss"
import { createClient } from "../prismicio"
import Head from "next/head"

const Success = ({ lang, ...layout }) => {
  const seo = {
    metaTitle: "Success",
    metaDescription: "Thank you for submitting your job application",
    metaImage: null,
    url: "/404",
    article: false,
    lang,
  }

  return (
    <Layout seo={seo} {...layout}>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <section className={`container ${styles.section}`}>
        <h1 className={styles.title}>Success</h1>
        <p className={styles.description}>
          Thank you for submitting your job application! We will get back to you
          shortly.
        </p>
        <div className={`${styles.link} button primary`}>
          <Link href="/">Return to the homepage</Link>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")
  const socials = await client.getSingle("socials")

  return {
    props: { header, footer, socials },
  }
}

export default Success
