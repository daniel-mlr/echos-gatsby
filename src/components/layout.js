import React from 'react'
import Footer from './footer'
import PropTypes from 'prop-types'
import '../styles/style.scss'
import BurgerMenu from '../components/burgerMenu'

const {
  Provider: LocaleProvider,
  Consumer: LocaleConsumer
} = React.createContext()

const Layout = ({children, path, locale, langtag}) => {
  // console.log('locale layout',locale)
  return (    
    <LocaleProvider value={locale}>
      
      <div className="container">
        <BurgerMenu path={path} langtag={langtag}/>
        {children}
        
        <Footer/>
      </div>
    </LocaleProvider>
  
  )
}

export { LocaleConsumer }

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  path: PropTypes.string,
  locale: PropTypes.string.isRequired
}

Layout.defaultProps = {
  path: '/'
}

export default Layout
