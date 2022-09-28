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
        console.log("here 1")
        setSliceStart(sliceStart + 6)
        setSliceEnd(sliceEnd + 6)
        setLogos(items.slice(sliceStart, sliceEnd))
      } else {
        console.log("here 2")
        setSliceStart(0)
        setSliceEnd(6)
        setLogos(items.slice(sliceStart, sliceEnd))
      }
    }, 3000)
  }, [sliceStart, sliceEnd, items])

  const variants = {
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
    initial: { opacity: 0, y: 25 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <AnimatePresence exitBeforeEnter>
          <m.ul
            className={styles.list}
            variants={variants}
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
