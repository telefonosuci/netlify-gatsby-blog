import React from "react"
import Header from "./header"
import CookieConsents from "./cookie-consents"

const PageLayout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

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
      <CookieConsents />
    </div>
  )
}

export default PageLayout
