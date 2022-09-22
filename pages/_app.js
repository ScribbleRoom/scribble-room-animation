import Link from "next/link"
import { PrismicProvider } from "@prismicio/react"
import { PrismicPreview } from "@prismicio/next"
import { linkResolver, repositoryName } from "../prismicio"
import "../sass/main.scss"
import { LazyMotion, domAnimation } from "framer-motion"

const App = ({ Component, pageProps }) => {
  return (
    <LazyMotion features={domAnimation}>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>{children}</a>
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </LazyMotion>
  )
}

export default App
