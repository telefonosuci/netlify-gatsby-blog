/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Navigation = () => {
    const data = useStaticQuery(graphql`
    query NavQuery {
        site {
            siteMetadata {
                title
                menuLinks {
                name
                href
                }
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                excerpt
                fields {
                slug
                }
                frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                }
            }
        }
    }`)

    const menuLinks = data.site.siteMetadata?.menuLinks || []

    return (
        <ul className="o-navigationMenu">
            {menuLinks.map(link => {
                return <li key={link.href}><a href={link.href} className="o-navigationMenu__link">{link.name}</a></li>
            })}
        </ul>
    )
}

export default Navigation
