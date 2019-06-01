import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'


const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show-up here later on.</p>
      <ol>
        {
          data.allMarkdownRemark.edges.map((edge, id) => {
            return (
              <li key={id}>
                <Link to={`/blog/${edge.node.fields.slug}`}><h2>{edge.node.frontmatter.title}</h2></Link>
                <p>{edge.node.frontmatter.date}</p>
              </li>
            )
          })
        }
      </ol>

    </Layout>
  )
}
export default BlogPage