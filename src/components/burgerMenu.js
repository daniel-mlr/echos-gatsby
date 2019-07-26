import React from 'react'
import Menu from 'react-burger-menu/lib/menus/slide'
import Header from './header'
import {Link, graphql, useStaticQuery } from 'gatsby'
import LangSwitcher from './langSwitcher';

const BurgerMenu = ({path, locale}) => {

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
      
      <Menu disableAutoFocus 
        id={'slide'} 
        pageWrapId={'page-wrap'} 
        outerContainerId={'gatsby-focus-wrapper'} 
        right >
        {data.site.siteMetadata.menu.map(link => {
          return (
            <Link key={link.id} 
              to={link.href} 
              activeClassName="bm-menu-item-active"
            >
              {link.text}
            </Link>
          )
        })}
        <span className="bm-lan-sw">
          <LangSwitcher path={path}></LangSwitcher>
        </span>
      </Menu>
      <main id="page-wrap">
        <Header path={path} locale={locale} />
      </main>
    </div> 
  )
}

export default BurgerMenu
