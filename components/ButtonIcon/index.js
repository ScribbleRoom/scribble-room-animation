import {
  ArrowLongRightIcon,
  PaintBrushIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline"

export const ButtonIcon = ({ iconType }) => {
  if (iconType === null) return

  const iconMapping = {
    "Right Arrow": ArrowLongRightIcon,
    Messages: ChatBubbleLeftRightIcon,
    "Paint Brush": PaintBrushIcon,
  }

  const VariableIcon = iconMapping[iconType]

  return <VariableIcon />
}
