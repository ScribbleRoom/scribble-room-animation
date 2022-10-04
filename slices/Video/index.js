import { Default } from "./Default"

const Video = ({ slice: { primary, items, variation }, index }) => {
  const componentMap = {
    default: Default,
  }

  const VariableComponent = componentMap[variation]

  return <VariableComponent {...primary} items={items} index={index} />
}

export default Video
