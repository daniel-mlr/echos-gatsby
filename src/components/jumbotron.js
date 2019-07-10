import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import localStyle from './jumbotron.module.scss'
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
    <BackgroundImage
      fluid={data.file.childImageSharp.fluid} 
      className={localStyle.section}
    >
      <h1>{data.site.siteMetadata.hero.main}</h1>
      <h2>{data.site.siteMetadata.hero.sub}</h2>
    </BackgroundImage>
  )
}

export default Jumbotron