import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
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
      <Link to="/">
        <img
          className={headerStyles.logo}
          src='https://res.cloudinary.com/danielmeilleurimg/image/upload/v1562662608/echos/Les_Echos_du_Pacifique_logo_color_1200x800-13.png'
          alt='logo'
        />
      </Link>
      <nav className={headerStyles.navigation}>
        <Menu links={data.site.siteMetadata.menu} />
      </nav>
      {/* place holder for language switcher */}
      <div className={headerStyles.lang}>English</div>
    </header>
  )
}

export default Header