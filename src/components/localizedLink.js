import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import locales from '../constants/locales'
import { LocaleConsumer } from './layout'

const LocalizedLink = ({ to, ...props }) => (
  <LocaleConsumer>
    {locale => {
      const path = locales[locale].default ? to : `/${locale}${to}`
      return <Link {...props} to={path} />
    }}
  </LocaleConsumer>
)

LocalizedLink.propTypes = {
  to: PropTypes.string.isRequired
}

export default LocalizedLink