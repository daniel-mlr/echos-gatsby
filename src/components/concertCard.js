import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import BuyButton from './buyButton'
import LocalizedLink from './localizedLink'
import labels from '../constants/concert'
import { GoCalendar, GoClock } from 'react-icons/go'


const ConcertCard = (props) => {

  // date renderings
  // --------------
  // 
  // const concertDateGMT = new Date(props.node.concertDate + 'Z')
  // console.log('props.node.concertdate:', props.node.concertDate, '\nconcertDateGMT:', concertDateGMT)
  // // console.log('time zone offset:', concertDateGMT.getTimezoneOffset())
  // const concertDate = new Date(concertDateGMT.valueOf() + concertDateGMT.getTimezoneOffset() * 60 * 1000)

  const [date, time] = props.node.concertDate.split('T')
  const [yr, mnt, day] = date.split('-')
  const [hr, min] = time.split(':')

  const concertDate = new Date(yr, mnt - 1, day, hr, min)

  const dateFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
  }
  const timeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
  }

  // translation rendering helper function
  const t = (label) => labels[label][props.node.node_locale]

  return (
    <div className="container concert">
      <div className="columns">

        {/* left poster picture  */}
        <div className="column">
          <LocalizedLink to={`/concerts#${props.node.slug}`}>
            <Img
              fluid={props.node.poster.fluid}
              alt={props.node.poster.description} />
          </LocalizedLink>
        </div>

        {/* right column: concert info */}
        <div className="column">
          <div className="content">
            
            <div className="concert-text ">
              
              <LocalizedLink to={`/concerts#${props.node.slug}`}>
                <h4
                  className="title is-4 artistes"
                >{props.node.concertName}</h4>
              </LocalizedLink>
              
              <div className="content artistes">
                <p><span
                  className="has-text-weight-bold">
                  {t('directionArtistique')}:&ensp;
                </span>{props.node.artisticDirection}</p>

                <p><span
                  className="has-text-weight-bold"
                >{t('pianiste')}:&ensp;
                </span>{props.node.pianiste}</p>

                { /* conditional participation list */
                  (props.node.participation) &&
                  <>
                    <p
                      className="has-text-weight-bold"
                    >{t('artistesInvites')}:&ensp;</p>
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
                >{t('moreDetails')}... </LocalizedLink>
              </div>
              
              {/* concert date */}
              <div className="date">
                <div className="content">
                  <time dateTime={props.node.concertDate}>
                    <GoCalendar style={{transform: 'translateY(2px)'}} />
                    &nbsp;
                    {concertDate.toLocaleDateString(
                      props.node.node_locale, dateFormatOptions
                    )}
                    &emsp;
                    <GoClock style={{transform: 'translateY(2px)'}} />
                    &nbsp;
                    {concertDate.toLocaleTimeString(
                      props.node.node_locale, timeFormatOptions
                    )}
                  </time>
                </div>
                {// warning wrong time zone
                  Intl.DateTimeFormat().resolvedOptions().timeZone !== "America/Vancouver" && 
                    <p className="has-text-warning">
                      Warning: set your time zone to 'America/Vancouver' to see the proper time
                    </p>
                }
              </div>

              {/* buy button */}
              <div className="content">
                <BuyButton href={props.node.ticketsUrl} label={t('buyTicket')} />
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