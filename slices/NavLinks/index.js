import { PrismicLink } from "@prismicio/react"
import { m } from "framer-motion"
import { useRouter } from "next/router"
import styles from "./styles.module.scss"

const NavLinks = ({ slice: { items } }) => {
  const router = useRouter()

  const getCurrentPathname = (pathname) => {
    if (router.asPath === pathname) {
      return styles.active
    }
  }

  const animations = {
    initial: { opacity: 0, y: 25 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 250,
        opacity: { type: "tween" },
      },
    }),
  }

  return items.map(({ link, linkText }, index) => (
    <m.li
      key={index}
      custom={index}
      {...animations}
      className={getCurrentPathname(`/${link.slug}`)}
    >
      <PrismicLink field={link}>{linkText}</PrismicLink>
    </m.li>
  ))
}

export default NavLinks
