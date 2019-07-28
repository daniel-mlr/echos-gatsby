import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import Concert from '../components/concert'
import Hero from '../components/hero'

const ConcertsPage = ({pageContext: { locale }}) => {
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
            } 
            # suivant: next {
            #   concertDate
            # }
          }
        } 
      file(name: {eq: "tenors-sopranos3_1920x592"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1366) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout path="/concerts" locale={locale}>
      <Hero imgFluid={concerts.file.childImageSharp.fluid} />
      <article className="section">
        <div
          className="is-divider"
          data-content="Nos prochain concert">
        </div>
        {
          concerts.allContentfulConcerts.edges
            .filter((edge) => (edge.node.node_locale === 'en-US') 
              & (new Date() <= new Date(edge.node.concertDate)))
            .map((edge, idx) => {
              console.log('concert date:', edge.node.concertDate)
              return (<Concert key={idx} courant {...edge.node} />)
            })
        }
      </article>
      <article className="section">
        <div
          className="is-divider"
          data-content="Nos précédents concert">
        </div>
        {
          concerts.allContentfulConcerts.edges
            .filter((edge) => (edge.node.node_locale === 'en-US') 
              & (new Date() > new Date(edge.node.concertDate)))
            .map((edge, idx) => {
              console.log('concert date:', edge.node.concertDate)
              return (<Concert key={idx} {...edge.node} />)
            })
        }
      </article>
    </Layout>
  )
}
export default ConcertsPage
