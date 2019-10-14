import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
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
  <article>
    <header>
      <h2>
        <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
      </h2>
      <small>{node.date}</small>
    </header>
    <p>{node.excerpt}</p>
  </article>
)

export default IndexPage
