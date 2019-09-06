import React from 'react'
import LocalizedLink from '../components/localizedLink'
import PropTypes from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'
import ReadMoreButton from '../components/readMoreButton'

const AboutTile = (props) => {
  // console.log('props dans aboutTile:', props)

  return (
    <article className={props.className}>
      <h2 className="title">{props.title}</h2>
      <h3 className="subtitle">{props.sousTitre}</h3>
      { // tile image
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

      { // tile page link
        props.linkAddress &&
        <LocalizedLink 
          to={props.linkAddress}
          className="button is-white is-outlined is-rounded"
          style={{margin: "1.5rem 0 0 0"}}
        >
          {props.linkText}
        </LocalizedLink>
          // <ReadMoreButton to={props.linkAddress} label={props.linkText}/>
      }
    </article>
  )
}

AboutTile.propTypes = {
  title: PropTypes.string,
  sousTitre: PropTypes.string
}

export default AboutTile