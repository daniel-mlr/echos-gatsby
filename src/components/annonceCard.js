import React from 'react'
import PropTypes from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'

const AnnonceCard = (props => {
  // console.log('props dans annonceCard', props)

  const options = {
    renderNode: {

      // eslint-disable-next-line react/display-name
      'embedded-asset-block': (node) => {
        // there is no default language for media, hence we
        // must restrict editors to only one version of images
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url}/>
      },

      // to do: find the propeer way to handle hyperlinks
      // meanwhile I disable hyperlink

      // // eslint-disable-next-line react/display-name
      // 'entry-hyperlink': (node, children) => {
      //   // If you are using contenful.js sdk, the referenced entry is resolved
      //   // automatically and is available at `node.data.target`.
      //   // const referencedEntry = getEntryWithId(node.data.target.sys.id)
      //   console.log('node:', node)
      //   console.log('node_locale:', props.node_locale)

      //   return <a href={`/blog/${node.data.target.fields.slug[props.node_locale]}`}>{children}</a>
      // }
    }
  }

  return (
    <div className="box">
      <article className="media">
        <div className="media-left is-hidden-mobile">
          {
            props.image &&
            <figure className="image is-128x128">
              {/* <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/> */}
              <Img fixed={props.image.fixed}
                alt={props.image.description} />
            </figure>
          }
        </div>
        <div className="content media-content">
          {documentToReactComponents(props.content.json, options)}
        </div>

      </article>
    </div>
  )
})

AnnonceCard.propTypes = {
  identifiant: PropTypes.string
}

export default AnnonceCard
