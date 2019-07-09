import React from 'react'
import localStyle from './concertCard.module.scss'
// import { graphql, useStaticQuery } from 'gatsby'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const ConcertCard = (props) => {

  return (
    <section className={localStyle.mainContainer}>
      <div className={localStyle.imgContainer}>
        {/* <img src={concert.poster.file.url} alt={concert.poster.title} /> */}
        <Img fluid={props.imgFluid.fluid} alt={props.imgFluid.description} />
      </div>
      <div className={localStyle.contentContainer}>
        <h2>{props.concertName}</h2>
        <p>{props.concertDate}</p>
        <p>{props.artisticDirection}</p>
        <p>{props.pianiste}</p>
        <p>{props.participation}</p>
        <p>{props.summary}</p>
        <p>{props.slug}</p>
        {/* {documentToReactComponents(concert.description.json, options)} */}
        <button type="submit">Billets / Tickets</button>
      </div>
    </section>
  )
}
ConcertCard.propTypes = {
  concertName: PropTypes.string,
  announcementDate: PropTypes.string,
  summary: PropTypes.string,
  slug: PropTypes.string,
  imgFluid: PropTypes.object
}

export default ConcertCard