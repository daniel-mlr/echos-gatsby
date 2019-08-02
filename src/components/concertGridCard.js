import React from 'react'

import ConcertCard from '../components/concertCard'

const ConcertGridCard = ({title, buttonText, data}) => {
  console.log('data',data)
  return (
    <section className="section">
      <div
        className="is-divider"
        data-content={title}>
      </div>
      <ConcertCard buttonText={buttonText} node={data.edges[0].node} />
    </section>
  )
}

export default ConcertGridCard
