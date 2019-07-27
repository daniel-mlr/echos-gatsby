import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import Concert from '../components/concert'

const ConcertsPage = () => {
  const concerts = useStaticQuery(graphql`
    query {
      allContentfulConcerts ( sort: {fields: concertDate, order: DESC}) {
          edges {
            node {
              concertName
              subtitle
              announcementDate
              concertDate
              artisticDirection
              pianiste
              participation
              summary { summary }
              description { json }
              poster {
                title
                description
                fluid (maxWidth: 500) {
                  ...GatsbyContentfulFluid
                }
              }
              slug
              ticketsUrl
              node_locale
            } next {
              concertDate
            }
          }
        } 
    }
  `)

  return (
    <Layout>
      <div className="section">
        <p>Hello</p>
      </div>
      <div
        className="is-divider"
        data-content="Nos prochain concert">
      </div>
      {
        concerts.allContentfulConcerts.edges
          .filter((edge) => edge.node.node_locale === 'en-US')
          .map((edge, idx) => {
            return (<Concert key={idx} {...edge.node} />)
          })
      }
    </Layout>
  )
}
export default ConcertsPage