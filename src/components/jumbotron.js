import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Jumbotron = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          hero { main, sub}
        }
      }
      file(name: {eq: "nom_femme-crop-1920x1200"}) {
      # file(name: {eq: "Echo_Choir_1920x1200_flop"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (

    <section className="hero is-primary is-full-height has-background">
      <Img
        fluid={data.file.childImageSharp.fluid}
        className="hero-background"
        imgStyle={{
          objectPosition: 'top',
        }}
      />
      <div className="hero-body">
        <div className="container">
          <h1 className="title site-name">LES ÉCHOS<br />DU PACIFIQUE</h1>
          <h2 className="subtitle site-subname">
            La chorale francophone de <span className="site-vancouver">Vancouver</span>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Jumbotron