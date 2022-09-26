import { Text } from "./Text"
import { Video } from "./Video"

const Hero = ({ slice: { primary, items, variation }, index }) => {
  const componentMap = {
    text: Text,
    video: Video,
  }

  const VariableComponent = componentMap[variation]

  return <VariableComponent {...primary} items={items} index={index} />
}

export default Hero
