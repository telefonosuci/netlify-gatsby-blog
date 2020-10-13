import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import AlertPopup from "./alert-popup"

const PageLayout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div className="layoutContent">
        <Header location={location} title={title}/>
        <main className="o-globalContent">{children}</main>
        <footer className="o-globalFooter">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> 
        </footer>
      </div>
      <AlertPopup>
        Questo sito utilizza i cookie per personalizzare contenuti ed annunci, per fornire funzionalità dei social media e per analizzare il nostro traffico. 
        Condividiamo inoltre informazioni sul modo in cui utilizza il nostro sito con i nostri partner che si occupano di analisi dei dati web, pubblicità e social media, i quali potrebbero combinarle con altre informazioni che ha fornito loro o che hanno raccolto dal suo utilizzo dei loro servizi. 
        Acconsenta ai nostri cookie se continua ad utilizzare il nostro sito web.
      </AlertPopup>
    </div>
  )
}

export default PageLayout
