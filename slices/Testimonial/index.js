import { SingleTestimonial } from "./SingleTestimonial"

const Testimonials = ({ slice: { primary, items, variation }, index }) => {
  const componentMap = {
    singleTestimonial: SingleTestimonial,
  }

  const VariableComponent = componentMap[variation]

  return <VariableComponent {...primary} items={items} index={index} />
}

export default Testimonials
