import React from 'react'
// import localStyle from './blogGridCard.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import ConcertCard from '../components/concertCard'

const ConcertGridCard = () => {
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
            slug
            ticketsUrl
          }
        }
      }
    }
  `)

  // console.log('@@@@@', concertData.allContentfulConcerts.edges)
  return (
    <section className="section">
      <div className="container mt-10 mb-50">
        <div className="label">
          <div className="label-item has-text-centered">
            <hr/>
            <p className="title is-5">NOTRE PROCHAIN CONCERT</p>
          </div>
        </div>
      </div>
      {/* to do: filter in the query */}
      {
        concertData.allContentfulConcerts.edges
          .filter((edge, idx) => new Date(edge.node.concertDate) >= new Date())
          .map((edge, idx) => {
            return (
              <ConcertCard
                key={idx}
                concertName={edge.node.concertName}
                concertDate={edge.node.concertDateFormated}
                artisticDirection={edge.node.artisticDirection}
                pianiste={edge.node.pianiste}
                participation={edge.node.participation}
                summary={edge.node.summary.summary}
                poster={edge.node.poster}
                slug={edge.node.slug}
                ticketsUrl={edge.node.ticketsUrl}
              ></ConcertCard>
            )
          })
      }
    </section>
  )
}

export default ConcertGridCard
