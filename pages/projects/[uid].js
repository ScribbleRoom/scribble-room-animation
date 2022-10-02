import { PrismicRichText, SliceZone } from "@prismicio/react"
import * as prismicHelpers from "@prismicio/helpers"
import { createClient, linkResolver } from "../../prismicio"
import { Layout } from "../../components/Layout"
import { components } from "../../slices"
import styles from "../../sass/pages/project-page.module.scss"
import { CreditsAccordion } from "../../components/Accordion/Credits"
import { Video } from "../../slices/Hero/Video"
import { PrismicNextImage } from "@prismicio/next"

const Project = ({ data, url, lang, ...layout }) => {
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
      {data?.vimeo_video_id ? (
        <Video vimeo_video_id={data?.vimeo_video_id} />
      ) : (
        <div className={styles.project_image}>
          <PrismicNextImage field={data?.project_image} />
        </div>
      )}
      <section className={`container ${styles.section}`}>
        <div>
          <PrismicRichText field={data?.project_title} />
        </div>
        <div className={styles.director_and_client_container}>
          <div>
            <p className={styles.heading}>Director</p>
            <div>
              <PrismicRichText field={data?.director_name} />
            </div>
          </div>
          <div>
            <p className={styles.heading}>Client</p>
            <div>
              <PrismicRichText field={data?.client_name} />
            </div>
          </div>
        </div>
        <div className={styles.credits_accordion_container}>
          <CreditsAccordion credits={data?.credits_group} />
        </div>
        <div>
          <PrismicRichText field={data?.project_description} />
        </div>
      </section>
      <SliceZone slices={data?.slices} components={components} />
      <section>{/* TODO: Services & Deliverables */}</section>
      <section>{/* TODO: Related Projects */}</section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const client = createClient()
  const pages = await client.getAllByType("project")

  return {
    paths: pages.map((doc) => prismicHelpers.asLink(doc, linkResolver)),
    fallback: false,
  }
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID("project", params.uid, {
    fetchLinks: ["project.project_title", "project.project_image"],
  })
  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")
  const socials = await client.getSingle("socials")

  return {
    props: { header, footer, socials, ...page },
  }
}

export default Project
