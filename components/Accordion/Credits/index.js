import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { PrismicRichText } from "@prismicio/react"
import { AnimatePresence, m } from "framer-motion"
import styles from "./styles.module.scss"

export const CreditsAccordion = ({ credits }) => {
  const panel = {
    as: m.div,
    key: "content",
    initial: "collapsed",
    animate: "open",
    exit: "collapsed",
    variants: {
      open: { opacity: 1, height: "auto" },
      collapsed: { opacity: 0, height: 0 },
    },
    transition: { duration: 0.4 },
  }

  const list = {
    variants: { collapsed: { opacity: 0 }, open: { opacity: 1 } },
    transition: { duration: 0.2 },
  }

  return (
    <Disclosure>
      {({ open }) => (
        <div className={styles.container}>
          <Disclosure.Button className={styles.accordion_button}>
            <span className={styles.accordion_title}>Full Credits</span>
            <m.span
              initial="closed"
              exit="closed"
              animate={open ? "open" : "closed"}
              className={styles.button_icon_span}
              variants={{
                open: {
                  rotate: "180deg",
                },
                closed: {
                  rotate: "0deg",
                },
              }}
            >
              <ChevronDownIcon className={styles.accordion_button_icon} />
            </m.span>
          </Disclosure.Button>
          <AnimatePresence initial={false}>
            {open && (
              <Disclosure.Panel
                {...panel}
                static
                className={styles.disclosure_panel}
              >
                <m.ul {...list}>
                  {credits.map(({ group_header_name, group_names }, index) => (
                    <li key={index} className={styles.item}>
                      <div className={styles.group_header}>
                        <PrismicRichText field={group_header_name} />
                      </div>
                      <div className={styles.group_names}>
                        <PrismicRichText field={group_names} />
                      </div>
                    </li>
                  ))}
                </m.ul>
              </Disclosure.Panel>
            )}
          </AnimatePresence>
        </div>
      )}
    </Disclosure>
  )
}
