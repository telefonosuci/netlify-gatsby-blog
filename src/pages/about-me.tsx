// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import PageLayout from "../components/page-layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    },
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({
  data,
  path,
  location,
}) => (
  <PageLayout title={data.site.siteMetadata.title} location={location}>
    <SEO title="About me" />
    <p>
      Sono da diversi anni nel settore della consulenza inforamtica. Un lavoro che faccio con molta passione.
    </p>
    <p>
      For type checking you'll want to install <em>typescript</em> via npm and
      run <em>tsc --init</em> to create a <em>.tsconfig</em> file.
    </p>
    <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/typescript/">
        documentation about TypeScript
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </PageLayout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
