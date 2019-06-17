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
      file(name: {eq: "tenors-sopranos3-crop-1920x1200"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }  
    }
  `)

  // return (
  //   <section className={localStyle.section}>
  //     <div className={localStyle.content}>
  //       <h1>{data.site.siteMetadata.hero.main}</h1>
  //       <h2>{data.site.siteMetadata.hero.sub}</h2>
  //     </div>
  //   </section>
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