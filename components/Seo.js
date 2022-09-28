import { NextSeo } from "next-seo"

export const Seo = ({ metaTitle, metaDescription, metaImage, url }) => {
  const absoluteUrl = `https://scribbleroomanimation.com${url ? url : ""}`
  const siteName = "Scribble Room Animation"

  const seoConfig = {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      url: absoluteUrl,
      title: metaTitle,
      type: "website",
      description: metaDescription,
      images: [
        {
          url: metaImage?.url || "",
          alt: metaImage?.url || "",
          width: metaImage?.dimensions?.width || "",
          height: metaImage?.dimensions?.height || "",
        },
      ],
      site_name: siteName,
    },
    twitter: {
      cardType: "summary_large_image",
    },
    additionalLinkTags: [{ rel: "icon", href: "/favicon.png" }],
  }

  return <NextSeo {...seoConfig} />
}
