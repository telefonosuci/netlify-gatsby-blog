import React from "react"
import { graphql } from "gatsby"

import PageLayout from "../components/page-layout"
import SEO from "../components/seo"

const ContactPage = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata.title
  const contactText = data.site.siteMetadata.textContents.contactText

  return (
    <PageLayout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <p>{contactText}</p>
    </PageLayout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        textContents {
            staseraInTVPrivacyText
        }
      }
    }
  }
`
export default ContactPage

