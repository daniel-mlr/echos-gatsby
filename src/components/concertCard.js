import React from 'react'
// import PropTypes from 'prop-types'
import localStyle from './concertCard.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const ConcertCard = () => {
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

  const concert = concerts.allContentfulConcerts.edges[0].node

  console.log('--- concerts ---', concerts)

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

    <section className={localStyle.mainContainer}>
      <div className={localStyle.imgContainer}>
        <img src={concert.poster.file.url} alt={concert.poster.title} />
      </div>
      <div className={localStyle.contentContainer}>
        <h2>{concert.concertName}</h2>
        <p>{concert.announcementDate}</p>
        {documentToReactComponents(concert.description.json, options)}
        <button type="submit">Billets / Tickets</button>
      </div>
    </section>
  )
}

// ConcertCard.propTypes = {
//   name: PropTypes.string,
//   date: PropTypes.string,
//   content: PropTypes.array,
//   imgUrl: PropTypes.string
// }

export default ConcertCard