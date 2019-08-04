import React from 'react'
import Head from '../components/head'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import ConcertGridCard from '../components/concertGridCard'
import BlogGridCard from '../components/blogGridCard'
import { graphql } from 'gatsby'

const IndexPage = ({pageContext: { locale, langtag }, data}) => {

  return (
    <Layout path="/" locale={locale} langtag={langtag}>
      <Head title="Home" />
      <Jumbotron />
      <ConcertGridCard
        title={data.meta.edges[0].node.concertHeader1}
        // buttonText={data.meta.edges[0].node.readButtonText}
        buttonText={data.meta.edges[0].node.readDetail}
        data={data.concert}
      />
      <BlogGridCard
        title={data.meta.edges[0].node.blogName}
        data={data.blog}
        buttonText={data.meta.edges[0].node.readButtonText}
      />
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
  meta:allContentfulMetadata(filter: {node_locale: { eq: $langtag }} ){
      edges {
        node{
          blogName,
          concertHeader1,
          readButtonText
          readDetail
        }
      }
    },
  blog:allContentfulBlogues(
    filter: {node_locale: { eq: $langtag }}
    sort: { fields: publicationDate, order: DESC }
    limit: 4
  ) {
    edges {
      node {
        titre
        publicationDate(formatString: "MMM Do, YYYY")
        slug
        previewPicture { 
          title 
          description
          # fluid(maxWidth: 300) {
          fluid(maxWidth: 450) {
            ...GatsbyContentfulFluid
          }
        }
        summary { summary }
        body { json }
      }
    }
  }
  concert:allContentfulConcerts (
    filter: {
      node_locale: { eq: $langtag }
      # concertDate: { gte: $today}
    }
    sort: {fields: concertDate, order: ASC}
    # limit:1
    ) {
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
        prix
        slug
        ticketsUrl
        node_locale
      }
    }
  }
}
`

export default IndexPage