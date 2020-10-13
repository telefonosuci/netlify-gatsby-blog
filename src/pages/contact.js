import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import axios from 'axios';

import PageLayout from "../components/page-layout"
import Bio from "../components/bio"
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

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
    const jsonBody = { data: values }
    axios.post(`https://xfjbmfmkwzhddmf.form.io/contact/submission`, jsonBody)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  useEffect(() => {
    console.log('Tracking custom event')
    trackCustomEvent({
      // string - required - The object that was interacted with (e.g.video)
      category: "Page Contact",
      // string - required - Type of interaction (e.g. 'play')
      action: "View",
      // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
      label: "Gatsby Plugin Example Campaign",
      // number - optional - Numeric value associated with the event. (e.g. A product ID)
      value: 48
    })
  });
  
  return (
    <PageLayout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <p>{contactText}</p>

      <form onSubmit={handleSubmit}>
        <div className="m-form__inputGroup">
          <div className="m-form__input">
            <label>Nome:</label>
            <input type="text" name="nome" onChange={handleInputChange} />
          </div>
          <div className="m-form__input">
            <label>Email: </label>
            <input type="text" name="email" onChange={handleInputChange} />
          </div>
          <div className="m-form__input">
            <label>Telefono:</label>
            <input type="text" name="telefono" onChange={handleInputChange} />
          </div>
          <div className="m-form__input">
            <label>Info: </label>
            <textarea name="info" onChange={handleInputChange} />
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

