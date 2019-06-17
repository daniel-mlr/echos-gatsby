import React from 'react'
import Head from '../components/head'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import ConcertCard from '../components/concertCard'
import BlogGridCard from '../components/blogGridCard'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Jumbotron />
      <ConcertCard />
      <BlogGridCard />
    </Layout>
  )
}
export default IndexPage