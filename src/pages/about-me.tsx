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
      Sono da diversi anni nel settore della consulenza inforamtica, lavorando nello specifico come <em>System Integrator</em>, realizzando integrazioni di sistemi ecommerce, CRM, ERP.
    </p>
    <p>Durante questi anni ho lavorato con vari prodotti: SAP, Alfresco, Liferay, Salesforce.</p>
    <p>Da qualche anno mi sono avvcinato allo sviluppo front-end realizzando applicazioni web con l'utilizzo degli ultimi tools e framework di ultima generazione.</p>
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
