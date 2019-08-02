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
        buttonText={data.meta.edges[0].node.readButtonText}
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

export const query = graphql`
query ($langtag: String = "fr-CA"){
  meta:allContentfulMetadata(filter: {node_locale: { eq: $langtag }} ){
      edges {
        node{
          blogName,
          concertHeader1,
          readButtonText
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
    filter: {node_locale: { eq: $langtag }}
    sort: {fields: concertDate, order: DESC}
    limit:1
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
