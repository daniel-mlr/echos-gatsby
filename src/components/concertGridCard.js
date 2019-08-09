import React from 'react'
import ConcertCard from '../components/concertCard'
import labels from '../constants/concert'

const ConcertGridCard = ({langtag, data}) => {

  const futureConcerts = data.edges.filter((edge) => {
    return(new Date(edge.node.concertDate) >= new Date())
  })

  // translation rendering helper function
  const t = (label) => labels[label][langtag]

  return (
    
    // render divider and concert announces if any
    futureConcerts.length > 0 &&
    (
      <section className="section">

        {/* concert divider */}
        <div
          className="is-divider"
          data-content={
            futureConcerts.length > 1 ? t('nextConcerts') : t('nextConcert')
          }></div>

        {
          futureConcerts.map(
            (edge, idx) => <ConcertCard node={edge.node} key={idx} />)
        }
      </section>
    )
  )
}

export default ConcertGridCard