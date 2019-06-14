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
        menu { id, href, text }
      }
    }
  }
  `)

  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.navigation}>
        <div className={headerStyles.navContainer}>
          <Link className={headerStyles.title} to="/">
            <img
              className={headerStyles.logo}
              src='https://res.cloudinary.com/danielmeilleurimg/image/upload/v1560419215/echos/Les-Echos-du-Pacifique_logo_alpha.png'
              alt='logo
              '/>
          </Link>
          <div>
            <ul className={headerStyles.navList}>
              {data.site.siteMetadata.menu.map(link => {
                return (
                <li>
                  <Link
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
                    to={link.href} >{link.text}
                  </Link>
                </li>    
                )
              })
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
