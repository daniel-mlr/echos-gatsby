import React from 'react'
import ConcertCard from '../components/concertCard'

const ConcertGridCard = ({title, buttonText, data}) => {

  const futureConcerts = data.edges.filter((edge) => {
    return(new Date(edge.node.concertDate) >= new Date())
  })

  return (
    <section className="section">
      <div
        className="is-divider"
        data-content={title}>
      </div>
      {
        futureConcerts.map((edge, idx) => {
          return (
            <ConcertCard
              buttonText={buttonText}
              node={edge.node} key={idx}
            />
          )
        })
      }
    </section>
  )
}

export default ConcertGridCard