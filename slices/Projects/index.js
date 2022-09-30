import { PrismicLink } from "@prismicio/react"
import { ProjectCard } from "../../components/Card/Project"
import styles from "./styles.module.scss"

const Projects = ({
  slice: {
    primary: { link, link_text },
    items,
  },
}) => (
  <section className={`${styles.section} container`}>
    <ul className={styles.list}>
      {items.map(({ project }, index) => (
        <li key={index}>
          <ProjectCard
            link={project}
            title={project?.data?.project_title}
            image={project?.data?.project_image}
          />
        </li>
      ))}
    </ul>
    {link && (
      <div className={styles.button}>
        <PrismicLink document={link} className="button primary">
          {link_text}
        </PrismicLink>
      </div>
    )}
  </section>
)

export default Projects
