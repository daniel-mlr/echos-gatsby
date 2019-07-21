import React from 'react'
import Footer from './footer'
import PropTypes from 'prop-types'
import '../styles/style.scss'
import BurgerMenu from '../components/burgerMenu'

const Layout = (props) => {
  return (
    <div className="">
      <BurgerMenu />
      {props.children}
      
      <Footer/>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
