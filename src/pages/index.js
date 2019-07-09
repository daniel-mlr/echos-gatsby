import React from 'react'
import Head from '../components/head'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import ConcertGridCard from '../components/concertGridCard'
import BlogGridCard from '../components/blogGridCard'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Jumbotron />
      <ConcertGridCard />
      <BlogGridCard />
    </Layout>
  )
}
export default IndexPage