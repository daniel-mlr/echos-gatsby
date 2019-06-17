import React from 'react'
// import { Link , useStaticQuery } from 'gatsby'

import localStyle from './jumbotron.module.scss'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby';

const Jumbotron = () => {

  const data = useStaticQuery(graphql` 
  query{
    file(name: {eq: "tenors-sopranos3-crop-1920x1200"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }  
  }
  `)
  
  return (
    <BackgroundImage  fluid={data.file.childImageSharp.fluid} 
                    className={localStyle.section}>
      <h1>Concert Season</h1>
    </BackgroundImage>
  )
}

export default Jumbotron