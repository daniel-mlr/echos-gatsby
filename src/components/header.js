import React from 'react'
import LocalizedLink from './localizedLink'
import HeaderNav from './headerNav'
import LangSwitcher from './langSwitcher'


const Header = ({path, langtag}) => {

  return (
    <header className="header">
      <LocalizedLink to="/">
        <img
          className="logo"
          src='https://res.cloudinary.com/danielmeilleurimg/image/upload/c_scale,w_400/v1565391864/echos/logo/Les_Echos_du_Pacifique_logo_color_1200x800-13.png'
          alt='logo'
        />
      </LocalizedLink>
      <HeaderNav langtag={langtag}/>

      {/* language switcher */}
      <span className="is-hidden-mobile">
        <LangSwitcher path={path} langtag={langtag} />
      </span>
    </header>
  )
}

export default Header
