import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import headerStyles from './headerNav.module.scss'
import LocalizedLink from './localizedLink'

const HeaderNav = (params) => {
  
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menu { id, href, label {node_locale, text} }
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
            >{link.label.filter(key => key.node_locale === params.langtag )[0].text}</LocalizedLink>
          )})
        }
      </div>
    </nav>
  )
}

export default HeaderNav