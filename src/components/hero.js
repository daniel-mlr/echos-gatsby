import React from 'react'
import Img from 'gatsby-image'

const Hero = (props) => {
  return (
    <section className="hero has-background">
      <Img
        fluid={props.imgFluid}
        alt={props.alt}
        className="hero-background"
        imgStyle={{
          objectPosition: 'top',
        }}
      />
      {
        props.title &&
        <div className="hero-body">
          <div className="container semi-transparent-dark">
            <h1 className="hero-secondary has-text-white is-family-title is-uppercase">
              {props.title}
            </h1>
          </div>
        </div>
      }
    </section>
  )
}

export default Hero
