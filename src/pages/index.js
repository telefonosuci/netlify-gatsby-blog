import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import PageLayout from "../components/page-layout"
import SEO from "../components/seo"
import StaticPostList from "../components/static-post-list"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <PageLayout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <StaticPostList posts={posts}/>
    </PageLayout>
  )
}

export default BlogIndex

// Query can be executed only on Pages
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
