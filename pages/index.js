import { SliceZone } from "@prismicio/react"
import { createClient } from "../prismicio"
import { Layout } from "../components/Layout"
import { components } from "../slices"

const Homepage = ({ data, url, lang, ...layout }) => {
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
    "team_member.image",
    "team_member.name",
    "team_member.position",
    "team_member.short_description",
    "team_member.instagram_link",
    "team_member.linkedin_link",
  ]

  const page = await client.getSingle("homepage", { fetchLinks })
  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")
  const socials = await client.getSingle("socials")

  return {
    props: { header, footer, socials, ...page },
    revalidate: 60,
  }
}

export default Homepage
