import React from 'react'
// import { Link} from 'gatsby'
import LocalizedLink from './localizedLink'
// import headerStyles from './header.module.scss'
import HeaderNav from './headerNav'
import LangSwitcher from './langSwitcher'


const Header = ({path, langtag}) => {
 
  return (
    // <header className={headerStyles.header}>
    <header className="header">
      <LocalizedLink to="/">
        <img
          // className={headerStyles.logo}
          className="logo"
          // src='https://res.cloudinary.com/danielmeilleurimg/image/upload/v1562662608/echos/Les_Echos_du_Pacifique_logo_color_1200x800-13.png'
          // src='https://res.cloudinary.com/danielmeilleurimg/image/upload/c_scale,w_200/v1562662608/echos/Les_Echos_du_Pacifique_logo_color_1200x800-13.png'
          // src='https://res.cloudinary.com/danielmeilleurimg/image/upload/v1565391515/echos/logo/logo_final_437x200.png'
          src='https://res.cloudinary.com/danielmeilleurimg/image/upload/c_scale,w_400/v1565391864/echos/logo/Les_Echos_du_Pacifique_logo_color_1200x800-13.png'
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
