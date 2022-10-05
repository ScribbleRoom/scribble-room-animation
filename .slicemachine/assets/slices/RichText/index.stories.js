import MyComponent from "../../../../slices/RichText"

export default {
  title: "slices/RichText",
}

export const _Default = () => (
  <MyComponent
    slice={{
      variation: "default",
      version: "sktwi1xtmkfgx8626",
      items: [{}],
      primary: {
        content: [
          {
            type: "paragraph",
            text: "Aute exercitation culpa et id. Anim amet consequat velit dolore.",
            spans: [],
          },
        ],
      },
      slice_type: "rich_text",
      id: "_Default",
    }}
  />
)
_Default.storyName = ""

export const _NarrowContent = () => (
  <MyComponent
    slice={{
      variation: "narrowContent",
      version: "sktwi1xtmkfgx8626",
      items: [{}],
      primary: {
        content: [
          {
            type: "paragraph",
            text: "Qui tempor ipsum laboris qui quis sint adipisicing nisi ea tempor non adipisicing. Ad voluptate sit velit amet elit culpa eu occaecat aliqua enim velit.",
            spans: [],
          },
        ],
      },
      slice_type: "rich_text",
      id: "_NarrowContent",
    }}
  />
)
_NarrowContent.storyName = ""
