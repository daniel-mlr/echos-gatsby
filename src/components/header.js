import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'
import Menu from './menu'

const Header = () => {
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
    <header className={headerStyles.header}>
      <nav className={headerStyles.navigation}>
        <Menu links={data.site.siteMetadata.menu} />
      </nav>
    </header>
  )
}

export default Header