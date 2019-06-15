import React from 'react'
import Head from '../components/head'
import Layout from '../components/layout'
// // import homeStyles from './index.module.scss'
// import { FaBeer, FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Jumbotron from '../components/jumbotron'
import ConcertCard from '../components/concertCard'
import BlogGridCard from '../components/blogGridCard'

const IndexPage = () => {
  const concerts = useStaticQuery(graphql`
    query {
      allContentfulConcerts {
        edges {
          node {
            concertName
            announcementDate(formatString: "Do MMMM YYYY")
            description { json }
            poster { 
              title 
              description
              file {
                url
              }
            }
            callToAction
          }
        }
      }
    }
`)
  const options = {
    renderNode: {
      // eslint-disable-next-line react/display-name
      'embedded-asset-block': (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      },
    }
  }

  return (
    <Layout>
      <Head title="Home" />
      <Jumbotron />
      <ConcertCard imgUrl={concerts.allContentfulConcerts.edges[0].node.poster.file.url}
        name={concerts.allContentfulConcerts.edges[0].node.concertName}
        date={concerts.allContentfulConcerts.edges[0].node.announcementDate}
        content={
          documentToReactComponents(
            concerts.allContentfulConcerts.edges[0].node.description.json, options
          )
        } />
        
      <BlogGridCard></BlogGridCard>
    </Layout>
  )
}
export default IndexPage