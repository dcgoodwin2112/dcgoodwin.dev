import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/contact.css"

const Success = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title="Contact Form Submitted" />
      <h1>{frontmatter.title}</h1>
      <div className="success-page" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/success.md/" }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default Success
