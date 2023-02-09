import { PrismicNextImage } from "@prismicio/next"
import { AnimatePresence, m, useInView } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import styles from "./styles.module.scss"

const Logos = ({ slice: { items } }) => {
  const [sliceStart, setSliceStart] = useState(0)
  const [sliceEnd, setSliceEnd] = useState(6)
  const [logos, setLogos] = useState([])

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    setLogos(items.slice(sliceStart, sliceEnd))

    if (isInView) {
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
    }
  }, [sliceStart, sliceEnd, items, isInView])

  const listVariants = {
    visible: {
      opacity: 1,
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
        delay: i * 0.18,
        type: "spring",
        stiffness: 250,
        opacity: { type: "tween", duration: 0.35 },
      },
    }),
  }

  return (
    <section className={styles.section}>
      <div className="container" ref={ref}>
        <AnimatePresence mode="wait">
          <m.ul
            layout
            className={styles.list}
            variants={listVariants}
            initial="hidden"
            animate={isInView && "visible"}
            exit="exit"
            key={sliceStart}
          >
            {logos.map(({ logo }, index) => (
              <m.li
                key={index}
                custom={index}
                variants={itemVariants}
                initial="initial"
                animate={isInView && "animate"}
              >
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
