import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>This is the about page.  Place to talk about choir story, location, etc.</p>
      <p><Link to="/contact">Venez à nos pratiques.</Link>
      </p>
    </Layout>
  )
}
export default AboutPage
