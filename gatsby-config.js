/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
/* globals module __dirname */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Les Échos du Pacifique',
    author: 'Les Échos du Pacifique'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
