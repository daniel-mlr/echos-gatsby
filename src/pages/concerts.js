import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Concert from '../components/concert'
import Hero from '../components/hero'

const ConcertsPage = ({pageContext: { locale, langtag }, data}) => {

  return (
    <Layout path="/concerts" locale={locale} langtag={langtag}>
      <Hero
        imgFluid={data.file.childImageSharp.fluid}
        title='Concerts'
      />
      <article className="section">
        <div
          className="is-divider"
          data-content="Nos prochain concert">
        </div>
        { // print coming concerts
          data.concert.edges
            .filter((edge)=> (new Date() <= new Date(edge.node.concertDate)))
            .reverse()
            .map((edge, idx) => {
              return (<Concert key={idx} courant {...edge.node} />)
            })
        }
      </article>
      <article className="section">
        <div
          className="is-divider"
          data-content="Nos précédents concert">
        </div>
        { // print former concerts
          data.concert.edges
            .filter((edge) => (new Date() > new Date(edge.node.concertDate)))
            .map((edge, idx) => {
              return (<Concert key={idx} {...edge.node} />)
            })
        }
      </article>
    </Layout>
  )
}

export const query = graphql`
query ($langtag: String = "fr-CA"){
  concert:allContentfulConcerts (
    filter: {node_locale: { eq: $langtag }}
    # sort: {fields: concertDate, order: ASC}
    sort: {fields: concertDate, order: DESC}
    ) 
  {
    edges {
      node {
        concertId
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
`

export default ConcertsPage
