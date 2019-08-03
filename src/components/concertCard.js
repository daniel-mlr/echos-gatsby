import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import BuyButton from './buyButton'
import LocalizedLink from './localizedLink'

const ConcertCard = (props) => {
  const concertDate = new Date(props.node.concertDate)
  const dateFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }

  return (
    <div className="container concert">
      <div className="columns">
        <div className="column">
          <LocalizedLink to={`/concerts#${props.node.slug}`}>
            <Img
              fluid={props.node.poster.fluid}
              alt={props.node.poster.description} />
          </LocalizedLink>
        </div>
        <div className="column">
          <div className="content">
            <div className="concert-text ">
              <LocalizedLink to={`/concerts#${props.node.slug}`}>
                <h4 className="title is-4 artistes">{props.node.concertName}</h4>
              </LocalizedLink>
              <div className="content artistes">
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
              </div>
              <div className="concert-summary">
                <p>{props.node.summary.summary}</p>
              </div>
              <div className="flex-read-more">
                <LocalizedLink
                  className="button is-primary is-small"
                  to={`/concerts#${props.node.slug}`}
                >{props.buttonText}... </LocalizedLink>
              </div>
              <div className="date">
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
              </div>
              <div className="content">
                <BuyButton href={props.node.ticketsUrl} />
                {/* <a className="button is-primary is-rounded"
                  href={props.node.ticketsUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  Acheter vos billetes / Buy tickets</a> */}
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
