import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import localStyle from './jumbotron.module.scss'

const Jumbotron = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        hero { main, sub}
      }
    }
  }
  `)
  return (

    <section className={localStyle.section}>
      <div className={localStyle.content}>
        <h1>{data.site.siteMetadata.hero.main}</h1>
        <h2>{data.site.siteMetadata.hero.sub}</h2>
      </div>
    </section>
  )
}

export default Jumbotron