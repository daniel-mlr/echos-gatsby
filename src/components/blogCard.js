import React from 'react'
// import localStyle from './blogCard.module.scss'
import { Link} from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const BlogCard = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <Img fluid={props.imgFluid.fluid}
          alt={props.imgFluid.description} />
      </div> 

      <div className="card-content">
        <h3 className="title is-4 blog-card-title" >{props.name}</h3>
        <p className="date">
          <time dateTime={props.date} >{props.date} </time>
        </p>
        <div className="content">
          <p className="overflow-fade has-background-white-bis">
            {props.content}
          </p>
          <Link
            to={`/blog/${props.slug}`}
            className="button is-primary"
          >Lire...</Link>
        </div>
      </div>
    </div>
  )}
  
BlogCard.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
  // imgUrl: PropTypes.string,
  slug: PropTypes.string,
  // imgAlt: PropTypes.string,
  // imgFluid: {
  //   fluid: PropTypes.ContentfulFluid
  // } 
  imgFluid: PropTypes.object
}
export default BlogCard