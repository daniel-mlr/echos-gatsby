import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const ConcertCard = (props) => {
  const concertDate = new Date(props.node.concertDate)
  const dateFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <Img
            fluid={props.node.poster.fluid}
            alt={props.node.poster.description} />
        </div>
        <div className="column">
          <div className="content">
            <div className="concert-text">
              <p className="title is-4">{props.node.concertName}</p>
              <p>Direction Artistique: {props.node.artisticDirection}</p>
              <p>Pianiste: {props.node.pianiste}</p>
              {
                (props.node.participation) &&
                <>
                  <p>Artistes invités</p>
                  <ul>{props.node.participation.map(
                    (p, key) => <li key={key}>{p}</li>
                  )}</ul>
                </>
              }
              <div className="concert-summary">
                <p>{props.node.summary.summary}</p>
                <Link
                  to={`/concerts#${props.node.slug}`}
                  className="link">... read more
                </Link>
              </div>
              <p>
                {'Date du concert: '}
                <span className="has-text-danger">
                  <time dateTime={props.node.concertDate}>
                    {concertDate.toLocaleDateString(
                      'fr-CA', dateFormatOptions
                    )}
                  </time>
                </span>
              </p>
              <a className="button is-primary is-rounded"
                href={props.node.ticketsUrl}
                target="_blank"
                rel="noopener noreferrer">
                Acheter vos billetes / Buy tickets</a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
