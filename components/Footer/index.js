import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink } from "@prismicio/react"
import styles from "./styles.module.scss"
import { AtSymbolIcon } from "@heroicons/react/24/outline"
import { SocialLinks } from "../SocialLinks"

export const Footer = ({ logo, navigation_links, email_address, socials }) => (
  <footer className={styles.footer}>
    <div className={`container ${styles.flex_container}`}>
      <div>
        <div className={styles.logo}>
          <PrismicNextImage field={logo} />
        </div>
        <div>
          <nav className={styles.nav}>
            <ul>
              {navigation_links.map(({ link, link_text }, index) => (
                <li key={index}>
                  <PrismicLink document={link}>{link_text}</PrismicLink>
                </li>
              ))}
            </ul>
          </nav>
          {email_address && (
            <a
              className={styles.email_address}
              href={`mailto:${email_address}`}
            >
              <AtSymbolIcon /> {email_address}
            </a>
          )}
        </div>
      </div>
      <div>
        <p className={styles.copyright}>
          © Scribble Room Animation {new Date().getFullYear()}
        </p>
        <div className={styles.social_links}>
          <SocialLinks socials={socials} />
        </div>
      </div>
    </div>
  </footer>
)
