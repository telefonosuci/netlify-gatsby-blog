import React, { useState } from "react"
import { graphql } from "gatsby"
import axios from 'axios';

import PageLayout from "../components/page-layout"
import Bio from "../components/bio"
const ContactPage = ({ data, location }) => {

  const [values, setValues] = useState({name: '', email: '', telefono: '', info: 0})
  const siteTitle = data.site.siteMetadata.title
  
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
  
  return (
    <PageLayout location={location} title={siteTitle}>
      <p>Send a pidgeon.</p>

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
          <input type="submit" value="Submit" />
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
      }
    }
  }
`


export default ContactPage

