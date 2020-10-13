import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import axios from 'axios';

import PageLayout from "../components/page-layout"
import Bio from "../components/bio"
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import SEO from "../components/seo"

const ContactPage = ({ data, location }) => {

  const [values, setValues] = useState({name: '', email: '', telefono: '', info: 0})
  const siteTitle = data.site.siteMetadata.title
  const contactText = data.site.siteMetadata.textContents.contactText
  
  const handleInputChange = e => {
    const {name, value} = e.target
    console.log('Changing ', name);
    setValues({...values, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    
    console.log('Tracking custom event')
    
    trackCustomEvent({
      // string - required - The object that was interacted with (e.g.video)
      category: "contact-form",
      // string - required - Type of interaction (e.g. 'play')
      action: "submit",
      // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
      label: "Contact funnel",
      // number - optional - Numeric value associated with the event. (e.g. A product ID)
      value: 48
    })
    const jsonBody = { data: values }
    axios.post(`https://xfjbmfmkwzhddmf.form.io/contact/submission`, jsonBody)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  
  return (
    <PageLayout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <p>{contactText}</p>

      <form onSubmit={handleSubmit}>
        <div className="m-form__inputGroup">
          <div className="m-form__input">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" onChange={handleInputChange} />
          </div>
          <div className="m-form__input">
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email" onChange={handleInputChange} />
          </div>
          <div className="m-form__input">
            <label htmlFor="telefono">Telefono:</label>
            <input type="text" id="telefono" name="telefono" onChange={handleInputChange} />
          </div>
          <div className="m-form__input">
            <label htmlFor="info">Info: </label>
            <textarea id="info" name="info" onChange={handleInputChange} />
          </div>
        </div>
        <div className="m-form__buttonGroup">
          <button type="submit" value="Submit">Contatta</button>
        </div>
      </form>
      <Bio />
    </PageLayout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        textContents {
          contactText
        }
      }
    }
  }
`


export default ContactPage

