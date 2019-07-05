import React from 'react'
import Header from './header'
import Footer from './footer'
import PropTypes from 'prop-types'
// import '../styles/index.scss'
import '../styles/style.scss'
// import layoutStyles  from './layout.module.scss'

const Layout = (props) => {
  return (
    // <div className={layoutStyles.container}>
    <div className="">
      {/* <div className={layoutStyles.content}> */}
      <div className="">
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