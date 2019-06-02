import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Address and phone number, etc.</p>
      <p>
        <a href="https://twitter.com/ChoeurLesEchos" rel="noopener noreferrer" target="_blank">Our Twitter</a>
      </p>
    </Layout>
  )
}
export default ContactPage