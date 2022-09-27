import { NarrowCentered } from "./NarrowCentered"
import { WideWithGreyBackground } from "./WideWithGreyBackground"

const CallToAction = ({ slice: { primary, items, variation }, index }) => {
  const componentMap = {
    "narrow-centered": NarrowCentered,
    wideWithGreyBackground: WideWithGreyBackground,
  }

  const VariableComponent = componentMap[variation]

  return <VariableComponent {...primary} items={items} index={index} />
}

export default CallToAction
