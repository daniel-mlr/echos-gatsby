import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
// import ConcertCard from '../components/concertCard'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import { FaSignLanguage } from 'react-icons/fa';
import Img from 'gatsby-image'

const ConcertsPage = () => {
  const concerts = useStaticQuery(graphql`
    query {
      allContentfulConcerts ( sort: {fields: concertDate, order: DESC}) {
          edges {
            node {
              concertName
              subtitle
              announcementDate
              concertDate
              artisticDirection
              pianiste
              participation
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
            } next {
              concertDate
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
          <article key={idx}>
            <a name={edge.node.slug}></a>
            <p>{edge.node.concertName}</p>
            <p>{edge.node.subtitle}</p>
            <p>{edge.node.concertDate}</p>
            <p>Artistic Direction: {edge.node.artisticDirection}</p>
            <p>Pianiste: {edge.node.pianiste}</p>
            <p>{edge.node.subtitle}</p>
            {edge.node.participation && edge.node.participation.map((p, idx) => {
              return (
                <p key={idx}>{p}</p>
              )
            })}
            <Img fluid={edge.node.poster.fluid } alt={edge.node.poster.description} />
            {documentToReactComponents(edge.node.description.json, options)}
            {(
               new Date(edge.node.concertDate) >= new Date()
             ) && 
              <p>achetez billets</p>
            }
            <hr/>
          </article>
        )
      })}
    </Layout>
  )
}
export default ConcertsPage
