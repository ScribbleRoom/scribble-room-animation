import Head from "next/head"
import Link from "next/link"
import { Layout } from "../components/Layout"
import { createClient } from "../prismicio"
import styles from "../sass/pages/404-page.module.scss"

const Custom404 = ({ lang, ...layout }) => {
  const seo = {
    metaTitle: "404 - Page not found",
    metaDescription:
      "The page you were looking for unfortunately does not exist",
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
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.description}>
          The page you were looking for unfortunately does not exist.
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

export default Custom404
