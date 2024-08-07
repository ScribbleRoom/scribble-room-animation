import * as prismic from "@prismicio/client"
import { enableAutoPreviews } from "@prismicio/next"
import sm from "./slicemachine.config.json"

export const endpoint = sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)

export function linkResolver(doc) {
  switch (doc.type) {
    case "homepage":
      return "/"
    case "page":
      return `/${doc.uid}`
    case "projects":
      return "/projects"
    case "project":
      return `/projects/${doc.uid}`
    case "jobs":
      return "/jobs"
    case "job":
      return `/jobs/${doc.uid}`
    case "contact":
      return "/contact"
    default:
      return null
  }
}

export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
  })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}
