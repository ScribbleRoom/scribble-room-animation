import { PrismicNextImage } from "@prismicio/next"
import { AnimatePresence, m } from "framer-motion"
import { useEffect, useState } from "react"
import styles from "./styles.module.scss"

const Logos = ({ slice: { items } }) => {
  const [sliceStart, setSliceStart] = useState(0)
  const [sliceEnd, setSliceEnd] = useState(6)

  const [logos, setLogos] = useState([])

  useEffect(() => {
    setLogos(items.slice(sliceStart, sliceEnd))

    setTimeout(() => {
      if (items.length > sliceEnd) {
        setSliceStart(sliceStart + 6)
        setSliceEnd(sliceEnd + 6)
        setLogos(items.slice(sliceStart, sliceEnd))
      } else {
        setSliceStart(0)
        setSliceEnd(6)
        setLogos(items.slice(sliceStart, sliceEnd))
      }
    }, 6000)
  }, [sliceStart, sliceEnd, items])

  const listVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
    },
    exit: {
      opacity: 0,
    },
  }

  const itemVariants = {
    initial: { opacity: 0, y: 15 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 250,
        opacity: { type: "tween" },
      },
    }),
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <AnimatePresence exitBeforeEnter>
          <m.ul
            layout
            className={styles.list}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={sliceStart}
          >
            {logos.map(({ logo }, index) => (
              <m.li key={index} custom={index} {...itemVariants}>
                <PrismicNextImage field={logo} />
              </m.li>
            ))}
          </m.ul>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Logos
