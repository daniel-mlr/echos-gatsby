import React from 'react'
// import localStyle from './concertCard.module.scss'
import { Link } from 'gatsby'
// import { graphql, useStaticQuery } from 'gatsby'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const ConcertCard = (props) => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-mobile is-four-fifths is-offset-1">
          <div className="columns">
            <div className="column" style={{ textAlign: 'center' }}>
              <Img
                // fixed={props.poster.fixed}
                fluid={props.poster.fluid}
                alt={props.poster.description} />
            </div>
            <div className="column">
              <div className="content">
                <p className="title is-4">{props.concertName}</p>
                <p>Direction Artistique: {props.artisticDirection}</p>
                <p>Pianiste: {props.pianiste}</p>
                {(props.participation) && <p>{props.participation}</p>}
                <p>{props.summary}
                  <Link to={`/concerts#${props.slug}`} className="link">... read more</Link>
                </p>
                <p className="has-text-danger has-text-weight-bold">{props.concertDate}</p>
                <a className="button is-danger is-rounded"
                  href={props.ticketsUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  Acheter vos billetes / Buy tickets</a>
              </div>
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
