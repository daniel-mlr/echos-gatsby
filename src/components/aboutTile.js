import React from 'react'
import LocalizedLink from '../components/localizedLink'
import PropTypes from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'

const AboutTile = (props) => {

  return (
    <article className={props.className}>
      <h2 className="title">{props.title}</h2>
      { props.sousTitre && 
      <h3 className="subtitle">{props.sousTitre}</h3>}

      { // tile image
        props.image && 
        <figure 
          className="image"
          style={{padding: '0 0 1.5rem 0'}}
        >
          <Img 
            fluid={props.image.fluid} 
            alt={props.image.description} 
          />
        </figure>
      }
      
      { // body text
        documentToReactComponents(props.corps.json)
      }

      { // tile page link
        props.linkAddress &&
        <LocalizedLink 
          to={props.linkAddress}
          className="button is-white is-outlined is-rounded"
          style={{margin: '1.5rem 0 0 0', height: 'auto', whiteSpace: 'normal'}}
        >{props.linkText}</LocalizedLink>
      }
    </article>
  )
}

AboutTile.propTypes = {
  title: PropTypes.string,
  sousTitre: PropTypes.string
}

export default AboutTile