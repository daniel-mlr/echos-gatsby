import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = ({pageContext: { locale }}) => {
  return (
    <Layout path="/" locale={locale}>
      <Head title="404"/>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </Layout>
  )
}
export default NotFound
