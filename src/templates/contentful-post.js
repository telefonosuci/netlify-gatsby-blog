import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import PageLayout from "../components/page-layout"
import SEO from "../components/seo"
// import createClient directly
import {createClient} from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
const ContentfulPostTemplate = ({ data, location, postId }) => {

  const [ contentfulPost, setContentfulPost ] = useState(null)
  useEffect(() => {
    
    const client = createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: process.env.CONTENTFUL_SITE_ID,
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })

    client.getEntry(postId).then((entry) => {
      console.log('Entry: ', entry)

      setContentfulPost(entry)
    }).catch(console.error)
  }, []);

  const siteTitle = data?.site?.siteMetadata?.title || `Title`
  return (
      <PageLayout location={location} title={siteTitle}>
          <SEO
              title={`Contentful post ${postId}`}
          />
          <h2>{contentfulPost && contentfulPost.fields.title}</h2>
          {contentfulPost && <RenderedContent content={contentfulPost.fields.content}/>}
      </PageLayout>
  )
}

const RenderedContent = content => {
  
  
  let options = {
    renderNode: {
      'embedded-asset-block': (node) =>
        `<img class="contentfulPost__img-fluid" src="${node.data.target.fields.file.url}"/>`
    }
  }


  return <div className="m-injectedPostContent" dangerouslySetInnerHTML={{__html: documentToHtmlString(content.content, options)}} />
  
};


export default ContentfulPostTemplate

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
