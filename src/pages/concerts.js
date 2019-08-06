import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Concert from '../components/concert'
import Hero from '../components/hero'
import labels from '../constants/concert'

const ConcertsPage = ({pageContext: { locale, langtag }, data}) => {

  const futureConcerts =  data.concert.edges.filter((edge)=> {
    return (new Date() <= new Date(edge.node.concertDate))
  })
  const formerConcerts =  data.concert.edges.filter((edge)=> {
    return (new Date() > new Date(edge.node.concertDate))
  })
  
  // translation rendering helper function
  const t = (label) => labels[label][langtag]

  return (
    <Layout path="/concerts" locale={locale} langtag={langtag}>
      <Hero
        imgFluid={data.file.childImageSharp.fluid}
        title='Concerts'
      />
      {/* comming concert page content */}
      <article className="section">

        {/* comming concert page content divider */}
        <div
          className="is-divider"
          data-content={ 
            futureConcerts.length > 1 
              ? t('nextConcerts') : t('nextConcert')}
        ></div>

        { // print coming concerts
          futureConcerts.reverse().map((edge, idx) => {
            return (<Concert key={idx} courant langtag {...edge.node} />)
          })
        }
      </article>

      {/* former concerts page content */}
      <article className="section">
        
        {/* former concert page divider */}
        <div
          className="is-divider"
          data-content={t('pastConcerts')}>
        </div>

        { // print former concerts
          formerConcerts.map((edge, idx) => {
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
