import { PrismicLink } from "@prismicio/react"
import { m } from "framer-motion"

const NavLinks = ({ slice: { items } }) => {
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
    <m.li key={index} custom={index} {...animations}>
      <PrismicLink field={link}>{linkText}</PrismicLink>
    </m.li>
  ))
}

export default NavLinks
