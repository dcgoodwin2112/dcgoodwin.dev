module.exports = {
  siteMetadata: {
    title: `Dan Goodwin`,
    description: `Dan Goodwin - Web Application Developer. Drupal, PHP, JavaScript, React, Gatsby`,
    author: `@dcgoodwin2112`,
    headerTagLine: `Web Application Developer`,
    headerIcon: `src/images/dan-goodwin-headshot-512.png`,
    socialLinks: {
      twitter: `https://twitter.com/dcgoodwin2112`,
      linkedin: `https://www.linkedin.com/in/dcgoodwin2112/`,
      github: `https://github.com/dcgoodwin2112`,
      drupal: `https://www.drupal.org/u/dcgoodwin`,
    },
  },
  plugins: [
    `gatsby-plugin-eslint`,
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
        path: `${__dirname}/src/posts-markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages-markdown`,
        path: `${__dirname}/src/pages-markdown`,
      },
    },
    {
     resolve: 'gatsby-plugin-tinacms',
      options: {
        plugins: [
          "gatsby-tinacms-git",
          "gatsby-tinacms-remark",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 776,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dcgoodwin-dev-site`,
        short_name: `dcgoodwin`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/dan-goodwin-headshot-512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
