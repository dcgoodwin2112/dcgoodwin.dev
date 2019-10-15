import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Header = ({ headerIcon, siteTitle, headerTagLine }) => (
  <header className="site-header">
    <div className="author-icon">
      <Img
        fixed={headerIcon.childImageSharp.fixed}
        style={{ overflow: "visible" }}
      />
    </div>
    <div className="author-info">
      <h1 className="author-name">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <p className="author-title">{headerTagLine}</p>
    </div>
    <div className="navigation-container">
      <nav>
        <ul className="navigation">
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  headerTagLine: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  headerTagLine: ``,
}

export default Header
