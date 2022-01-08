import React from 'react'
import Menu from 'react-burger-menu/lib/menus/slide'
import Header from './header'
import LocalizedLink from './localizedLink'
// import {Link, graphql, useStaticQuery } from 'gatsby'
import {graphql, useStaticQuery } from 'gatsby'
import LangSwitcher from './langSwitcher'

const BurgerMenu = ({path, langtag}) => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        menu { id, href, label { node_locale, text} }
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
            <LocalizedLink
              key={link.id}
              to={link.href}
              activeClassName="bm-menu-item-active"
            >
              {link.label.filter(key => key.node_locale === langtag )[0].text}
            </LocalizedLink>

          )
        })}
        <span className="bm-lan-sw">
          <LangSwitcher path={path} langtag={langtag} />
        </span>
      </Menu>

      <main id="page-wrap">
        <Header path={path} langtag={langtag} />
      </main>

    </div>
  )
}

export default BurgerMenu
