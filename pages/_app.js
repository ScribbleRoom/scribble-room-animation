import Link from "next/link"
import { PrismicProvider } from "@prismicio/react"
import { linkResolver } from "../prismicio"
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
        <Component {...pageProps} />
      </PrismicProvider>
    </LazyMotion>
  )
}

export default App
