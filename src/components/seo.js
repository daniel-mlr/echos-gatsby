import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// Based on Dustin Schau's SEO with Gatsby
// https://blog.dustinschau.com/search-engine-optimization-with-gatsby

const SEO = ({ description, meta, image: metaImage, title, locale, path}) => {
  return (
    <StaticQuery 
      query={graphql`
        {
          site {
            siteMetadata {
              title
              author
              description
              siteUrl
            }
          }
        }
      `}
      render={data => {

        const metaDescription = description || data.site.siteMetadata.description
        // const metaKeywords = keywords || data.site.siteMetadata.keywords
        const image = metaImage && metaImage.src
          ? `${data.site.siteMetadata.siteUrl}${metaImage.src}`
          : null

        const metaItems = [
          { name: 'description', content: metaDescription},
          { property: 'og:title', content: title },
          { property: 'og:url', content: data.site.siteMetadata.siteUrl + `${path}` },
          { property: 'og:site_name', content: data.site.siteMetadata.title },
          { property: 'og:description', content: metaDescription },
          { name: 'twitter:creator', content: data.site.siteMetadata.author },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: metaDescription },
        ]

        const metaCards = metaImage 
          ? [
            { property: 'og:image', content: image },
            { property: 'og:image:width', content: metaImage.width },
            { property: 'og:image:height', content: metaImage.height },
            { name: 'twitter:card', content: 'summary_large_image' }
          ]
          : [{ name: 'twitter:card', content: 'summary' }]
        
        // console.log('@@allmeta:', metaItems.concat(metaCards).concat(meta))
        return (
          <Helmet 
            htmlAttributes={{lang: locale}}
            title={title}
            meta={metaItems.concat(metaCards).concat(meta)}
          />
        )}
      }
    />
  )
}

SEO.defaultProps = { meta: []}

SEO.propTypes = {
  description: PropTypes.string,
  // keywords: PropTypes.array,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  }),
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
  locale: PropTypes.string,
  path: PropTypes.string,
}

export default SEO