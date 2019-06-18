import React from 'react'
import localStyle from './blogCard.module.scss'
import { Link} from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const BlogCard = (props) => {
  console.log('props',props)
  return (
  
    <div className={localStyle.mainContainer}>
      
      <Img fluid={props.imgFluid.fluid} alt={props.imgFluid.description} />
      {/* <img alt={props.imgAlt} src={props.imgUrl}></img> */}
      
      <div className={localStyle.bodyContent}>
        <h3>{props.name}</h3>
        <p className={localStyle.date} >{props.date} </p>
        <p className={localStyle.content} >{props.content}</p>
      </div>
      <Link to={`/blog/${props.slug}`}>More...</Link>
    </div>
  )}
  
BlogCard.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
  // imgUrl: PropTypes.string,
  slug: PropTypes.string,
  // imgAlt: PropTypes.string,
  imgFluid: PropTypes.ContentfulFluid
}
export default BlogCard