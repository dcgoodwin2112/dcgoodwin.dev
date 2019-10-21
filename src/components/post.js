import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "./layout"

const Post = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <div class="post-date">
            <time datetime={frontmatter.dateTime}>{frontmatter.date}</time>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        dateTime: date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
  }
`

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        title: PropTypes.string,
        path: PropTypes.string.isRequired,
      }),
      html: PropTypes.string,
    })
  })
}

export default Post
