import { createClient } from "../../prismicio"
import { Layout } from "../../components/Layout"

const Jobs = ({ data, url, lang, jobs, ...layout }) => {
  const seo = {
    metaTitle: data?.metaTitle,
    metaDescription: data?.metaDescription,
    metaImage: data?.metaImage,
    url,
    article: false,
    lang,
  }

  console.log(jobs)

  return (
    <Layout seo={seo} {...layout}>
      <section></section>
    </Layout>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const fetchLinks = [
    "job.job_title",
    "job.short_description",
    "job.employment_type",
    "job.location",
  ]

  const page = await client.getSingle("jobs")
  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")
  const socials = await client.getSingle("socials")
  const jobs = await client.getAllByType("project", {
    fetchLinks,
  })

  return {
    props: { header, footer, socials, jobs, ...page },
    revalidate: 60,
  }
}

export default Jobs
