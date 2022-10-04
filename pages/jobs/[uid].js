import * as prismicHelpers from "@prismicio/helpers"
import { createClient, linkResolver } from "../../prismicio"
import { Layout } from "../../components/Layout"

const Job = ({ data, url, lang, ...layout }) => {
  const seo = {
    metaTitle: data?.metaTitle,
    metaDescription: data?.metaDescription,
    metaImage: data?.metaImage,
    url,
    article: false,
    lang,
  }

  return <Layout seo={seo} {...layout}></Layout>
}

export async function getStaticPaths() {
  const client = createClient()
  const pages = await client.getAllByType("job")

  return {
    paths: pages.map((doc) => prismicHelpers.asLink(doc, linkResolver)),
    fallback: false,
  }
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID("job", params.uid)
  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")
  const socials = await client.getSingle("socials")

  return {
    props: { header, footer, socials, ...page },
    revalidate: 60,
  }
}

export default Job
