import React from "react"
import { graphql } from "gatsby"
import { remarkForm } from "gatsby-tinacms-remark"
import PropTypes from "prop-types"
import Layout from "./layout"

const Post = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const tags = Object.values(frontmatter.tags).map(tag => (
    <span className={`tag tag-${tag.toLowerCase()}`} key={tag}>{tag}</span>
  ));
  console.log(tags);
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <div className="post-date">
            <time datetime={frontmatter.dateTime}>{frontmatter.date}</time>
          </div>
          <div className="post-tags">
            {tags}
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
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        dateTime: date(formatString: "YYYY-MM-DD")
        path
        tags
        title
      }
      fileRelativePath
      rawFrontmatter
      rawMarkdownBody
    }
  }
`

let PostForm = {
  fields: [
    {
      label: "Title",
      name: "rawFrontmatter.title",
      component: "text",
    },
    {
      label: "Date",
      name: "rawFrontmatter.date",
      description: "Format: YYYY-MM-DD",
      component: "date",
      dateFormat: "YYYY-MM-DD",
      timeFormat: false,
    },
    {
      label: "Path",
      name: "rawFrontmatter.path",
      description: "Path should begin with /posts/",
      component: "text",
    },
    {
      label: "Body",
      name: "rawMarkdownBody",
      component: "markdown",
    },
  ],
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        title: PropTypes.string,
        path: PropTypes.string.isRequired,
      }),
      html: PropTypes.string,
    }),
  }),
}

export default remarkForm(Post, PostForm)
