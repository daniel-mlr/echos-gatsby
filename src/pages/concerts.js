import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import ConcertCard from '../components/concertCard'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const ConcertsPage = () => {
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
      <p>This is the page where concerts will be announced</p>
      {concerts.allContentfulConcerts.edges.map((edge, idx) => {

        return (
          <ConcertCard
            key={idx}
            imgUrl={edge.node.poster.file.url}
            name={edge.node.concertName}
            date={edge.node.announcementDate}
            content={documentToReactComponents(edge.node.description.json, options)}
          />
        )
      })}
    </Layout>
  )
}
export default ConcertsPage
