import * as prismicHelpers from "@prismicio/helpers"
import { createClient, linkResolver } from "../../prismicio"
import { Layout } from "../../components/Layout"
import { PrismicRichText } from "@prismicio/react"
import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline"
import styles from "../../sass/pages/job-page.module.scss"
import { JobApplicationForm } from "../../components/Form/Job"

const Job = ({ data, url, lang, ...layout }) => {
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
      <section className={`container ${styles.section}`}>
        <div className={styles.title}>
          <PrismicRichText field={data?.job_title} />
        </div>
      </section>
      <section className={`container ${styles.section}`}>
        <div>
          <div className={styles.flex_container}>
            <div className={styles.icon_and_text}>
              <MapPinIcon />
              <PrismicRichText field={data?.location} />
            </div>
            <div className={styles.icon_and_text}>
              <ClockIcon />
              <p>{data?.employment_type}</p>
            </div>
          </div>
        </div>
        <div className="flow">
          <PrismicRichText field={data?.full_job_description} />
        </div>
        <div className={styles.qualifications_and_skills_container}>
          <div>
            <p>Qualifications/Skills</p>
            <div>
              <PrismicRichText field={data?.qualifications_skills} />
            </div>
          </div>
          <div>
            <p>Responsibilities</p>
            <div>
              <PrismicRichText field={data?.responsibilities} />
            </div>
          </div>
        </div>
      </section>
      <section className={`container ${styles.section}`}>
        <h2>Apply Now</h2>
        <p className={styles.apply_now_subtext}>
          Fill in the form below or email{" "}
          <a href="mailto:jobs@scribbleroomanimation.com">
            jobs@scribbleroomanimation.com
          </a>
        </p>
        <JobApplicationForm />
      </section>
    </Layout>
  )
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
