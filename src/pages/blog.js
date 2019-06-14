import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogues(sort: { fields: publicationDate, order: DESC }) {
        edges {
          node {
            titre
            publicationDate(formatString: "MMM Do, YYYY")
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog"/>
      <h1>Nouvelles</h1>
      <ol className={blogStyles.posts}>
        {
          data.allContentfulBlogues.edges.map((edge, id) => {
            return (
              <li className={blogStyles.post} key={id} >
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.titre}</h2>
                  <p>{edge.node.publicationDate}</p>
                </Link>
              </li>
            )
          })
        }
      </ol>

    </Layout>
  )
}
export default BlogPage