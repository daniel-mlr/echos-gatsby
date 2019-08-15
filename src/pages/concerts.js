import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SectionDivider from '../components/sectionDivider'
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
        title='CONCERTS'
      />
      {/* comming concert page content */}
      <article className="section">

        <SectionDivider label={futureConcerts.length > 1
          ? t('nextConcerts')
          : t('nextConcert')}
        />

        { // print coming concerts, date ascending order
          futureConcerts.reverse().map((edge, idx) => 
            <Concert key={idx} courant langtag {...edge.node} />
          )
        }

      </article>

      {/* former concerts page content */}
      <article className="section">
        
        <SectionDivider label={t('pastConcerts')} />

        { // print former concerts
          formerConcerts.map((edge, idx) => 
            <Concert key={idx} {...edge.node} />
          )
        }

      </article>
      
    </Layout>
  )
}

export const query = graphql`
query ($langtag: String = "fr-CA"){
  concert:allContentfulConcerts (
    filter: {node_locale: { eq: $langtag }}
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
        adultFare
        studentAndOldAgeFare
        childFare
        ticketsUrl
        node_locale
        lieu1
        lieu2
        lieuUrl { lieuUrl }
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