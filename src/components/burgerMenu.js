import React from 'react'
import Menu from 'react-burger-menu/lib/menus/slide'
import Header from './header'
import {Link, graphql, useStaticQuery } from 'gatsby'

const BurgerMenu = () => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        menu { id, href, text }
      }
    }
  }
  `)

  return (

    <div id="outer-container" style={{height: '100%'}}>
      <Menu id={'slide'} 
        pageWrapId={'page-wrap'} 
        outerContainerId={'gatsby-focus-wrapper'} 
        right >
        {data.site.siteMetadata.menu.map(link => {
          return (
            <Link key={link.id} 
              to={link.href} 
              className="menu-item">
              <span>{link.text}</span></Link>
          )
        })}
    
      </Menu>
      <main id="page-wrap">
        <Header />
      </main>
    </div> 
  )
}

export default BurgerMenu