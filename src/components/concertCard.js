import React from 'react'
import localStyle from './concertCard.module.scss'

const ConcertCard = (props) => {
return (

  <section className={localStyle.mainContainer}>
    <div className={localStyle.imgContainer}>
      <img src={props.imgUrl}></img>
    </div>
    <div className={localStyle.contentContainer}>

      <h2>{props.name}</h2>
      <p>{props.date} </p>
      <p>{props.content} </p>
      <button type="submit">Billets / Tickets</button>
    </div>
  </section>
)}

export default ConcertCard