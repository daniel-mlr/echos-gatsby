import React from 'react'
import Img from 'gatsby-image'

const Hero = (props) => {
  console.log('in the hero')
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
        <div className="container">
          <h2 className="title has-text-white">
            {props.title}
          </h2>
        </div>
      </div>
    </section>
  )
}
export default Hero
