import { PrismicRichText } from "@prismicio/react"
import { TeamMemberCard } from "../../components/Card/TeamMember"
import styles from "./styles.module.scss"

const TeamMembers = ({
  slice: {
    primary: { title },
    items,
  },
}) => (
  <section className={`container ${styles.section}`}>
    <div className={styles.title}>
      <PrismicRichText field={title} />
    </div>
    <ul className={styles.list}>
      {items.map(({ team_member }, index) => (
        <li key={index}>
          <TeamMemberCard
            image={team_member?.data?.image}
            team_member_name={team_member?.data?.name}
            position={team_member?.data?.position}
            description={team_member?.data?.short_description}
            linkedin_link={team_member?.data?.linkedin_link}
            instagram_link={team_member?.data?.instagram_link}
            index={index}
          />
        </li>
      ))}
    </ul>
  </section>
)

export default TeamMembers
