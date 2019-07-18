import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image'
import { Hero } from 'react-bulma-components'
import BackgroundImage from 'gatsby-background-image'

const Jumbotron = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          hero { main, sub}
        }
      }
      file(name: {eq: "nom_femme-crop-1920x1200"}) {
      # file(name: {eq: "Echo_Choir_1920x1200"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }  
    }
  `)

  // in the image directory, there are other potential images (1900x1200)
  // if we want to make a carousel (fade-in-out would be preferred, rather
  // than sliding).

  return (
    <Hero size="large" color="transparent">
      <BackgroundImage
        Tag="div"
        className="test-bg-img"
        fluid={data.file.childImageSharp.fluid}
        backgroundColor={'#999'}
      >
        <Hero.Body>
          <h1>Hello Background image!!!</h1>
          <p>heheheh</p>
          <p>heheheh</p>
          <p>heheheh</p>
        </Hero.Body>
      </BackgroundImage>
    </Hero>


  // <section className="hero is-light hero-has-bg">
  //   <Img 
  //     fluid={data.file.childImageSharp.fluid} 
  //     className="hero-bg"
  //     imgStyle={{
  //       objectPosition: 'top',
  //     }}
  //   />

  //   <div className="hero-body hero-content">
  //     <div className="container">
  //       <h1 className="title has-text-blue">LES ÉCHOS<br/>DU PACIFIQUE</h1>
  //       <h2 className="subtitle">
  //         La chorale francophone de <span className="has-text-orange">Vancouver</span>
  //       </h2>
  //     </div>
  //   </div>
  // </section>
  )
}

export default Jumbotron