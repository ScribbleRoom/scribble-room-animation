import { SliceZone } from "@prismicio/react"
import { createClient } from "../../prismicio"
import { Layout } from "../../components/Layout"
import { components } from "../../slices"

const Projects = ({ data, url, lang, projects, ...layout }) => {
  const seo = {
    metaTitle: data?.metaTitle,
    metaDescription: data?.metaDescription,
    metaImage: data?.metaImage,
    url,
    article: false,
    lang,
  }

  return (
    <Layout seo={seo} {...layout}>
      <SliceZone slices={data?.slices} components={components} />
    </Layout>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const fetchLinks = [
    "testimonial.business_logo",
    "testimonial.testimonial",
    "testimonial.author",
    "testimonial.author_business_position",
    "project.project_title",
    "project.project_image",
  ]

  const page = await client.getSingle("projects", { fetchLinks })
  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")
  const socials = await client.getSingle("socials")
  const projects = await client.getAllByType("project", {
    fetchLinks: ["project.project_title", "project.project_image"],
  })

  return {
    props: { header, footer, socials, projects, ...page },
  }
}

export default Projects
