import React from 'react'
import localStyle from './blogCard.module.scss'
import { Link} from 'gatsby'

const BlogCard = (props) => {
  return (
  
    <div className={localStyle.mainContainer}>
      
      <img src={props.imgUrl}></img>
      
      <div className={localStyle.bodyContent}>  
        <h3>{props.name}</h3>
        <p>{props.date} </p>
        <p>{props.content} </p>
      </div>
      <Link to={`/blog/${props.slug}`}>More...</Link>
    </div>
  )}
  
  export default BlogCard