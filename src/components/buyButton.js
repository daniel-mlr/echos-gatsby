import React from 'react'
import PropTypes from 'prop-types'

const BuyButton = (props) => {
  return (
    <a className="button is-primary is-rounded"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer">
      {/* Acheter vos billetes / Buy tickets</a> */}
      {props.label}</a>
  )
}
BuyButton.propTypes = {
  ticketsUrl: PropTypes.string
}
export default BuyButton