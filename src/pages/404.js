import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import labels from '../constants/misc'

const NotFound = ({pageContext: { locale, langtag }}) => {
  console.log('langtag:', langtag)
  return (
    <Layout path="/" locale={locale} langtag={langtag}>
      <Head title="404"/>
      <article className="message is-danger">
        <div className="message-header">{labels['pageNotFound'][langtag]}</div>
        <div className="message-body">
          Pas de contenu ici
        </div>
      </article>
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </Layout>
  )
}
export default NotFound
