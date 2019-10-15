import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  console.log(edges)
  const posts = edges.map(edge => (
    <Post edge={edge} key={edge.node.frontmatter.path}></Post>
  ))
  return (
    <Layout>
      <SEO title="Home - Recent Blog Posts" />
      <h1>Recent Posts</h1>
      {posts}
    </Layout>
  )
}
const Post = ({ edge: { node } }) => (
  <article className="post-summary">
    <header>
      <h2>
        <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
      </h2>
    </header>
    <div className="post-summary-flex-container">
      {node.frontmatter.featuredImage && (
        <div className="featured-image">
          <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
        </div>
      )}
      <div
        className={
          "post-excerpt" +
          (node.frontmatter.featuredImage ? "" : " flex-basis-full-width")
        }
      >
        <div className="post-date">{node.frontmatter.date}</div>
        <p>
          {node.excerpt} [<Link to={node.frontmatter.path}>Read More</Link>]
        </p>
      </div>
    </div>
  </article>
)

export default IndexPage
