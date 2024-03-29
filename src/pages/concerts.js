import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import SectionDivider from '../components/sectionDivider'
import Concert from '../components/concert'
import Hero from '../components/hero'
import labels from '../constants/concert'

const ConcertsPage = ({pageContext: { locale, langtag }, data}) => {

  // translation rendering helper function
  const t = (label) => labels[label][langtag]

  // future concerts to be rendered on top of section of concert page
  const futureConcerts =  data.concert.edges.filter((edge)=> {
    return (new Date() <= new Date(edge.node.concertDate)
    & new Date(edge.node.announcementDate) < new Date())
  })
  // former concerts to be rendered in the section after future concerts
  const formerConcerts =  data.concert.edges.filter((edge)=> {
    return (new Date() > new Date(edge.node.concertDate))
  })

  // data to be passed down to components
  const path = '/concerts'
  const seoData = {
    title: t('seoConcertsTitle').concat(' | Les Échos du Pacifique'),
    meta: [
      { name: 'title', content: t('seoMetaTitleContent').concat(' | Les Échos') },
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: 'https://res.cloudinary.com/danielmeilleurimg/image/upload/c_scale,h_630,w_1200/v1560459372/echos/hero/tenors-sopranos3.jpg' }
    ],
    description: typeof futureConcerts[0] !== 'undefined' && futureConcerts[0].node.seoDescription
      ? futureConcerts[0].node.seoDescription.seoDescription
      : null,
    locale,
    path
  }
  const layoutData = {path, locale, langtag}

  return (
    <Layout {...layoutData}>
      <SEO {...seoData} />
      <Hero
        imgFluid={data.file.childImageSharp.fluid}
        alt=""
        title='CONCERTS'
      />

      {/* comming concert page content, if any */}
      {
        !!futureConcerts.length &&
        <article className="section">

          <SectionDivider
            label={futureConcerts.length > 1
              ? t('nextConcerts')
              : t('nextConcert')}
          />

          { // print coming concerts, date ascending order
            futureConcerts.reverse().map((edge, idx) =>
              <Concert key={idx} courant langtag {...edge.node} />
            )
          }

        </article>
      }

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
        seoDescription { seoDescription }
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
