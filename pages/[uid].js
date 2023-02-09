import { SliceZone } from "@prismicio/react"
import * as prismicHelpers from "@prismicio/helpers"
import { createClient, linkResolver } from "../prismicio"
import { Layout } from "../components/Layout"
import { components } from "../slices"

const Page = ({ data, url, lang, ...layout }) => {
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

export async function getStaticPaths() {
  const client = createClient()
  const pages = await client.getAllByType("page")

  return {
    paths: pages.map((doc) => prismicHelpers.asLink(doc, linkResolver)),
    fallback: false,
  }
}

export async function getStaticProps({ params, previewData }) {
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

  const page = await client.getByUID("page", params.uid, { fetchLinks })
  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")
  const socials = await client.getSingle("socials")

  return {
    props: { header, footer, socials, ...page },
  }
}

export default Page
