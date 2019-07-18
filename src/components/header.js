import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'
import { Navbar } from 'react-bulma-components/full'

const NavbarItem = props => (
  <Link className="navbar-item is-capitalized" to={props.page}>
    {props.pagename}
  </Link>
)

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
    <Navbar>
      <Navbar.Brand>
        <Link className="navbar-item" to='/'>
          <img
            className={headerStyles.logo}
            src='https://res.cloudinary.com/danielmeilleurimg/image/upload/v1562662608/echos/Les_Echos_du_Pacifique_logo_color_1200x800-13.png'
            alt='logo'
          />
        </Link>
        <Navbar.Container>
          { 
            data.site.siteMetadata.menu.map(link => {
              return <NavbarItem page={link.href} pagename={link.text} key={link.id} />
            })
          }
        </Navbar.Container>
      </Navbar.Brand>
    </Navbar > 

  // <header className={headerStyles.header}>
  //   <Link to="/">
  //     <img
  //       className={headerStyles.logo}
  //       src='https://res.cloudinary.com/danielmeilleurimg/image/upload/v1562662608/echos/Les_Echos_du_Pacifique_logo_color_1200x800-13.png'
  //       alt='logo'
  //     />
  //   </Link>
  //   <nav className={headerStyles.navigation}>
  //     <Menu links={data.site.siteMetadata.menu} />
  //   </nav>
  //   {/* place holder for language switcher */}
  //   <div className={headerStyles.lang}>English</div>
  // </header>
  )
}

export default Header