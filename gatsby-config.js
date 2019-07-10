/* globals module __dirname process*/

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
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
    },
    address1: '1200 avenue Cartier,',
    address2: 'Coquitlam, C.-B. V3K 2C3',
    phone: '1-234-567-8900'
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'LesEchosDuPacifique',
        short_name: 'Echos',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-sharp',
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
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        whitelist: [
          'main-container', 'img-container', 'img-container img', 'article-container',
          'content-container', 'content-container p', 'iframe-container',
          'iframe-container iframe'
        ], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    }
  ]
}
