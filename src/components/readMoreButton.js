import React from 'react'
import LocalizedLink from './localizedLink'

const ReadMoreButton = ({label }) => {
  return (
    <LocalizedLink
      to={'/blog/'}
      className="button is-primary is-outlined is-rounded"
    >
      {label}
    </LocalizedLink>
  )
}

export default ReadMoreButton