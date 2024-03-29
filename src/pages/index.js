import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import ConcertGridCard from '../components/concertGridCard'
import BlogGridCard from '../components/blogGridCard'
import { graphql } from 'gatsby'
import labels from '../constants/misc'
// import { Location } from '@reach/router'

const IndexPage = ({pageContext: { locale, langtag }, data}) => {

  // translation rendering helper function
  const t = (label) => labels[label][langtag]

  // data to be passed down to components
  const path = '/'
  const seoData = {
    title: t('seoHomeTitle').concat(' | Les Échos'),
    meta: [
      { name: 'title', content: t('seoMetaTitleContent').concat(' | Les Échos') },
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: 'https://res.cloudinary.com/danielmeilleurimg/image/upload/v1571885432/echos/hero/og_img_main.jpg' }
    ],
    description: '',
    locale,
    path
  }
  const layoutData = {path, locale, langtag}

  return (
    <Layout {...layoutData} >
      <SEO {...seoData} />
      <Jumbotron />
      <ConcertGridCard concerts={data.concert} annonces={data.annonces} langtag={langtag} />
      <BlogGridCard data={data.blog} langtag={langtag} />
    </Layout>
  )
}

// rules:
// only future date concerts must appear in home page
// if there are: they must be listed in ascending order
// (first happening listed first)

// const today = new Date()  // seemingly, variables to be used in query cannot be defined here
// so I am filtering the concerts by date in javascript

export const query = graphql`
query (
  $langtag: String = "fr-CA"
  #  $today: Date  ## do we have to create this variable in page context?
){
  annonces:allContentfulAnnonces (
    filter: {node_locale: {eq: $langtag}}
  )
  {
    edges {
      node {
        identifiant
        publishConcurrently
        node_locale
        datePublication
        dateFinPublication
        content { json }
        image {
          title
          description
          fixed(width: 128) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
  blog:allContentfulBlogues(
    filter: {node_locale: { eq: $langtag }}
    sort: { fields: publicationDate, order: DESC }
    limit: 4
  )
  {
    edges {
      node {
        titre
        publicationDate(formatString: "MMM Do, YYYY")
        slug
        previewPicture {
          title
          description
          fluid(maxWidth: 450) {
            ...GatsbyContentfulFluid
          }
        }
        summary { summary }
        body { json }
        node_locale
      }
    }
  }
  concert:allContentfulConcerts (
    filter: {
      node_locale: { eq: $langtag }
      # concertDate: { gte: $today}
    }
    sort: {fields: concertDate, order: ASC}
    ) {
    edges {
      node {
        concertName
        # concertDateFormated: concertDate (formatString: "MMMM Do, YYYY")
        concertDate
        announcementDate
        artisticDirection
        pianiste
        participation
        summary { summary }
        poster {
          title
          description
          fluid (maxWidth: 500) {
            ...GatsbyContentfulFluid
          }
        }
        # prix
        slug
        ticketsUrl
        node_locale
      }
    }
  }
}
`

export default IndexPage
