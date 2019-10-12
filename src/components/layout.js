/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
//import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          headerTagLine
          socialLinks {
            twitter
            linkedin
            github
            drupal
          }
          headerIcon
        }
      }
      headerIcon: file(
        relativePath: { eq: "dan-goodwin-headshot.png" }
      ) {
        childImageSharp {
          fixed(width: 84) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        headerIcon={data.headerIcon}
        siteTitle={data.site.siteMetadata.title}
        headerTagLine={data.site.siteMetadata.headerTagLine}
        socialLinks={data.site.siteMetadata.socialLinks}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
