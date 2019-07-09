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
            concertDate
            artisticDirection
            pianiste
            participation
            summary { summary }
            poster { 
              title 
              description
              fluid(maxWidth: 500) {
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
  console.log('@@@@@', concertData.allContentfulConcerts.edges)
  return (
    <section>
      {/* to do: filter in the query */}
      {
        concertData.allContentfulConcerts.edges
        .filter((edge, idx) => new Date(edge.node.concertDate) >= new Date() )
        .map((edge, idx)=> {
          return (
            <ConcertCard
              key={idx}
              concertName={edge.node.concertName}
              concertDate={edge.node.concertDate}
              artisticDirection={edge.node.artisticDirection}
              pianiste={edge.node.pianiste}
              participation={edge.node.participation}
              summary={edge.node.summary.summary}
              imgFluid={edge.node.poster}
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