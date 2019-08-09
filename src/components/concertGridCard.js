import React from 'react'
import ConcertCard from '../components/concertCard'
import labels from '../constants/concert'

const ConcertGridCard = ({langtag, concerts, annonces}) => {

  console.log('±±± concerts:', concerts)
  console.log('%%% annonces:', annonces)

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

  console.log('currentAnnouncements:', currentAnnouncements)
  console.log('concurrentAnnouncements:', concurrentAnnouncements)

  
  // translation rendering helper function
  const t = (label) => labels[label][langtag]
  // if no future concerts, publish all current concurrentAnnouncements
  // (i.e.: all announcements starting before or at current date 
  //   and ending after current date)
  // render divider and concert announces if any

  if ( futureConcerts.length ) { // there are concert comming
    return (
      <> 
        { // if there are concurrent announcements, print them
          concurrentAnnouncements && concurrentAnnouncements.map((edge, idx) => {
            return ( <div key={idx}>{'vraiment'}</div> )
          })
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
    return (
      <>
      {
        currentAnnouncements &&  (
          <div>{'vrai, quoi faire s\'il n\'y a pas de concerts'}</div>
        )
      }
      </>
    )
  }

} 


export default ConcertGridCard