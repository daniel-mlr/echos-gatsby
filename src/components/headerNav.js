import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './headerNav.module.scss'
import LocalizedLink from './localizedLink';

const HeaderNav = () => {
  
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
    <nav className={headerStyles.navigation}>
      <div className={headerStyles.topnav}>
        {data.site.siteMetadata.menu.map(link => {
          
          return (
            <LocalizedLink
              to={link.href}
              key={link.id}
              activeClassName={headerStyles.active}
            >{link.text}</LocalizedLink>
          )})
        }
      </div>
    </nav>
  )
}

export default HeaderNav
