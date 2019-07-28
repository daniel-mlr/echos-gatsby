import React from 'react'
import { Link} from 'gatsby'

const ReadMoreButton = ({title}) => {
  // console.log('title', {title})
  return (
    <Link
      to={'/blog/'}
      className="button is-primary is-outlined is-rounded"
    >
      read more blogs
    </Link>
  )
}

export default ReadMoreButton