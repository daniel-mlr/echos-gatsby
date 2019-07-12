import React from 'react'
import localStyle from './concertCard.module.scss'
import { Link } from 'gatsby'
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
        <Link to={`/concerts#${props.slug}`}><p>... read more</p></Link>
        {/* {documentToReactComponents(concert.description.json, options)} */}
        <a href={props.ticketsUrl} target="_blank" rel="noopener noreferrer">
          <button type="submit">Billets / Tickets</button>
        </a>
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