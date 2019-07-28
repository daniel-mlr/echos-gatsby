import React from 'react'
import PropTypes from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'
import BuyButton from './buyButton'
import '../styles/concert.scss'

const Concert = (props) => {
  
  return (
    <section className="section notlastchild">
      <h2 className="title">{props.concertName}</h2>
      <h3 className="subtitle">{props.subtitle}</h3>
      <div className="columns">
        <div className="column is-one-third" style={{ maxWidth: '400px' }}>
          <Img fluid={props.poster.fluid} alt={props.poster.description} />
        </div>
        <div className="column">
          <div className="content">
            <p>{props.concertDate}</p>
            <p>Artistic Direction: {props.artisticDirection}</p>
            <p>Pianiste: {props.pianiste}</p>
            <p>{props.subtitle}</p>
            {
              props.participation &&
              <>
                <p>Artistes invités</p>
                <ul>{props.participation.map(
                  (p, key) => <li key={key}>{p}</li>
                )}</ul>
              </>
            }
            {props.courant && <BuyButton href={props.ticketsUrl} />}
          </div>
        </div>
      </div>
      <div className="content">
        {documentToReactComponents( props.description.json)}
      </div>
      {props.courant && <BuyButton href={props.ticketsUrl} />}
    </section>
  )}
  
Concert.propTypes = {
  name: PropTypes.string,
}
export default Concert