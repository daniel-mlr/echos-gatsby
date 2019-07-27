import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import locales from '../constants/locales'

import { LocaleConsumer } from './layout'

const LocalizedLink = ({ to, ...props }) => (
  <LocaleConsumer>
    {locale => {
      // console.log('locale consumer',locale)
      // console.log('locales',locales)
      // console.log('locales key en',locales['en'])
      const path = locales[locale].default ? to : `/${locale}${to}`

      return <Link {...props} to={path} />
    }}
  </LocaleConsumer>
)

LocalizedLink.propTypes = {
  to: PropTypes.string.isRequired
}

export default LocalizedLink