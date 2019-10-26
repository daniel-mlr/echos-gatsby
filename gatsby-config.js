/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Les Échos du Pacifique',

    author: 'Les Échos du Pacifique',
    description: 'Les Échos du Pacifique, la chorale francophone du grand Vancouver. Répertoire de chansons en français, ancien français, anglais, latin et autres langues',
    // keywords: ['concerts', 'choeur', 'Vancouver', 'musique', 'voix', 'chansons'],
    siteUrl: 'http://lesechosdupacifique.info',

    twitterUsername: '@ChoeurLesEchos',
    menu:[
      {
        id: 1,
        href: '/',
        label:[
          {
            node_locale: 'fr-CA',
            text: 'Accueil'
          },
          {
            node_locale: 'en-US',
            text: 'Home' 
          }
        ]
      } ,
      {
        id: 2,
        href: '/concerts',
        label:[
          {
            node_locale: 'fr-CA',
            text: 'Concerts'
          },
          {
            node_locale: 'en-US',
            text: 'Concerts' 
          }
        ]
      },
      {
        id: 3,
        href: '/blog',
        label:[
          {
            node_locale: 'fr-CA',
            text: 'Nouvelles'
          },
          {
            node_locale: 'en-US',
            text: 'News' 
          }
        ]
      },
      {
        id: 4,
        href: '/contact',
        label:[
          {
            node_locale: 'fr-CA',
            text: 'Rejoignez-nous'
          },
          {
            node_locale: 'en-US',
            text: 'Join us' 
          }
        ]
      },
      {
        id: 5,
        href: '/about',
        label:[
          {
            node_locale: 'fr-CA',
            text: 'La chorale'
          },
          {
            node_locale: 'en-US',
            text: 'About us' 
          }
        ]
      }
    ],

    hero: {
      main: 'Les Échos du Pacifique',
      sub:  'La chorale francophone de Vancouver'
    },
    address1: '1200 avenue Cartier,',
    address2: 'Coquitlam, C.-B. V3K 2C3',
    phone: '1-234-567-8900',
    readMore: 'Lire...'
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'LesEchosDuPacifique',
        short_name: 'Echos',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        icon: 'src/images/favicon.png'
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
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'http://lesechosdupacifique.info',
        stripQueryString: true,
      },
    }
    // {
    //   resolve: 'gatsby-plugin-purgecss',
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     // develop: true, // Enable while using `gatsby develop`
    //     // tailwind: true, // Enable tailwindcss support
    //     whitelist: [
    //       'main-container', 'img-container', 'img-container img', 'article-container',
    //       'content-container', 'content-container p', 'iframe-container',
    //       'iframe-container iframe'
    //     ], // Don't remove this selector
    //     // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
    //     ignore: [ 
    //       'style.scss',
    //       'langSwitcher.module.scss',
    //       'react-responsive-carousel/lib/styles/carousel.min.css'
    //     ], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //   }
    // }
  ]
}