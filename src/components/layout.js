import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import PropTypes from 'prop-types'
import layoutStyles  from './layout.module.scss'
import { graphql, useStaticQuery } from 'gatsby'


const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout