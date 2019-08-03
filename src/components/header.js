import React from 'react'
// import { Link} from 'gatsby'
import LocalizedLink from './localizedLink'
import headerStyles from './header.module.scss'
import HeaderNav from './headerNav'
import LangSwitcher from './langSwitcher'


const Header = ({path, langtag}) => {
 
  return (
    <header className={headerStyles.header}>
      <LocalizedLink to="/">
        <img
          className={headerStyles.logo}
          src='https://res.cloudinary.com/danielmeilleurimg/image/upload/v1562662608/echos/Les_Echos_du_Pacifique_logo_color_1200x800-13.png'
          alt='logo'
        />
      </LocalizedLink>
      <HeaderNav langtag={langtag}/>

      {/* language switcher */}
      {/* <span className={headerStyles.lang}> */}
      <span className="is-hidden-mobile">
        <LangSwitcher path={path}></LangSwitcher>
      </span>
      
    </header>
  )
}

export default Header
