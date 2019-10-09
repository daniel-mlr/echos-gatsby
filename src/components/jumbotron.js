import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel'

const Jumbotron = () => {
  
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          hero {
            main
            sub
          }
        }
      }
      assets: allContentfulAsset 
      (
        filter: {
          title: {regex: "/^Carousel/"}
          node_locale: {eq: "en-US"}
        }
        sort: {fields: title}
      )
      {
        edges {
          node {
            id
            file { url }
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `)

  const carouselOptions = {
    showThumbs: false,
    showStatus: false,
    infiniteLoop: true,
    autoPlay: true,
    stopOnHover: false,
    interval: 8000,
    transitionTime: 900,
    emulateTouch: false,
  }

  return (
    <section className="hero is-full-height has-background">
      
      <Carousel {...carouselOptions}>
        {data.assets.edges.map(edge => (
          <Img
            key={edge.node.id}
            fluid={edge.node.fluid}
            className="hero-background"
            imgStyle={{
              objectPosition: "top",
            }}
          />
        ))}
      </Carousel>
    
      <div className="hero-body">
        <div className="container semi-transparent-light">
          <h1 className="site-name">
            LES ÉCHOS
            <br />
            <span id="site-name2">DU PACIFIQUE</span>
          </h1>
          <h2 className="subtitle site-subname">
            La chorale francophone <br />
            du{" "}
            <span className="site-vancouver">
              Grand Vancouver
            </span>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Jumbotron