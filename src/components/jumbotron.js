import React from 'react'
import { Link , useStaticQuery } from 'gatsby'

import localStyle from './jumbotron.module.scss'

const Jumbotron = () => {

return (

    <section className={localStyle.section}>
      <div className={localStyle.content}>
        <h1>Concert Season</h1>
      </div>
    </section>
  )
}

export default Jumbotron