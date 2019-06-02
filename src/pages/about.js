import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"/>
      <h1>About</h1>
      <p>This is the about page.  Place to talk about choir story, location, etc.</p>
      <p><Link to="/contact">Venez à nos pratiques.</Link>
      </p>
    </Layout>
  )
}
export default AboutPage