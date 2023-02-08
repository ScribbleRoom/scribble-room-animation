import { Vimeo } from "./Vimeo"
import { YouTube } from "./YouTube"

const Video = ({ slice: { primary, items, variation }, index }) => {
  const componentMap = {
    vimeo: Vimeo,
    youTube: YouTube,
  }

  const VariableComponent = componentMap[variation]

  return <VariableComponent {...primary} items={items} index={index} />
}

export default Video
