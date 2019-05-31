import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.css'
import PropTypes from 'prop-types'

const Layout = (props) => {
  Layout.propTypes = {
    children: PropTypes.children
  }
  return (
    <div>
      <Header/>
      {props.children}
      <Footer/>
    </div>
  )
}
export default Layout