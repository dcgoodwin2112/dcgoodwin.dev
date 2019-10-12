import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Header = ({ headerIcon, siteTitle, headerTagLine, socialLinks }) => (
  <header>
    <div className="author-icon">
      <Img fixed={headerIcon.childImageSharp.fixed} />
    </div>
    <div className="author-info">
      <h1 className="author-name">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <p className="author-title">{headerTagLine}</p>
    </div>
    <div className="social-links">
      <ul>
        <li>
          <a href={socialLinks.twitter} target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href={socialLinks.linkedin} target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={socialLinks.github} target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href={socialLinks.drupal} target="_blank">
            Drupal.org
          </a>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
