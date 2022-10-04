import { LeftAlignedImageWithText } from "./LeftAlignedImageWithText"
import { NarrowImageWithText } from "./NarrowImageWithText"
import { OneWideImage } from "./OneWideImage"
import { RightAlignedImageWithText } from "./RightAlignedImageWithText"
import { ThreeImages } from "./ThreeImages"
import { TwoImages } from "./TwoImages"

const Images = ({ slice: { primary, items, variation }, index }) => {
  const componentMap = {
    "1FullWidthImage": OneWideImage,
    "2Images": TwoImages,
    "3Images": ThreeImages,
    leftAlignedImageWithText: LeftAlignedImageWithText,
    rightAlignedImageWithText: RightAlignedImageWithText,
    narrowImageWithText: NarrowImageWithText,
  }

  const VariableComponent = componentMap[variation]

  return <VariableComponent {...primary} items={items} index={index} />
}

export default Images
