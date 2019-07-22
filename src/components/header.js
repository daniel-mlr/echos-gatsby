import React from 'react'
import { Link} from 'gatsby'
import headerStyles from './header.module.scss'
import HeaderNav from './headerNav'

const Header = () => {
 
  return (
    <header className={headerStyles.header}>
      <Link to="/">
        <img
          className={headerStyles.logo}
          src='https://res.cloudinary.com/danielmeilleurimg/image/upload/v1562662608/echos/Les_Echos_du_Pacifique_logo_color_1200x800-13.png'
          alt='logo'
        />
      </Link>
      <HeaderNav/>

      {/* place holder for language switcher */}
      <div className={headerStyles.lang} style={{visibility:'hidden'}} >English</div>


    </header>
  )
}

export default Header
