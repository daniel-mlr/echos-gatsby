import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// Based on Dustin Schau's SEO with Gatsby
// https://blog.dustinschau.com/search-engine-optimization-with-gatsby

const SEO = ({ description, meta, image: metaImage, title, locale }) => {
  return (
    <StaticQuery 
      query={graphql`
        {
          site {
            siteMetadata {
              description
              keywords
              siteUrl
            }
          }
        }
      `}
      render={data => {

        const metaDescription = description || data.site.siteMetadata.description
        const image = metaImage && metaImage.src
          ? `${data.site.siteMetadata.siteUrl}${metaImage.src}`
          : null

        const metaItems = [
          { name: "description", content: metaDescription},
          { name: "keywords", content: data.site.siteMetadata.keywords.join(',') },
          { property: "og:title", content: title },
          { property: "og:description", content: description },
          { name: "twitter:creator", content: data.site.siteMetadata.author },
          { name: "twitter:title", content: title },
          { name: "twitter:description", content: metaDescription },
        ]

        const metaCards = metaImage 
        ? [
            { property: 'og:image', content: image },
            { property: 'og:image:width', content: metaImage.width },
            { property: 'og:image:height', content: metaImage.height },
            { name: 'twitter:card', content: 'summary_large_image' }
          ]
        : [ { name: 'twitter:card', content: 'summary' } ]

        return (
          <Helmet 
            htmlAttributes={{lang: locale}}
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
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  }),
  meta: PropTypes.array,
  title: PropTypes.string.isRequired
}

export default SEO