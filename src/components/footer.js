import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const Footer = ({ socialLinks, certifiedDevBadge, drupalAssocBadge }) => {
  return (
    <footer className="site-footer">
      <div className="footer-flex-container">
        <div className="footer-social-links">
          <ul>
            <SocialLink href={socialLinks.twitter} linkText="Twitter" />
            <SocialLink href={socialLinks.linkedin} linkText="LinkedIn" />
            <SocialLink href={socialLinks.github} linkText="GitHub" />
            <SocialLink href={socialLinks.drupal} linkText="Drupal.org" />
          </ul>
        </div>
        <div className="footer-badges">
          <a
            href="https://certification.acquia.com/registry?fname=Daniel&lname=Goodwin&city=&state=North+Carolina&country=&org=&exam=All"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fixed={certifiedDevBadge.childImageSharp.fixed}
              alt="Acquia Certified Developer Drupal 8 Badge Icon"
            />
          </a>
          <a
            href="https://www.drupal.org/association"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fixed={drupalAssocBadge.childImageSharp.fixed}
              alt="Drupal Association Individual Member Badge"
            />
          </a>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ href, linkText }) => {
  return (
    <>
      <li>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      </li>
    </>
  )
}

Footer.propTypes = {
  socialLinks: PropTypes.shape({
    twitter: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    drupal: PropTypes.string,
  }),
  certifiedDevBadge: PropTypes.shape({
    childImageSharp: PropTypes.object,
  }),
  drupalAssocBadge: PropTypes.shape({
    childImageSharp: PropTypes.object,
  }),
}

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
}

export default Footer
