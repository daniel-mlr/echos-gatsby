import React from 'react'
import localStyle from './blogCard.module.scss'
import { Link} from 'gatsby'
import PropTypes from 'prop-types'

const BlogCard = (props) => {
  
  return (
  
    <div className={localStyle.mainContainer}>
      
      <img alt={props.imgAlt} src={props.imgUrl}></img>
      
      <div className={localStyle.bodyContent}>  
        <h3>{props.name}</h3>
        <p>{props.date} </p>
        {props.content}
      </div>
      <Link to={`/blog/${props.slug}`}>More...</Link>
    </div>
  )}
  
BlogCard.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
  imgUrl: PropTypes.string,
  slug: PropTypes.string,
  imgAlt: PropTypes.string
}
export default BlogCard