import React from 'react'
import Img from 'gatsby-image'

const Hero = (props) => {
  return (
    <section className="hero has-background">
      <Img
        fluid={props.imgFluid}
        className="hero-background"
        imgStyle={{
          objectPosition: 'top',
        }}
      />
      <div className="hero-body">
        <div className="container semi-transparent-dark">
          <h2 className="hero-secondary has-text-white is-family-title is-uppercase">
            {props.title}
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero