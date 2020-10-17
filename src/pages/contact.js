import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import axios from 'axios';

import PageLayout from "../components/page-layout"
import Bio from "../components/bio"
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import SEO from "../components/seo"
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";

const ContactPage = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata.title
  const contactText = data.site.siteMetadata.textContents.contactText
  const { register, handleSubmit, watch, errors } = useForm();
  const [modalIsVisible, setModalIsVisible] = useState(false);
  
  const submitContact = data => {
    console.log('Sending data: ', data)
    
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
    const jsonBody = { data }
    setModalIsVisible(true)
    axios.post(`https://xfjbmfmkwzhddmf.form.io/contact/submission`, jsonBody)
      .then(res => {
        console.log(res);
        console.log(res.data);
        setModalIsVisible(false)
      })
  }
  
  return (
    <PageLayout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <p>{contactText}</p>

      <form onSubmit={handleSubmit(submitContact)}>
        <div className="m-form__inputGroup">
          <div className="m-form__input">
            <label htmlFor="nome">Ragione sociale:</label>
            <input type="text" id="nome" name="nome" ref={register({ required: true })} />
            <span className="m-form__inputError">{errors.nome && <span>La ragione sociale è richiesta</span>}</span>
          </div>
          <div className="m-form__input">
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email" ref={register({ required: true })} />
            <span className="m-form__inputError">{errors.email && <span>La mail è richiesta</span>}</span>
          </div>
          <div className="m-form__input">
            <label htmlFor="telefono">Telefono:</label>
            <input type="text" id="telefono" name="telefono" ref={register} />
            <span className="m-form__inputError" />
          </div>
          <div className="m-form__input">
            <label htmlFor="info">Info: </label>
            <textarea id="info" name="info" ref={register} />
          </div>
        </div>
        <div className="m-form__buttonGroup">
          <button type="submit" value="Submit">Contatta</button>
        </div>
      </form>

      <div className={`o-genericPopup__modal ${modalIsVisible ? "-visible" : ""}`}><div className="o-genericPopup__modalContent">Ciao</div></div>
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

