import React from 'react'
import ConcertCard from '../components/concertCard'
import AnnonceCard from '../components/annonceCard'
import labels from '../constants/concert'

const ConcertGridCard = ({langtag, concerts, annonces}) => {

  const futureConcerts = concerts.edges.filter((edge) => {
    return(new Date(edge.node.concertDate) >= new Date())
  })

  const currentAnnouncements = annonces.edges.filter((edge) => {
    return (new Date(edge.node.datePublication) <= new Date() 
    & new Date(edge.node.dateFinPublication) > new Date()
    )
  })

  // current announcements with concurrent flag on
  const concurrentAnnouncements = currentAnnouncements.filter((edge) => {
    return edge.node.publishConcurrently
  })
  
  // translation rendering helper function
  const t = (label) => labels[label][langtag]

  // if no future concerts, publish all current concurrentAnnouncements
  // (i.e.: all announcements starting before or at current date 
  //   and ending after current date)
  // render divider and concert announces if any

  if ( futureConcerts.length ) { // there are some concert comming

    return (
      <> 
      { /* if there are any concurrent announcements, print them */
        (!!concurrentAnnouncements.length) && (
          <section className="section" id="concurrent">
            { concurrentAnnouncements.map(
              (edge, idx) => <AnnonceCard key={idx} {...edge.node} />
            )}
          </section>
        )
      }

      {/* render the future concert section */}
      <section className="section">

        {/* concert divider */}
        <div
          className="is-divider"
          data-content={
            futureConcerts.length > 1 ? t('nextConcerts') : t('nextConcert')
          }></div>

        { // render concerts 
          futureConcerts.map(
            (edge, idx) => <ConcertCard node={edge.node} key={idx} />)
        }
      </section>
      </> 
    )
  } else { // there is no future concerts

    console.log('pas de futur concert')
    return (
      <>
        {
          currentAnnouncements && (
            <section className="section">
              {
                currentAnnouncements.map(
                  (edge, idx) => <AnnonceCard {...edge.node} key={idx} />
                )
              }
            </section>
          )
        }
      </>
    )
  }
} 

export default ConcertGridCard