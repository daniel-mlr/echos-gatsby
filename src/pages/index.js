import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello</h1>
      <p>Mon nom est toujours Daniel</p>
      <p>Aimez-vous chanter? Venez chaner avec nous</p>
      <p> Vous pouvez nous contacter ici:<Link to="/contact">Contact</Link>
      </p>
    </Layout>
  )
}
export default IndexPage