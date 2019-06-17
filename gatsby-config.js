/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
/* globals module __dirname process*/
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Les Échos du Pacifique',
    author: 'Daniel Meilleur - Les Échos du Pacifique',
    menu:[
      {
        id: 1,
        href: '/',
        text: 'Accueil'
      },
      {
        id: 2,
        href: '/concerts',
        text: 'Concerts'
      },
      {
        id: 3,
        href: '/blog',
        text: 'Nouvelles'
      },
      {
        id: 4,
        href: '/contact',
        text: 'Joignez-nous'
      },
      {
        id: 5,
        href: '/about',
        text: 'La chorale'
      }
    ],
    hero: {
      main: 'Les Échos du Pacifique',
      sub:  'La chorale francophone de Vancouver'
    } 
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
