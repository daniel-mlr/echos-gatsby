import React from 'react'
import PropTypes from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'
import BuyButton from './buyButton'
import LocalizedLink from './localizedLink'
import '../styles/concert.scss'
import labels from '../constants/concert'
import { GoCalendar, GoClock } from 'react-icons/go'

const Concert = (props) => {
  
  // date renderings
  const concertDate = new Date(props.concertDate)
  const dateFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
  }
  const timeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric'
  }

  // translation rendering helper function
  const t = (label) => labels[label][props.node_locale]
  
  return (
    <section className="section lastchild" name={props.concertId}>
      {/* header of the concert, on top of the 2 columns */}
      <h2 className="title">{props.concertName}</h2>
      <h3 className="subtitle">{props.subtitle}</h3>
      
      <div className="columns">
        
        {/* left column: picture */}
        <div className="column is-one-third" style={{ maxWidth: '400px' }}>
          <Img fluid={props.poster.fluid} alt={props.poster.description} />
        </div>
        
        {/* right column: concert info */}
        <div className="column">
          <div className="content">
            
            <p><span className="has-text-weight-bold">
              {t('directionArtistique')}:&ensp;
            </span>{props.artisticDirection}</p>
            
            <p><span className="has-text-weight-bold">
              {t('pianiste')}:&ensp;
            </span> {props.pianiste}</p>

            { /* conditional participation list */
              props.participation &&
              <>
                <p className="has-text-weight-bold">
                  {t('artistesInvites')}:&ensp;</p>
                <ul>{props.participation.map(
                  (p, key) => <li key={key}>{p}</li>
                )}</ul>
              </>
            }

            {/* concerts ticket prices */}
            <div className="content fare">
              <div className="is-pulled-left">
                <p><span className="has-text-weight-medium">
                  {t('adult')}:</span>&nbsp;${
                  parseInt(props.adultFare).toFixed(2)}</p>
              </div>
              <div className="is-pulled-left">
                <p><span className="has-text-weight-medium">
                  {t('student')}:</span>&nbsp;
                ${parseInt(props.studentAndOldAgeFare).toFixed(2)}
                </p>
              </div>
              <div >
                <p><span className="has-text-weight-medium">
                  {t('child')}:</span>&nbsp;${
                  parseInt(props.childFare).toFixed(2)
                }</p>
              </div>
            </div>

            {/* concert date */}
            <div className="content">
              <time dateTime={props.concertDate}>
                <span style={{whiteSpace: 'nowrap'}}>
                  <GoCalendar style={{ transform: 'translateY(2px)'}} /> {
                    concertDate.toLocaleDateString(
                      props.node_locale, dateFormatOptions
                    )}
                </span>
                &emsp;
                <span style={{ whiteSpace: 'nowrap' }}>
                  <GoClock style={{ transform: 'translateY(2px)' }} /> {
                    concertDate.toLocaleTimeString(
                      props.node_locale, timeFormatOptions
                    )}
                </span>
              </time>
            </div>

            { /* conditional buy button */
              props.courant && <BuyButton
                href={props.ticketsUrl}
                label={t('buyTicket')} />
            }
          </div>
        </div>
      </div>

      {/* concert summary */}
      <div className="box is-italic is-family-secondary">
        {props.summary.summary}
      </div>
      
      {/* concert full description */}
      <div className="content">
        {documentToReactComponents( props.description.json)}
      </div>
      
      {props.courant && <BuyButton
        href={props.ticketsUrl} label={t('buyTicket')} />}
        
      <div className="content" style={{ paddingTop: '1.5rem' }}>
        <LocalizedLink to="/">{t('backToMain')}</LocalizedLink>
      </div>
    </section>
  )}
  
Concert.propTypes = {
  name: PropTypes.string,
}
export default Concert