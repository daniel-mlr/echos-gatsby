import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './headerNav.module.scss'

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
            <Link
              to={link.href}
              key={link.id}
              activeClassName={headerStyles.active}
            >{link.text}</Link>
          )})
        }
      </div>
    </nav>
  )
}

export default HeaderNav
