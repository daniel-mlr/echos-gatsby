import React from 'react'
import Head from '../components/head'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import ConcertGridCard from '../components/concertGridCard'
import BlogGridCard from '../components/blogGridCard'
import { graphql } from 'gatsby'

const IndexPage = ({pageContext: { locale }, data}) => {
  
  return (
    <Layout path="/" locale={locale}>
      <Head title="Home" />
      <Jumbotron />
      <ConcertGridCard
        title={data.meta.edges[0].node.concertHeader1}
      />
      <BlogGridCard
        title={data.meta.edges[0].node.blogName}
        data={data.blog}
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
          concertHeader1
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
}
`

export default IndexPage
