import { SingleTestimonial } from "./SingleTestimonial"
import { Slideshow } from "./Slideshow"

const Testimonials = ({ slice: { primary, items, variation }, index }) => {
  const componentMap = {
    singleTestimonial: SingleTestimonial,
    slideshow: Slideshow,
  }

  const VariableComponent = componentMap[variation]

  return <VariableComponent {...primary} items={items} index={index} />
}

export default Testimonials
