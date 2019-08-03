import React from 'react'
import ConcertCard from '../components/concertCard'

const ConcertGridCard = ({title, buttonText, data}) => {

  return (
    <section className="section">
      <div
        className="is-divider"
        data-content={title}>
      </div>
      {
        data.edges
          .filter((edge) => {
            return (new Date(edge.node.concertDate) >= new Date())
          }) 
          .map((edge, idx) => {
            return (
              <ConcertCard
                buttonText={buttonText}
                node={edge.node} key={idx}
              />
            )
          })
      }
      {/* <ConcertCard buttonText={buttonText} node={data.edges[0].node} /> */}
    </section>
  )
}

export default ConcertGridCard