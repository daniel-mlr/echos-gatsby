import React from 'react'
// import localStyle from './blogGridCard.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import ConcertCard from '../components/concertCard'

const ConcertGridCard = ({title}) => {
  const concertData = useStaticQuery(graphql`
    query {
      allContentfulConcerts (sort: {fields: concertDate, order: ASC}) {
        edges {
          node {
            concertName
            concertDateFormated: concertDate (formatString: "MMMM Do, YYYY")
            concertDate
            artisticDirection
            pianiste
            participation
            summary { summary }
            poster { 
              title 
              description
             # fixed(width: 300, height: 300) {
             #   ...GatsbyContentfulFixed
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            prix
            slug
            ticketsUrl
            node_locale
          }
        }
      }
    }
  `)

  // console.log('@@@@@', concertData.allContentfulConcerts.edges)
  return (
    <section className="section">
      <div
        className="is-divider"
        data-content={title}>
      </div>
      {
        concertData.allContentfulConcerts.edges
          .filter((edge) => edge.node.node_locale === 'en-US')
          .filter((edge) => new Date(edge.node.concertDate) >= new Date())
          .map((edge, idx) => {
            return (
              <ConcertCard node={edge.node} key={idx} />
            )
          })
      }
    </section>
  )
}

export default ConcertGridCard
