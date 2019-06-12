import React from 'react'
import { Link , graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'
// import { FaClosedCaptioning } from 'react-icons/fa'

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
        <div className={headerStyles.navContainer}>
          <Link className={headerStyles.title} to="/">
            <span className={headerStyles.logo}>Logo</span>
            <h3 className={headerStyles.sitenames}>
              {data.site.siteMetadata.title}
            </h3>
          </Link>
          <div>
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
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
