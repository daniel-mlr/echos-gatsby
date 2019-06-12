import React from 'react'
// import { Link, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import localStyle from './concertCard.module.scss'

const ConcertCard = (props) => {
  // console.log(props.imgUrl)
  return (
    <section className={localStyle.mainContainer}>
      <div className={localStyle.imgContainer}>
        <img src={props.imgUrl}></img>
      </div>
      <div className={localStyle.contentContainer}>
        <p>{props.name}</p>
        <p>{props.date} </p>
        {props.content}
        <button type="submit">Billets / Tickets</button>
      </div>
    </section>
  )
}

ConcertCard.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.array,
  imgUrl: PropTypes.string
}

export default ConcertCard