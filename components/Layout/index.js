import { Fragment } from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Seo } from "../Seo"

export const Layout = ({ seo, header, footer, socials, children }) => {
  const socialsData = {
    youtubeLink: socials?.data?.youtube_link,
    vimeoLink: socials?.data?.vimeo_link,
    instagramLink: socials?.data?.instagram_link,
    linkedinLink: socials?.data?.linkedin_link,
  }

  return (
    <Fragment>
      <Seo {...seo} />
      <Header {...header?.data} socials={socialsData} />
      <main>{children}</main>
      <Footer {...footer?.data} />
    </Fragment>
  )
}
