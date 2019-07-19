import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ConcertCard from '../components/concertCard'
import { Container, Section, Heading } from "react-bulma-components/full";
import localStyle from "./concertGridCard.module.scss"

const ConcertGridCard = () => {
  const concertData = useStaticQuery(graphql`
    query {
      allContentfulConcerts (limit:1, sort: {fields: concertDate, order: DESC}) {
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

  return (
    <Section>
      <Container>
        <Heading 
          renderAs="p"
          className={localStyle.headerSection}>
          NOTRE PROCHAIN CONCERT
        </Heading>
     </Container>
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
    </Section>
    
  )
}

export default ConcertGridCard
