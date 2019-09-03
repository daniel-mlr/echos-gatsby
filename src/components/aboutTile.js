import React from 'react'
import PropTypes from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'

// linux

const AboutTile = (props) => {

  return (
    <article className={props.className}>
      <h2 className="title">{props.title}</h2>
      <h3 className="subtitle">{props.sousTitre}</h3>
      { 
        props.image && 
        <figure 
          className="image"
          style={{padding: "0 0 1.5rem 0"}}
        >
          <Img 
            fluid={props.image.fluid} 
            alt={props.image.description} 
            />
        </figure>
      }
      {documentToReactComponents(props.corps.json)}
    </article>
  )
}

AboutTile.propTypes = {
  title: PropTypes.string,
  sousTitre: PropTypes.string
}

export default AboutTile