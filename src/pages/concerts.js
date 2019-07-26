import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
// import ConcertCard from '../components/concertCard'
// import {  BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import { FaSignLanguage } from 'react-icons/fa';
import Img from 'gatsby-image'
import '../styles/style.scss'

const ConcertsPage = ({pageContext: { locale }}) => {
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
  
  // const H4 = ({children}) => (
  //   <h4 className="has-background-warning">{children}</h4>
  // )
  // const options = {
  //   displayName: 'mesOptions',
  //   renderNode: {
  //     // eslint-disable-next-line react/display-name
  //     // 'embedded-asset-block': (node) => {
  //     //   const alt = node.data.target.fields.title['en-US']
  //     //   const url = node.data.target.fields.file['en-US'].url
  //     //   return <img alt={alt} src={url} />
  //     // },
  //     [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>
  //   },
  //   renderMark: {
  //   }
  // }

  return (
    <Layout path="/" locale={locale}>
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
              <h2 className="title">{edge.node.concertName}</h2>
              <h3 className="subtitle">{edge.node.subtitle}</h3>
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
              <div className="content">
                {documentToReactComponents(
                  // edge.node.description.json, options
                  edge.node.description.json
                )}
              </div>
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
