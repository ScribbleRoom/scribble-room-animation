import { PrismicNextImage } from "@prismicio/next"
import { PrismicRichText } from "@prismicio/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { m, AnimatePresence } from "framer-motion"

export const Slideshow = ({ items }) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(items[slideIndex])
  const numOfSlides = items.length

  const interval = 3000

  const nextSlide = () => {
    if (slideIndex === numOfSlides - 1) {
      setSlideIndex(slideIndex++)
      setCurrentSlide(items[slideIndex])
    } else {
      setSlideIndex(0)
      setCurrentSlide(items[slideIndex])
    }
  }

  const autoScroll = () => {
    setInterval(nextSlide, interval)
  }

  useEffect(() => {
    autoScroll()

    return () => clearInterval(interval)
  })

  const variants = {
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

  return (
    <section>
      <AnimatePresence exitBeforeEnter>
        <m.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={slideIndex}
        >
          <div>
            <PrismicRichText
              field={currentSlide?.testimonial?.data?.testimonial}
            />
          </div>
          <div>
            <PrismicRichText field={currentSlide?.testimonial?.data?.author} />
          </div>
          <div>
            <PrismicRichText
              field={currentSlide?.testimonial?.data?.author_business_position}
            />
          </div>
        </m.div>
      </AnimatePresence>
    </section>
  )
}
