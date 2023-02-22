import { createClient } from "../../prismicio"
import { Layout } from "../../components/Layout"
import { JobCard } from "../../components/Card/Job"
import styles from "../../sass/pages/jobs-page.module.scss"
import { m } from "framer-motion"

const Jobs = ({ data, url, lang, jobs, ...layout }) => {
  const seo = {
    metaTitle: data?.metaTitle,
    metaDescription: data?.metaDescription,
    metaImage: data?.metaImage,
    url,
    article: false,
    lang,
  }

  const titleCharacters = data?.title[0].text.split("")

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
    },
  }

  const characterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        type: "spring",
        stiffness: 250,
        opacity: { type: "tween" },
      },
    }),
  }

  return (
    <Layout seo={seo} {...layout}>
      <section className={`container ${styles.section}`}>
        <div>
          <m.h1
            className={styles.title}
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            aria-label={data?.title[0].text}
          >
            {titleCharacters.map((char, index) => (
              <m.span
                key={index}
                custom={index}
                variants={characterVariants}
                initial="hidden"
                animate="visible"
              >
                {char}
              </m.span>
            ))}
          </m.h1>
        </div>
      </section>
      <section className={`container ${styles.section}`}>
        {jobs.length > 0 ? (
          <ul className={styles.list}>
            {jobs.map((job, index) => (
              <li key={index}>
                <JobCard
                  title={job?.data?.job_title}
                  description={job?.data?.short_job_description}
                  link={job}
                  employment_type={job?.data?.employment_type}
                  location={job?.data?.location}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.no_current_jobs_container}>
            <p>There are no current positions available.</p>
            <p>
              Feel free to email us as we are always on the look out for
              talented people.
            </p>
            <a
              href="mailto:jobs@scribbleroomanimation.com"
              className={styles.email}
            >
              jobs@scribbleroomanimation.com
            </a>
          </div>
        )}
      </section>
    </Layout>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle("jobs")
  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")
  const socials = await client.getSingle("socials")
  const jobs = await client.getAllByType("job")

  return {
    props: { header, footer, socials, jobs, ...page },
  }
}

export default Jobs
