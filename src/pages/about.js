import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title="About" />
      <h1>{frontmatter.title}</h1>
      <div className="about-page" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default About
