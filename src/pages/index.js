import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import PageLayout from "../components/page-layout"
import SEO from "../components/seo"
import Moment from 'react-moment';

// import createClient directly
import {createClient} from 'contentful'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const [ contentfulPosts, setContentfulPosts ] = useState([])

  useEffect(() => {
    var client = createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: process.env.CONTENTFUL_SITE_ID,
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })

    client.getEntries({
      'content_type': 'blogPost'
    }).then((response) => {
      console.log('Entries: ', response.items)

      setContentfulPosts(response.items)
    }).catch(console.error)
  }, []);

  return (
    <PageLayout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />

      <ol style={{ listStyle: `none` }}>
        {contentfulPosts.length ? contentfulPosts.map(post => {
          const title = post.fields.title || 'Titolo vuoto'

          return (
            <li key={post.sys.id}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <a href={`/contentful-post/${post.sys.id}`}>
                      <span itemProp="headline">{title}</span>
                      </a>
                  </h2>
                  <small><Moment format="DD/MM/YYYY" date={post.fields.publishDate} /></small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.fields.description || '',
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        }): null }
      </ol>
    </PageLayout>
  )
}

export default BlogIndex

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
