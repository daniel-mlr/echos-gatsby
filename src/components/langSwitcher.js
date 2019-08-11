import React from 'react'
import {Link} from 'gatsby'
import localStyles from './langSwitcher.module.scss'
import locales from '../constants/locales'

const LangSwitcher = ({path}) => {
  // console.log('locale dans lswitcher:', locale)
  return (

    <span className={localStyles.langContainer}>

      {/* to do: only show the link for the other language */}
      {/* <Link to=""> </Link> */}

      {Object.keys(locales).map(key => (
        <span key={locales[key].locale}>
          <Link
            to={locales[key].default ? path : `/${locales[key].path}${path}`}
            className={localStyles.lang}
          >
            {locales[key].label}
          </Link>
        </span>
      ))}

    </span>

  )
}

export default LangSwitcher
