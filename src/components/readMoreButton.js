import React from 'react'
import LocalizedLink from './localizedLink'

const ReadMoreButton = ({label, to }) => {
  return (
    <LocalizedLink
      to={to}
      className="button is-primary is-outlined is-rounded"
    >
      {label}
    </LocalizedLink>
  )
}

export default ReadMoreButton