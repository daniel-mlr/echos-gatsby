import React from 'react'
import { Link , graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)
  return (
    <div>
      <header className={headerStyles.header}>
        <h1>
          <Link className={headerStyles.title} to="/">
            {data.site.siteMetadata.title}
          </Link>
        </h1>
        <ul className={headerStyles.navList}>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/concerts">Concerts</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
        </ul>
      </header>
    </div>
  )
}

export default Header
