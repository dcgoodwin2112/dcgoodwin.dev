module.exports = {
  siteMetadata: {
    title: `Dan Goodwin`,
    description: `Dan Goodwin - Web Application Developer. Drupal, PHP, JavaScript, React, Gatsby`,
    author: `@dcgoodwin2112`,
    headerTagLine: `Web Application Developer`,
    headerIcon: `src/images/dan-goodwin-headshot.png`,
    socialLinks: {
      twitter: `https://twitter.com/dcgoodwin2112`,
      linkedin: `https://www.linkedin.com/in/dcgoodwin2112/`,
      github: `https://github.com/dcgoodwin2112`,
      drupal: `https://www.drupal.org/u/dcgoodwin`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
