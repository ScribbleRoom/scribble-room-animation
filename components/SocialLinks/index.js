import { Fragment } from "react"
import { PrismicLink } from "@prismicio/react"

// Icons
import { YouTubeLogo } from "../icons/YouTubeLogo"
import { VimeoLogo } from "../icons/VimeoLogo"
import { Linkedin } from "../icons/Linkedin"
import { InstagramLogo } from "../icons/InstagramLogo"

export const SocialLinks = ({ socials }) => (
  <Fragment>
    {socials?.instagramLink?.url && (
      <PrismicLink field={socials.instagramLink}>
        <InstagramLogo />
      </PrismicLink>
    )}
    {socials?.linkedinLink?.url && (
      <PrismicLink field={socials.linkedinLink}>
        <Linkedin />
      </PrismicLink>
    )}
    {socials?.vimeoLink?.url && (
      <PrismicLink field={socials.vimeoLink}>
        <VimeoLogo />
      </PrismicLink>
    )}
    {socials?.youtubeLink?.url && (
      <PrismicLink field={socials.youtubeLink}>
        <YouTubeLogo />
      </PrismicLink>
    )}
  </Fragment>
)
