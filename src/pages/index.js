import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <p>Mon nom est toujours Daniel</p>
      <p>Aimez-vous chanter? Venez chaner avec nous</p>
      <p> Vous pouvez nous contacter ici:<Link to="/contact">Contact</Link>
      </p>
    </Layout>
  )
}
export default IndexPage