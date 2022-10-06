import { PrismicRichText, SliceZone } from "@prismicio/react"
import * as prismicHelpers from "@prismicio/helpers"
import { createClient, linkResolver } from "../../prismicio"
import { Layout } from "../../components/Layout"
import { components } from "../../slices"
import styles from "../../sass/pages/project-page.module.scss"
import { CreditsAccordion } from "../../components/Accordion/Credits"
import { Video } from "../../slices/Hero/Video"
import { PrismicNextImage } from "@prismicio/next"
import { ProjectCard } from "../../components/Card/Project"

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
        <div className="flow">
          <PrismicRichText field={data?.project_description} />
        </div>
      </section>
      <SliceZone slices={data?.slices3} components={components} />
      {(data?.services || data?.deliverables) && (
        <section className={`container ${styles.services_and_deliverables}`}>
          {data?.services && (
            <div>
              <h2>Services</h2>
              <div className="flow">
                <PrismicRichText field={data?.services} />
              </div>
            </div>
          )}
          {data?.deliverables && (
            <div>
              <h2>Deliverables</h2>
              <div className="flow">
                <PrismicRichText field={data?.deliverables} />
              </div>
            </div>
          )}
        </section>
      )}
      <section className={`container ${styles.related_projects_container}`}>
        <h2>Related Projects</h2>
        <ul className={styles.related_projects}>
          {data?.related_projects.map(({ project }, index) => (
            <li key={index}>
              <ProjectCard
                link={project}
                title={project?.data?.project_title}
                image={project?.data?.project_image}
                index={index}
              />
            </li>
          ))}
        </ul>
      </section>
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

  const fetchLinks = [
    "testimonial.business_logo",
    "testimonial.testimonial",
    "testimonial.author",
    "testimonial.author_business_position",
    "project.project_title",
    "project.project_image",
  ]

  const page = await client.getByUID("project", params.uid, {
    fetchLinks,
  })
  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")
  const socials = await client.getSingle("socials")

  return {
    props: { header, footer, socials, ...page },
    revalidate: 60,
  }
}

export default Project
