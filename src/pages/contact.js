import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/contact.css"

const Contact = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const defaultValues = { subject: "", message: "" }
  const [values, setValues] = useState(defaultValues)

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <h1>{frontmatter.title}</h1>
      <div className="contact-form-container">
        <div
          className="contact-page"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <form
          action="/success"
          name="contact"
          className="contact-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <label>
            Subject:
            <br />
            <input
              type="text"
              name="subject"
              value={values.subject}
              onChange={handleChange}
            />
          </label>
          <label>
            Message:
            <br />
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/contact.md/" }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default Contact
