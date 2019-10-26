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
  const [confirm, setConfirm] = useState("")

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setConfirm("testing")
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <h1>{frontmatter.title}</h1>
      {confirm !== "" && <div className="confirm-message">{confirm}</div>}
      <div className="contact-form-container">
        <div
          className="contact-page"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <form
          name="contact"
          className="contact-form"
          method="POST"
          data-netlify="true"
          netlify-honeypot="lastname"
          onSubmit={handleSubmit}
        >
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
          <label style={{ display: "none" }}>
            Name: <input name="name-other" />
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
