/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../css/colors.css"
import "../css/layout.css"
import "../css/layout-custom.css"
import "../css/header.css"
import "../css/footer.css"

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
        }
      }
      headerIcon: file(relativePath: { eq: "dan-goodwin-headshot.png" }) {
        childImageSharp {
          fixed(width: 84) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      certifiedDevBadge: file(
        relativePath: { eq: "drupal-8-certified-developer.png" }
      ) {
        childImageSharp {
          fixed(height: 84) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      drupalAssocBadge: file(relativePath: { eq: "assoc_badge_ind_400.png" }) {
        childImageSharp {
          fixed(height: 84) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const { headerIcon, certifiedDevBadge, drupalAssocBadge, site } = data
  const { siteMetadata } = site
  return (
    <div className="layout-container">
      <Header
        headerIcon={headerIcon}
        siteTitle={siteMetadata.title}
        headerTagLine={siteMetadata.headerTagLine}
      />
      <main>{children}</main>
      <Footer
        socialLinks={siteMetadata.socialLinks}
        certifiedDevBadge={certifiedDevBadge}
        drupalAssocBadge={drupalAssocBadge}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
