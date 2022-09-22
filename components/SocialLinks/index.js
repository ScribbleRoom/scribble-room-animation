import { Fragment } from "react"
import { PrismicLink } from "@prismicio/react"
import Image from "next/image"

export const SocialLinks = ({ socials }) => (
  <Fragment>
    {socials?.instagramLink?.url && (
      <PrismicLink field={socials.instagramLink}>
        <Image
          src="/assets/icons/instagram-logo.svg"
          layout="fill"
          alt="Instagram Logo"
        />
      </PrismicLink>
    )}
    {socials?.linkedinLink?.url && (
      <PrismicLink field={socials.linkedinLink}>
        <Image
          src="/assets/icons/linkedin-logo.svg"
          layout="fill"
          alt="LinkedIn Logo"
        />
      </PrismicLink>
    )}
    {socials?.vimeoLink?.url && (
      <PrismicLink field={socials.vimeoLink}>
        <Image
          src="/assets/icons/vimeo-logo.svg"
          layout="fill"
          alt="Vimeo Logo"
        />
      </PrismicLink>
    )}
    {socials?.youtubeLink?.url && (
      <PrismicLink field={socials.youtubeLink}>
        <Image
          src="/assets/icons/youtube-logo.svg"
          layout="fill"
          alt="YouTube Logo"
        />
      </PrismicLink>
    )}
  </Fragment>
)
