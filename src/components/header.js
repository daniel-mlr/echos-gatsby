import React from 'react'
import { Link , graphql, useStaticQuery } from 'gatsby'
// import '../styles/settings.scss'
import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        author
        menuItems {
          home
          concerts
          pratiques
          nouvelles
          contact
          about
        }
      }
    }
  }
  `)
  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.navigation}>
        <Link className={headerStyles.title} to="/">
          <span className={headerStyles.logo}>Logo</span>
          <h1 className={headerStyles.sitename}>
            {data.site.siteMetadata.title}
          </h1>
        </Link>
        <div className={headerStyles.spacer}/>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/">{data.site.siteMetadata.menuItems.home}
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/concerts">{data.site.siteMetadata.menuItems.concerts}
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact">{data.site.siteMetadata.menuItems.contact}
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog">{data.site.siteMetadata.menuItems.nouvelles}
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about">{data.site.siteMetadata.menuItems.about}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
