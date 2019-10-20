import React from 'react'
import {Link} from 'gatsby'
import localStyles from './langSwitcher.module.scss'
import locales from '../constants/locales'

const LangSwitcher = ({path, langtag}) => {

  return (

    <span>
      {
        Object.keys(locales)
          .filter(key => locales[key].locale !== langtag)
          .map(key => (
            <span key={locales[key].locale}>
              <Link
                to={locales[key].default ? path : `/${locales[key].path}${path}`}
                className={localStyles.lang}
              >
                {locales[key].label}
              </Link>
            </span>
          ))
      }

    </span>

  )
}

export default LangSwitcher