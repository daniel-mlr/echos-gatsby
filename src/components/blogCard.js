import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import LocalizedLink from './localizedLink'

const BlogCard = (props) => {
  
  return (
    <div className="card">
      <div className="card-image">
        <Img fluid={props.previewPicture.fluid}
          alt={props.previewPicture.description} />
      </div> 

      <div className="card-content">
        <h3 className="title is-4 blog-card-title" >{props.titre}</h3>
        <p className="date is-italic has-text-weight-light">
          <time dateTime={props.publicationDate} >{props.publicationDate} </time>
        </p>
        <div className="content">
          <p className="overflow-fade has-background-white-bis">
            {props.summary.summary}
          </p>
          <LocalizedLink
            to={`/blog/${props.slug}`}
            className="button is-primary"
          >{props.buttonText}...</LocalizedLink>

        </div>
      </div>
    </div>
  )}
  
BlogCard.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
  slug: PropTypes.string,
  imgFluid: PropTypes.object
}
export default BlogCard