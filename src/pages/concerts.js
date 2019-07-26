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
              node_locale
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
      <div className="section">
        <p>Hello</p>
      </div>
      <div
        className="is-divider"
        data-content="Nos prochain concert">
      </div>
      {concerts.allContentfulConcerts.edges
        .filter((edge) => edge.node.node_locale === 'en-US')
        .map((edge, idx) => {
          return (
            <article className="section" key={idx}>
              {/* <a name={edge.node.slug}></a> */}
              <h2 className="is-size-2">{edge.node.concertName}</h2>
              <h3 className="is-size-3">{edge.node.subtitle}</h3>
              <div className="columns">
                <div className="column is-one-third" style={{ maxWidth: '400px' }}>
                  <Img fluid={edge.node.poster.fluid} alt={edge.node.poster.description} />
                </div>
                <div className="column">
                  <p>{edge.node.concertDate}</p>
                  <p>Artistic Direction: {edge.node.artisticDirection}</p>
                  <p>Pianiste: {edge.node.pianiste}</p>
                  <p>{edge.node.subtitle}</p>
                  {edge.node.participation && edge.node.participation.map((p, idx) => {
                    return (
                      <p key={idx}>{p}</p>
                    )
                  })}
                </div>

              </div>
              {documentToReactComponents(edge.node.description.json, options)}
              {(
                new Date(edge.node.concertDate) >= new Date()
              ) &&
                <p>achetez billets</p>
              }
              <hr />
            </article>
          )
        })}
    </Layout>
  )
}
export default ConcertsPage