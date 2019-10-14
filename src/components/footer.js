import React from "react"
import Img from "gatsby-image"

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
          <Img
            fixed={certifiedDevBadge.childImageSharp.fixed}
            alt="Acquia Certified Developer Drupal 8 Badge Icon"
          />
          <Img
            fixed={drupalAssocBadge.childImageSharp.fixed}
            alt="Drupal Association Individual Member Badge"
          />
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

export default Footer
