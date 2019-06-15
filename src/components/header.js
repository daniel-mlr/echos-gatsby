import React from 'react'
import { Link , graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'
import Menu from './menu';

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
        {/* <Link className={headerStyles.title} to="/">
          <img
            className={headerStyles.logo}
            src='https://res.cloudinary.com/danielmeilleurimg/image/upload/v1560419215/echos/Les-Echos-du-Pacifique_logo_alpha.png'
            alt='logo
            '/>
        </Link>
         */}
          <Menu links={data.site.siteMetadata.menu} />
        
      </nav>
    </header>
  )
}

export default Header
