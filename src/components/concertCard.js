import React from 'react'
import localStyle from './concertCard.module.scss'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Content, 
        Columns, 
        Container,
        Heading } from "react-bulma-components/full";

const ConcertCard = (props) => {
  return (
    <Container>
      <Columns>
        <Columns.Column className="is-mobile is-four-fifths is-offset-1">
          <Columns>
            <Columns.Column style={{ textAlign: 'center' }}>
              <Img
                // fixed={props.poster.fixed}
                fluid={props.poster.fluid}
                alt={props.poster.description} />
            </Columns.Column>
            <Columns.Column>
              <Content>
                <Heading 
                  renderAs="p"
                  className={localStyle.headerSection}>
                  {props.concertName}
                </Heading>

                
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
              </Content>
            </Columns.Column>
          </Columns>
        </Columns.Column>
      </Columns>
    </Container>
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
