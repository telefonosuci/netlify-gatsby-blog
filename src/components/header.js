import React from "react"
import { Link } from "gatsby"
import Navigation from "./navigation"

const Header = ({ location, title, children }) => {
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
        <React.Fragment>
            <header className="global-header">{header}</header>
            <Navigation />
        </React.Fragment>
    )
}

export default Header
